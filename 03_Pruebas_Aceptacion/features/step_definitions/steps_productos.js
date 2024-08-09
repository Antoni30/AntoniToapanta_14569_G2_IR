const { Given, When, Then ,AfterAll} = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');


let driver;
const screenshots = [];
let pdfDoc;
let pageIndex = 0;

Given('Estoy en la pagina de  detalles Productos', async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000, script: 20000 });
    await driver.get('http://localhost:5173/products');
});
Then('genero un PDF de como {string}', async function (escenario) {
    if (!pdfDoc) {
      pdfDoc = await PDFDocument.create();
  }
  // Tomar una captura de pantalla con Selenium
  const screenshotPath = path.join(__dirname, `screenshot_Product${pageIndex}.png`);
  await driver.sleep(3000);
  const screenshot = await driver.takeScreenshot();
  fs.writeFileSync(screenshotPath, Buffer.from(screenshot, 'base64'));

  screenshots.push(screenshotPath);

  // Agregar una nueva página al PDF
  const page = pdfDoc.addPage([600, 800]);

  // Agregar texto al PDF
  page.drawText(`Captura de pantalla para el escenario`, {
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
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(path.join(__dirname, 'documento_Pruebas_Seccion_detalle_Productos.pdf'), pdfBytes);

        for (const screenshot of screenshots) {
            fs.unlinkSync(screenshot);
        }
    }
});
Then('cerrar session Productos', async function () {
    if (driver && (await driver.getSession())) {
        await driver.quit();
    } else {
        console.log('El driver ya no tiene una sesión activa.');
    }
});

