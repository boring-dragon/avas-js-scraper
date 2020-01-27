const puppeteer = require('puppeteer');

async function scrapenews(url) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="app"]/div[2]/h1');
  const txt = await el.getProperty('textContent');
  const title = await txt.jsonValue();

  const [el2] = await page.$x('//*[@id="app"]/div[3]/div/div[1]/div[1]/div/div/div/div/figure/img');
  const src = await el2.getProperty('src');
  const image = await src.jsonValue();

  const [el3] = await page.$x('/html/body/div[2]/div[2]/a');
  const cat = await el3.getProperty('textContent');
  const category = await cat.jsonValue();

  const [el4] = await page.$x('//*[@id="app"]/div[2]/div/div[1]/div[2]/time');
  const time = await el4.getProperty('textContent');
  const created_at = await time.jsonValue();

  const [el5] = await page.$x('//*[@id="app"]/div[2]/div/div[1]/div[1]/a');
  const author = await el5.getProperty('textContent');
  const written_by = await author.jsonValue();

  console.log({title, image,category,written_by,created_at});

  browser.close();

    
}

scrapenews('https://avas.mv/77142');