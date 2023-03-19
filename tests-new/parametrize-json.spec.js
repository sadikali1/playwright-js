// @ts-check
const { test, expect } = require('@playwright/test');

var emp_data = require('./test-data.json')

test.describe("Data Driven Test using JSON", ()=>{  
  
    emp_data.forEach(data => {

        test(`create user ${data.FirstName}`, async({page}) =>{
            await page.goto('https://demoqa.com/webtables');
            await expect(page).toHaveTitle(/DEMOQA/);
            await page.locator('[id="addNewRecordButton"]').click()
            await page.getByPlaceholder("First Name").fill(data.FirstName)
            await page.getByPlaceholder("Last Name").fill(data.LastName)
            await page.locator('[id="userEmail"]').fill(data.EmailAddress)
            await page.getByPlaceholder("Age").fill(data.Age)
            await page.getByPlaceholder("Salary").fill(data.Salary)
            await page.getByPlaceholder("Department").fill(data.Depart)
            await page.locator('[id="submit"]').click()
        })
   })
})