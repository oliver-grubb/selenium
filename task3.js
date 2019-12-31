var webdriver = require('selenium-webdriver');



var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.
        chrome()).build();
browser.get('http://www.bbc.com');
var stories1 = browser.findElement(webdriver.By.className('top-story__wrapper gel-layout__item hp-bp-m-one-half hp-ts--news'))
stories1.findElement(webdriver.By.className('top-story__title')).getText().then(function (promiseResult) {
    console.log(promiseResult);
});

var stories2 = browser.findElement(webdriver.By.className('top-story__wrapper top-story--small-image gel-layout__item gel-one-half hp-bp-m-one-quarter hp-ts--sport'))
stories2.findElement(webdriver.By.className('top-story__title')).getText().then(function (promiseResult) {
    console.log(promiseResult);
});

var stories2 = browser.findElement(webdriver.By.className('top-story__wrapper top-story--small-image gel-layout__item gel-one-half hp-bp-m-one-quarter hp-ts--news'))
stories2.findElement(webdriver.By.className('top-story__title')).getText().then(function (promiseResult) {
    console.log(promiseResult);
});