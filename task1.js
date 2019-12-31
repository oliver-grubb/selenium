var webdriver = require('selenium-webdriver');

var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.
        chrome()).build();

browser.get('http://www.google.com');

var searchForm = browser.findElement(webdriver.By.tagName('form'));
var searchBox = searchForm.findElement(webdriver.By.name('q'));
searchBox.sendKeys('Cats');
searchBox.submit();

