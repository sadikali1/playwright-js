// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Data Driven Test", ()=>{  
   const users_data = [ ["First1", "Last1", "tes1t@tsst.com", "25", "32693", "Eng"],
                        ["First2", "Last2", "tes2t@tsst.com", "27", "345435", "IT"],
                        ["First3", "Last3", "test3@tsst.com", "30", "354434", "BD"]  
                    ]

   users_data.forEach(data => {

        test(`create user ${data[0]}`, async({page}) =>{
            await page.goto('https://demoqa.com/webtables');
            await expect(page).toHaveTitle(/DEMOQA/);
            await page.locator('[id="addNewRecordButton"]').click()
            await page.getByPlaceholder("First Name").fill(data[0])
            await page.getByPlaceholder("Last Name").fill(data[1])
            await page.locator('[id="userEmail"]').fill(data[2])
            await page.getByPlaceholder("Age").fill(data[3])
            await page.getByPlaceholder("Salary").fill(data[4])
            await page.getByPlaceholder("Department").fill(data[5])
            await page.locator('[id="submit"]').click()
        })
   })
})