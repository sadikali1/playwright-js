// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Handle Java Script dialog", ()=>{  

    test("handle alert popup", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(page).toHaveTitle(/The Internet/);
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain("alert")
            expect(dialog.message).toContain("I am a JS Alert")
            await dialog.accept()
        })
        await page.getByText("Click for JS Alert").click()
        //await page.getByText("Click for JS Confirm").click()
    })

})