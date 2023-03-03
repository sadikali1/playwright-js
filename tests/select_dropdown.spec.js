// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Drop down value", ()=>{  

    test("Select dropdown value", async({page, browserName}) =>{
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await expect(page).toHaveTitle(/The Internet/);

        //await page.locator('[id="dropdown"]').selectOption({value: "1"})
       // await page.locator('[id="dropdown"]').selectOption({index: 2})
        await page.locator('[id="dropdown"]').selectOption({label: "Option 1"})
        //await page.locator('[id="dropdown"]').selectOption("2")
        
    })

})