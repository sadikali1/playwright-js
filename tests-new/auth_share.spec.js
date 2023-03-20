// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Authentication", ()=>{  

    test("Capture session", async ({page})=> {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //await expect(page).toHaveTitle(/OrangeHRM/);
        await page.locator("[name='username']").fill("admin")
        await page.locator('[name="password"]').fill("admin123");
        await page.locator('button').click()
        const dashboard = await page.locator("//h6");
        await expect(dashboard).toHaveText("Dashboard") 
        await page.context().storageState({path: "user.json"}) 
    })

    test('authenticate Orange Hrm', async ({ browser}) => {
        const context = await browser.newContext({storageState: "user.json"})
        const page = await context.newPage()
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const dashboard = await page.locator("//h6");
        await expect(dashboard).toHaveText("Dashboard")
    });
});