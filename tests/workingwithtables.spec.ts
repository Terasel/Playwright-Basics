import { test, expect } from '@playwright/test'

test('working with tables', async ({ page }) => {

    await page.goto('https://assertqa.com/practice/webtables')

    const tableContainer = await page.locator("xpath=//table[@id='employees-table']")

    const rows = await tableContainer.locator("xpath=.//tr").all()

    console.log(rows.length)

    for (let row of rows) { 
        console.log(await row.innerText()) 
    }
})

// element container: //table[@id='employees-table']
// .//tr -> rows
// table[@id='employees-table']//tr[2]//td[1] -> ID
// table[@id='employees-table']//tr[2]//td[2] -> first name
// table[@id='employees-table']//tr[2]//td[3] -> last name
// table[@id='employees-table']//tr[2]//td[4] -> email
// table[@id='employees-table']//tr[2]//td[5] -> age
// table[@id='employees-table']//tr[2]//td[6] -> salary
// table[@id='employees-table']//tr[2]//td[7] -> department
// table[@id='employees-table']//tr[2]//td[8] -> status
