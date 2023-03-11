// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Drag and drop example", ()=>{  

    test("Drag and Drop element", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await expect(page).toHaveTitle(/The Internet/);
        await page.locator('[id="column-a"]').dragTo(await page.locator('[id="column-b"]'))
    })

    test("Drag and Drop element by using mouse action", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await expect(page).toHaveTitle(/The Internet/);
        await page.locator('[id="column-a"]').hover()
        await page.mouse.down()
        await page.locator('[id="column-b"]').hover()
        await page.mouse.up()
    })
   
})