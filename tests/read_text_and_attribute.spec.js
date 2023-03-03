// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("get Text and attribute", ()=>{  

    test("Get Text", async({page}) =>{
        await page.goto('https://www.facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
       
        var text = await page.locator("h2").innerText()
        console.log(text)

        var placeHolder = await page.locator('[id="email"]').getAttribute("placeholder")
        console.log(placeHolder)
        expect(placeHolder)
    })

})