const { count } = require("console");
const { PRIORITY_BELOW_NORMAL } = require("constants");

describe('Basic user flow for Website', () => {
  beforeAll(async () => {
    await page.goto("https://big-bytez.github.io/home-page/");
  });

  it('Make sure <product-item> elements are populated', async () => {
    console.log('Checking to make sure <product-item> elements are populated...');
    let allArePopulated = true;
    let data, plainValue;
    const article = await page.$$("article");
    console.log(`Checking product item 1/${article.length}`);
    // Grab the .data property of <article> to grab all of the json data stored inside
    for(let i=0;i<article.length;i++){
    data = await article[i].getProperty("shadowRoot");
    // Convert that property to JSON
    plainValue = await data.jsonValue();
    // Make sure the h1, circle, and image are populated in the JSON
    if (plainValue.h1.length == 0) { allArePopulated = false; }
    if (plainValue.circle.length == 0) { allArePopulated = false; }
    if (plainValue.image.length == 0) { allArePopulated = false; }
    // Expect allArePopulated to still be true
    }
    expect(allArePopulated).toBe(true);

  }, 10000);
  it('Clicking the "10Min, 30Min, 60Min" button should change container place number', async () => {
    console.log('Checking the "10Min, 30Min, 60Min" button...');
    let TimeButtonP=true;
    const container=await page.$$('container');
    const timeButtons=await page.$$("time-buttons")
    // Grab the shadowRoot of that element (it's a property), then query a button from that shadowRoot.
    let shadowRoot=await timeButtons.getProperty("shadowRoot");
    let place=await container.getProperty('place');
    let button=await shadowRoot.$('button');
    // Once you have the button, you can click it and check the innerText property of the button.
    await button.click();
    let innerText=await button.getProperty('innerText');
    // Once you have the innerText property, use innerText['_remoteObject'].value to get the text value of it
    let text=await innerText['_remoteObject'].value;  
    if(text=="10"&&place!=0){
      TimeButtonP=false;
    }
    else if(text=="30"&&place!=1){
      TimeButtonP=false;
    }
    else if(text=="60"&&place!=2){
      TimeButtonP=false;
    }
    //make it back 
    expect(TimeButtonP).toBe(true);
    
  }, 2500);
  it('Make sure <product-item> elements are populated', async () => {
    console.log('Checking to make sure <product-item> elements are populated...');
    let SearchPage = true;
    let data, plainValue;
    const article = await page.$$('search-recipe');
    console.log(`Checking product item 1/${article.length}`);
    // Grab the .data property of <article> to grab all of the json data stored inside
    for(let i=0;i<article.length;i++){
    data = await article[i].getProperty('article');
    // Make sure the h1, circle, and image are populated in the JSON
    if (data.img.length == 0) { SearchPage = false; }
    if (data.p.length == 0) { SearchPage = false; }
    // Expect allArePopulated to still be true
    }
    expect(SearchPage).toBe(true);
  }, 2500);
});
