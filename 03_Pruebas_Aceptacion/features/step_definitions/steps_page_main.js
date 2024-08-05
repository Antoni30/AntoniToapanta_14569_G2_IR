const { Given, When, Then ,AfterAll,After } = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');


let driver;
const screenshots = [];
let pdfDoc;
let pageIndex = 0;

Given('Estoy en la pagina principal', async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000, script: 20000 });
    await driver.get('http://localhost:5173');
});

When('selecciones el boton de ver mas me dirige a la pagina del Servicios', async function () {
    await driver.findElement(By.id('ver_Servicios')).click();
});

When('selecciones el boton de ver mas me dirige a la pagina del About Us', async function () {
    await driver.findElement(By.id('ver_About_us')).click();
});

When('selecciones el boton de ver mas me dirige a la pagina del Productos', async function () {
    await driver.findElement(By.id('ver_Productos')).click();
});

When('selecciones el boton de ver mas me dirige a la pagina del Proyectos', async function () {
    await driver.findElement(By.id('ver_Proyectos')).click();
});

After(async function () {
    if (driver) {
        await driver.quit();
    }
});


Then('genero un PDF {string}', async function (escenario) {

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

AfterAll(async function () {
    if (pdfDoc) {
        // Guardar el PDF en el sistema de archivos
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(path.join(__dirname, 'documento_Pruebas_Main_Page.pdf'), pdfBytes);

        // Eliminar las capturas de pantalla temporales
        for (const screenshot of screenshots) {
            fs.unlinkSync(screenshot);
        }
    }
});