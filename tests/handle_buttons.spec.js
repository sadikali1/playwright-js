// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Button double, right and single click, hover and Force click", ()=>{  

    test("Mouse clicks", async({page}) =>{
        await page.goto('https://demoqa.com/buttons');
        await expect(page).toHaveTitle(/DEMOQA/);
        await page.getByText('Double Click Me').dblclick();
        await page.getByText('Right Click Me').click({button: 'right'})
        //await page.getByText('Click Me').last().click()
        //await page.getByText('Click Me').last().click({position: {x:0, y:0}})
        await page.getByText('Click Me').last().click({force: true})
    })

    test("click using shift and control", async({page}) =>{
        await page.goto('https://demoqa.com/links');
        await expect(page).toHaveTitle(/DEMOQA/);
        //await page.locator('[id="dynamicLink"]').click({modifiers: ['Shift']})
        await page.locator('[id="dynamicLink"]').click({modifiers: ['Control']})

    })

    test("Mouse Hover", async({page}) =>{
        await page.goto('https://demoqa.com/menu');
        await expect(page).toHaveTitle(/DEMOQA/);
        await page.getByText('Main Item 2').hover();
        await page.getByText('SUB SUB LIST »').hover();
        await page.getByText('Sub Sub Item 2').click()
        console.log("Test")
    })

    test("Programmatic click", async({page}) =>{
        await page.goto('https://demoqa.com/menu');
        await expect(page).toHaveTitle(/DEMOQA/)
        await page.getByText('Sub Sub Item 2').dispatchEvent("click")
        console.log("Test")
    })



})

// Mouse double click, right click, left click
// click on position 
// click by using control or shift
// mouse hover
// force click
// Programmatic click