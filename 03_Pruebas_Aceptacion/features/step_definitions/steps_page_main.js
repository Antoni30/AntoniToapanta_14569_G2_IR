const { Given,When,After } = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');


let driver;


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
