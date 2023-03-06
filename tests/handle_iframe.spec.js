// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Handle IFrame", ()=>{  

    test("Simple iFrame", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/iframe');
        await page.frameLocator('[id="mce_0_ifr"]').locator("#tinymce").fill("This is testing text")
      
    })


    test("Nest iFrame", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/nested_frames');
        
        var bottomText = await page.frameLocator('[name="frame-bottom"]').locator("body").innerText();
        console.log(bottomText)

        var topFrame = await page.frameLocator('[name="frame-top"]')
        var leftText =  await topFrame.frameLocator('[name="frame-left"]').locator("body").innerText();
        var middleText = await topFrame.frameLocator('[name="frame-middle"]').locator('[id="content"]').innerText();
        var rightText =  await topFrame.frameLocator('[name="frame-right"]').locator("body").innerText();
        console.log(leftText)
        console.log(middleText)
        console.log(rightText)
      
    })


})
