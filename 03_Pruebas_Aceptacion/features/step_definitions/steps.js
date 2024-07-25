const { Given, When, Then ,AfterAll,After } = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');


let driver;
const screenshots = [];
let pdfDoc;
let pageIndex = 0;

Given('que estoy en la página del formulario', async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000, script: 20000 });
    await driver.get('http://localhost:5173');
});

When('lleno el formulario con datos válidos', async function () {
    await driver.findElement(By.name('firstname')).sendKeys('Nombre de Prueba');
    await driver.findElement(By.name('lastname')).sendKeys('Apellido de Prueba');
    await driver.findElement(By.name('email')).sendKeys('prueba@example.com');
    await driver.findElement(By.name('telephone')).sendKeys('0987654321');
});

When('envío el formulario', async function () {
    await driver.findElement(By.id('1')).click();
});

When('dejo el campo {string} vacío', async function (campo) {
    // No hacer nada para dejar el campo vacío
});

When('lleno el campo {string} con {string}', async function (campo, valor) {
    await driver.findElement(By.name(campo)).sendKeys(valor);
});

Then('debería ver un mensaje de éxito', async function () {
    let mensaje = await driver.findElement(By.id('mensaje_exito')).getText();
    if (mensaje !== 'Datos enviados correctamente') {
        throw new Error('El mensaje de éxito no es el esperado');
    }
});

Then('debería ver un mensaje de error indicando {string}', async function (mensajeEsperado) {
    let mensaje = await driver.findElement(By.id('mensaje_exito')).getText();
    if (mensaje !== mensajeEsperado) {
        throw new Error(`El mensaje de error fue: ${mensaje}, pero se esperaba: ${mensajeEsperado}`);
    }
});

Then('genero un PDF con la captura de pantalla {string}', async function (escenario) {

      // Crear un nuevo documento PDF si no está creado
      if (!pdfDoc) {
        pdfDoc = await PDFDocument.create();
    }


    // Tomar una captura de pantalla con Selenium
    const screenshotPath = path.join(__dirname, `screenshot_${pageIndex}.png`);
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync(screenshotPath, Buffer.from(screenshot, 'base64'));

    screenshots.push(screenshotPath);

    // Agregar una nueva página al PDF
    const page = pdfDoc.addPage([600, 800]);

    // Agregar texto al PDF
    page.drawText(`Captura de pantalla para el escenario ${pageIndex + 1}`, {
        x: 50,
        y: 720,
        size: 11,
        color: rgb(0, 0, 0.8),
    });

    page.drawText(`${escenario}`, {
        x: 50,
        y: 690,
        size: 11,
        color: rgb(0, 0, 0.8),
    });

    // Incrustar la imagen en el PDF
    const pngImageBytes = fs.readFileSync(screenshotPath);
    const pngImage = await pdfDoc.embedPng(pngImageBytes);
    const pngDims = pngImage.scale(0.4);

    page.drawImage(pngImage, {
        x: 50,
        y: 250,
        width: pngDims.width,
        height: pngDims.height,
    });
    pageIndex++;
});

After(async function () {
    if (driver) {
        await driver.quit();
    }
});

AfterAll(async function () {
    if (pdfDoc) {
        // Guardar el PDF en el sistema de archivos
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(path.join(__dirname, 'documento_final.pdf'), pdfBytes);

        // Eliminar las capturas de pantalla temporales
        for (const screenshot of screenshots) {
            fs.unlinkSync(screenshot);
        }
    }
});