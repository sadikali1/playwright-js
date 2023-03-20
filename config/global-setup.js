// @ts-check
const { chromium, expect } = require('@playwright/test');

module.exports = async config => {
    const browser = await chromium.launch({headless: true})
    const page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await expect(page).toHaveTitle(/OrangeHRM/);
    await page.locator("[name='username']").fill("admin")
    await page.locator('[name="password"]').fill("admin123");
    await page.locator('button').click()
    const dashboard = await page.locator("//h6");
    await expect(dashboard).toHaveText("Dashboard") 
    await page.context().storageState({path: "user.json"}) 
    await browser.close()
}