const { Given } = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');


let driver;



Given('Estoy en la pagina detalles servicios', async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000, script: 20000 });
    await driver.get('http://localhost:5173/services');
    await driver.quit();
});
