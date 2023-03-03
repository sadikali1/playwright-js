// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Check box and Radio button", ()=>{  

    test("Handle checkbox", async({page, browserName}) =>{
        await page.goto('http://autopract.com/selenium/form5/');
        await expect(page).toHaveTitle(/Contact Form/);
        await page.check('[value="two"]')
        var status1 = await page.isChecked('[value="two"]')
        expect(status1).toBeTruthy()

        await page.uncheck('[value="one"]')
        var status2 = await page.isChecked('[value="one"]')
        expect(status2).toBeFalsy()
    })

    test("Handle radio button", async({page, browserName}) =>{
        await page.goto('http://autopract.com/selenium/form5/');
        await expect(page).toHaveTitle(/Contact Form/);

        await page.check('[value="CA"]')
        var status1 = await page.isChecked('[value="CA"]')
        expect(status1).toBeTruthy()

        var status2 = await page.isChecked('[value="US"]')
        expect(status2).toBeFalsy()
    })

})