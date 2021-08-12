const puppeteer = require('puppeteer');
const { expect } = require("chai");
const os = require("os");

function macSafeKeyCombo(key) {
    if (os.platform() === "darwin" && key === "Control") {
       // Puppeteer calls the Command key "Meta"
       return k => k === "Control" ? "Meta" : k;
    }
    return key;
};

describe.only('Browser image', async function () {

    let browser;
    let page;

    beforeEach(async function() {
        
        browser = await puppeteer.launch({headless:true});
        page = await browser.newPage();
        await page.goto('http://localhost:3000',{
            waitUntil: 'networkidle2',
          }
        );
    });

    afterEach(async function() {
        await browser.close();
    });

    it("Page loads", async function() {
        const appShell = await page.waitForSelector('#theia-app-shell');
        expect(appShell).to.not.eq(null);
    });

    it("Correct window title", async function() {
        const title = await page.title();
        expect(title).to.include('Theia Blueprint');
    });

    it("Open file", async function() {
        // Ctrl + Alt + O to open a file
        await page.keyboard.down(macSafeKeyCombo('Control'), {delay:100});
        await page.keyboard.down('AltLeft', {delay:100});
        await page.keyboard.press('KeyO', {delay:100});
        await page.keyboard.up(macSafeKeyCombo('Control'), {delay:100});
        await page.keyboard.up('AltLeft', {delay:100});

        await page.waitForSelector('#theia-dialog-shell');
        const dialogTitle = await page.$eval('.dialogTitle', e => e.textContent);
        expect(dialogTitle).to.eq('Open');
    });
});