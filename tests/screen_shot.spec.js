// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Screenshot cature", ()=>{  

    test("screenshot capture" , async({page}) =>{
        await page.goto('https://www.facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await page.screenshot({path: "homePage.png"})
        await page.screenshot({path: "homepageFullScreenshot.png", fullPage:true})

        await page.locator('[data-testid="open-registration-form-button"]').screenshot({path: "createAccount.png"})
        const buffer = await page.screenshot();
        console.log(buffer.toString('base64'))
    })

})