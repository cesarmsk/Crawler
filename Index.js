const puppeteer = require('puppeteer');
const config = require('./lib/config');
const listArray = require('./lib/helpers').listArray;
const printArray = require('./lib/helpers').printArray;

(async () =>
{
    const browser = await puppeteer.launch({
    headless: config.isHeadless,
    slowMo: config.slowMo,
    devtools: config.isDevtools,
    timeout: config.launchTimeout,
    ignoreHTTPSErrors: true,
    args: ['--disable-setuid-sandbox', '--no-sandbox']    
    })


    let lista
    const page = await browser.newPage();
    let url = config.baseUrl;

    console.log(`\nPesquisando objetos e Navegando nos Links da Página ${url}...\n`);
    await page.goto(url);

    //Listando Scripts...    
    lista = await listArray('Scripts', page, 'script', 1);
    await printArray(page, lista, 'Scripts');

    //Listando Imagens...
    lista = await listArray('Imagens', page, 'img', 1);
    await printArray(page, lista,'Imagens');

    //Listando Style Sheets...
    lista = await listArray('Style Sheets', page, 'link', 2); 
    await printArray(page, lista,'Style Sheets');

    //Listando e abrindo Links...
    lista = await listArray("links", page, 'a', 2);
    await printArray(page, lista,'Links', config.xUrl1, config.xUrl2);

    
}

)();


    