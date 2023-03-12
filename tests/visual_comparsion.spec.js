// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Visual comparsion", ()=>{  

    test("test Visual comparsion", async({page, browserName}) =>{
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await expect(page).toHaveTitle(/The Internet/);
        await expect(page).toHaveScreenshot("Visual-comparsion-test-Visual-comparsion-1-chromium-win32.png")
        await expect(page).toHaveScreenshot()
    
        expect(await page.textContent('body')).toMatchSnapshot('page.txt');
    })

})