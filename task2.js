var webdriver = require('selenium-webdriver');

var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.
        chrome()).build();

browser.get('http://www.facebook.com');

var emailBox = browser.findElement(webdriver.By.name('email'));
emailBox.sendKeys('ollie-20101@hotmail.co.uk');
var passwordBox = browser.findElement(webdriver.By.name('pass'));
passwordBox.sendKeys('NotMyRealPasswordLol');

passwordBox.submit();