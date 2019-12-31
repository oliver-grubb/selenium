var webdriver = require('selenium-webdriver');

var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.
        chrome()).build();

browser.get('http://www.amazon.com');

var searchbox = browser.findElement(webdriver.By.id('twotabsearchtextbox'));
searchbox.sendKeys('alexa');
searchbox.submit();

var itemlist = browser.findElement(webdriver.By.className('s-result-list s-search-results sg-row'));
var firstitem = itemlist.findElement(webdriver.By.css("div[data-index='1']"));
firstitem.findElement(webdriver.By.className("a-link-normal a-text-normal")).click();

var producttitle = browser.findElement(webdriver.By.id('productTitle')).getText().then(function(promiseResult) {
    console.log(promiseResult);
});

var productprice = browser.findElement(webdriver.By.id('priceblock_dealprice')).getText().then(function(promiseResult) {
    console.log(promiseResult);
});
browser.quit();