

    test('Check thumnails on home page',async () => {
        const puppeteer = require("puppeteer");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // goto main page 
        await page.goto("https://big-bytez.github.io/cse110-fa21-group19/source/home-page/index.html",{
            waitUntil: 'networkidle0',//wait until all source loaded
        });

        // await page.goto("http://127.0.0.1:5500/source/home-page/index.html",{
        //     waitUntil: 'networkidle0',//wait until all source loaded
        // });
        
        //Grab all Thumbnails on home page
        // const numContainer = await page.$$eval(".container", (prodItems) => {
        //     return prodItems.length;
        // });
        //Grab all Containers on home page
        const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
            return prodItems.length;
        });


        await browser.close();
        // # container * 5  = # thumnials
        expect(numThumbnails).toBe(15);



    },10000);

    test('Check time button',async () => {
        const puppeteer = require("puppeteer");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://big-bytez.github.io/cse110-fa21-group19/source/home-page/index.html",{
            waitUntil: 'networkidle0',
        });
        // await page.goto("http://127.0.0.1:5500/source/home-page/index.html",{
        //     waitUntil: 'networkidle0',//wait until all source loaded
        // });

        //wait untill page loaded

        // click 10 mins button
        await page.click("center button");
        await page.waitForNetworkIdle();
        // await page.screenshot({
        //     path: "./search page1.png",
        //     fullPage: true
        // });

        // await page.screenshot({
        // path: "./search page2.png",
        // fullPage: true
        // });

        
        // Grab all Thumbnails
        const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
            return prodItems.length;
        });

    //     let checkMark = true;
    //     setTimeout(async() => {await browser.close();},5000);
    //     const thumnail = await page.$(".container > a");
    //     await thumnail.click();

        await browser.close();

        expect(numThumbnails > 0).toBe(true);

    },20000);

    test('Check search page',async () => {
        const puppeteer = require("puppeteer");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://big-bytez.github.io/cse110-fa21-group19/source/home-page/index.html",{
            waitUntil: 'networkidle0',
        });

        // await page.goto("http://127.0.0.1:5500/source/home-page/index.html",{
        //     waitUntil: 'networkidle0',
        // });


            await page.$eval('#query', el => el.value = "chicken");
            // click 10 mins button
            await page.click("#submit");
            //wait untill page loaded
            await page.waitForNetworkIdle();
            // await page.screenshot({
            //     path: "./search page.png",
            //     fullPage: true
            // })


        // Grab all Thumbnails
        const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
            return prodItems.length;
        });

        await browser.close();

        expect(numThumbnails > 0).toBe(true);

    },10000);
