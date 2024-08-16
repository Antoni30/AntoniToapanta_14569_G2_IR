const { Given, When, Then ,AfterAll} = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');


let driver;
const screenshots = [];
let pdfDoc;
let pageIndex = 0;

Given('Estoy en la pagina principal {string}', async function (elemento) {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000, script: 20000 });
    await driver.get('http://localhost:5173');
    const element = await driver.findElement(By.id(elemento));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);
});

When('selecciones el boton de ver mas me dirige a la pagina del Servicios', async function () {
    await driver.findElement(By.id('services_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas no dirige a la pagina del Servicios', async function () {
    await driver.findElement(By.id('services_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas me dirige a la pagina del About Us', async function () {
    await driver.findElement(By.id('presentation_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas no me dirige a la pagina del About Us', async function () {
    await driver.findElement(By.id('presentation_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas me dirige a la pagina del Productos', async function () {
    await driver.findElement(By.id('products_0_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas no me dirige a la pagina del Productos', async function () {
    await driver.findElement(By.id('products_0_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas no me dirige a la pagina del Proyectos', async function () {
    await driver.findElement(By.id('projects_0_slider_view_more_0')).click();
});

When('selecciones el boton de ver mas me dirige a la pagina del Proyectos', async function () {
    await driver.findElement(By.id('projects_0_slider_view_more_0')).click();
});

Then('cerrar', async function () {
    if (driver && (await driver.getSession())) {
        await driver.quit();
    } else {
        console.log('El driver ya no tiene una sesión activa.');
    }
});
Then('genero un PDF {string}', async function (escenario) {
    if (!pdfDoc) {
      pdfDoc = await PDFDocument.create();
  }
  // Tomar una captura de pantalla con Selenium
  const screenshotPath = path.join(__dirname, `screenshot_Main${pageIndex}.png`);
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
  fs.unlinkSync(screenshotPath);
  pageIndex++;
});

Then('guardar {string}', async function (nombreArchivo) {
    if (pdfDoc) {
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(path.join(__dirname, `${nombreArchivo}.pdf`), pdfBytes);

        // Reiniciar variables para el próximo escenario
        pdfDoc = null;
        pageIndex = 0;
    }
});

Then('Carga Imagenes en tiempo estimado M', async function () {
    const startTime = new Date().getTime();
    
    const imageElement = await driver.wait(
      until.elementLocated(By.css('img.about-image')), // Cambia el selector según la estructura de tu HTML
      5000 // Timeout after 5 seconds
    );
  
    const loadTime = new Date().getTime() - startTime;
  
    if (loadTime > 5000) {
      throw new Error(`Las imágenes no cargaron dentro de los 5 segundos (Tomó ${loadTime} ms).`);
    }
  });