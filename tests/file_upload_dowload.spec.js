// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("FileUpload and download", ()=>{  

    test("Download file", async({page, browserName}) =>{
        await page.goto('https://the-internet.herokuapp.com/download');
        await expect(page).toHaveTitle(/The Internet/);
        const downloadPromise = page.waitForEvent("download")
        await page.getByText("LambdaTest.txt").click();
        const download = await downloadPromise
        await download.saveAs("test.txt")

    })

    test("Upload file", async({page, browserName}) =>{
        await page.goto('https://the-internet.herokuapp.com/upload');
        await expect(page).toHaveTitle(/The Internet/);
        const downloadPromise = page.waitForEvent("filechooser")
        await page.locator('[id="file-upload"]').click()
        const file = await downloadPromise
        await file.setFiles("testng-7.7.1.jar")

    })

})