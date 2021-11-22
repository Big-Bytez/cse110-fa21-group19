

    



test('Check thumnails on home page',async () => {
    const puppeteer = require("puppeteer");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500/source/home-page/index.html",{
        waitUntil: 'networkidle0',
      });
    
    //wait until the thumnails are generated
    const numContainer = await page.$$eval(".container", (prodItems) => {
        return prodItems.length;
    });
    const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
        return prodItems.length;
    });



    await browser.close();
        

        
    expect(numThumbnails).toBe(15);


        



    },10000);

    // it("Check recipes page routing", async () => {

    //     const puppeteer = require('puppeteer');
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto('http://127.0.0.1:5500/source/home-page/index.html');
    //     await page.waitForSelector('#tile');

    //     let checkMark = true;
    //     setTimeout(async() => {await browser.close();},5000);
    //     const thumnail = await page.$(".container > a");
    //     await thumnail.click();

    //     await page.waitForSelector("h1");
    //     const title =  await page.$("h1");
    //     let innertext = await title.getProperty("innerText");

    //     if (innertext['_remoteObject'].value == ""){
    //         checkMark = false;
    //     }
        
    //     await browser.close();
    //     expect(true).toBe(true);


    // },5000);


    // it('Check user page routing', async () => {

    //     const puppeteer = require('puppeteer');
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto('http://127.0.0.1:5500/source/home-page/index.html');
    //     await page.waitForSelector('#tile');

    //     let checkMark = true;
    //     setTimeout(async() => {await browser.close();},5000);
    //     const thumnail = await page.$(".user-portal > a");
    //     await thumnail.click();

    //     await page.waitForSelector('.recipe-box');
    //     const text =  await page.$('.recipe-box h3');
    //     let innertext = await text.getProperty('innerText');

    //     if (innertext['_remoteObject'].value == ""){
    //         checkMark = false;
    //     }
    //     await browser.close();
    //     expect(true).toBe(true);

    // },5000);

