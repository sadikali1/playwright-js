// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Handle HTTP Authentication", ()=>{  

    test("Http Authentication", async({ browser}) =>{
        const context = browser.newContext({
            httpCredentials:{
                username: "postman",
                password: "password"
            }  
        })
        const page = await (await context).newPage()
        await page.goto("https://postman-echo.com/basic-auth")
        var text = await page.locator('body').innerText();
        console.log(text)
    })

})