// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("find locators by", ()=>{  
    
    test("Get element by Role ", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.getByRole("link", {name: "Forgotten password?"})).toBeVisible()
        await page.getByRole("link", {name: "Forgotten password?"}).click()
    })


    test("Get Element Locate by text ", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.getByText("Forgotten password?")).toBeVisible()
        await expect(page.getByText("Create new account")).toBeVisible()
        await page.getByText("Forgotten password?").click()
    })

    test("Get Element Locate by Label ", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(page).toHaveTitle(/The Internet/);
        await expect(page.getByLabel("username")).toBeVisible()
        await expect(page.getByLabel("Password")).toBeVisible()
        await page.getByLabel("username").fill("Admin")
        await page.getByLabel("Password").fill("Admin")
    })

    test("Get Element Locate by placeholder ", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.getByPlaceholder("Email address or phone number")).toBeVisible()
        await expect(page.getByPlaceholder("Password")).toBeVisible()
        await page.getByPlaceholder("Email address or phone number").fill("admin")
        await page.getByPlaceholder("Password").fill("Admin")
    })
  
    test("Get Element Locate by alt text", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.getByAltText('Facebook')).toBeVisible();
        var attributeValue = await page.getByAltText('Facebook').getAttribute("src")
        console.log(attributeValue)
    })

    test("Get Element Locate by Title", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.getByTitle('Sign up for Facebook')).toBeVisible();
        await expect(page.getByTitle('Log in to Facebook')).toBeVisible();
        await page.getByTitle('Log in to Facebook').click()
    })

    test("Get Element Locate by TestId", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.getByTestId('open-registration-form-button')).toBeVisible();
        await page.getByTestId('open-registration-form-button').click()
    })


    test("Get Element Locate by Xpath", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.locator('xpath=//input[@id="email"]')).toBeVisible()
        await expect(page.locator('xpath=//input[@name="pass"]')).toBeVisible()
        await expect(page.locator('xpath=//button[@name="login"]')).toBeVisible()
        await page.locator('//input[@id="email"]').fill("Admin@gmail.com")
        await page.locator('//input[@name="pass"]').fill("Password")
        await page.locator('//button[@name="login"]').click()
    })


    test("Get Element Locate by CSS", async({page}) =>{
        await page.goto('https://facebook.com/');
        await expect(page).toHaveTitle(/Facebook – log in or sign up/);
        await expect(page.locator('css=input[id="email"]')).toBeVisible()
        await expect(page.locator('css=input[name="pass"]')).toBeVisible()
        await expect(page.locator('css=button[name="login"]')).toBeVisible()
        await page.locator('input[id="email"]').fill("Admin@gmail.com")
        await page.locator('input[name="pass"]').fill("Password")
        await page.locator('button[name="login"]').click()
    })


    test("Get Element of Shandow root", async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/shadowdom');
        await expect(page).toHaveTitle(/The Internet/);
        var content = await page.locator('[name="my-text"]').first().textContent()
        console.log(content)
    })

})