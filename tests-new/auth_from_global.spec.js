// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Authentication", ()=>{  

    test('authenticate Orange Hrm', async ({ page}) => {
        //const context = await browser.newContext({storageState: "user.json"})
        //const page = await context.newPage()
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const dashboard = await page.locator("//h6");
        await expect(dashboard).toHaveText("Dashboard")
    });

});