const { Given, When, Then ,AfterAll,After } = require('@cucumber/cucumber');
const { Builder, By, Browser } = require('selenium-webdriver');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

let driver;
const screenshots = [];
let pdfDoc;
let pageIndex = 0;


Given('Estoy en la pagina de  detalles Proyecto', async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().setTimeouts({ implicit: 10000, pageLoad: 20000, script: 20000 });
    await driver.get('http://localhost:5173/projects');
});

