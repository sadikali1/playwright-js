// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Orange HRM Tests", ()=>{  

    //test.skip(({ browserName }) => browserName === 'chromium', 'Chromium only!');
    
    test("Verify login functionality of OrangeHRM @Smoke", async({page, browserName}) =>{
        test.info().annotations.push({ type: 'issue', description: 'https://github.com/microsoft/playwright/issues/<some-issue>' });
        //test.skip(browserName === 'chromium', 'Still working on it');
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page).toHaveTitle(/OrangeHRM/);
        await page.locator("[name='username']").fill("admin")
        await page.locator('[name="password"]').fill("admin123");
        await page.locator('button').click()
        const dashboard = await page.locator("//h6");
        await expect(dashboard).toHaveText("Dashboard")
    })

    test('test @Smoke', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill('admin');
        await page.getByPlaceholder('Username').press('Tab');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });


    test('differt context ', async({browser}) =>{
         // Create two isolated browser contexts
            const adminContext = await browser.newContext();
            const userContext = await browser.newContext();
            
            // Create pages and interact with contexts independently
            const adminPage = await adminContext.newPage();
            const userPage = await userContext.newPage();

            await adminPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await userPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


    })
})