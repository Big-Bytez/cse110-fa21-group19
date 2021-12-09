

    test('Check thumnails on home page',async () => {
        const puppeteer = require("puppeteer");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // goto main page 
        await page.goto("https://big-bytez.github.io/cse110-fa21-group19/source/home-page/index.html",{
            waitUntil: 'networkidle0',//wait until all source loaded
        });

        //Grab all Containers on home page
        const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
            return prodItems.length;
        });


        await browser.close();
        // # container * 5  = # thumnials
        expect(numThumbnails>0).toBe(true);



    },10000);

    test('Check time button',async () => {
        const puppeteer = require("puppeteer");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        //wait untill page loaded
        await page.goto("https://big-bytez.github.io/cse110-fa21-group19/source/home-page/index.html",{
            waitUntil: 'networkidle0',
        });

        // click 10 mins button
        await page.click("center button");
        await page.waitForNetworkIdle();

        
        // Grab all Thumbnails
        const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
            return prodItems.length;
        });

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


            await page.$eval('#query', el => el.value = "chicken");
            // click 10 mins button
            await page.click("#submit");
            //wait untill page loaded
            await page.waitForNetworkIdle();


        // Grab all Thumbnails
        const numThumbnails = await page.$$eval('search-recipe', (prodItems) => {
            return prodItems.length;
        });

        await browser.close();

        expect(numThumbnails > 0).toBe(true);

    },10000);
