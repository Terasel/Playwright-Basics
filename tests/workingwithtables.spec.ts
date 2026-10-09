import { test, expect } from '@playwright/test'

interface Employee {
    id: string
    firstName: string
    lastName: string
    email: string
    age: string
    salary: string
    department: string
    status: string
}

test('working with tables', async ({ page }) => {
    await page.goto('https://assertqa.com/practice/webtables')

    const tableContainer = page.locator('#employees-table')

    const rows = tableContainer.locator('tbody tr')
    const rowCount = await rows.count()
    console.log(`Number of rows: ${rowCount}`)

    const employees: Employee[] = []

    for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i)

        const employee: Employee = {
            id: await row.locator('td:nth-child(1)').innerText(),
            firstName: await row.locator('td:nth-child(2)').innerText(),
            lastName: await row.locator('td:nth-child(3)').innerText(),
            email: await row.locator('td:nth-child(4)').innerText(),
            age: await row.locator('td:nth-child(5)').innerText(),
            salary: await row.locator('td:nth-child(6)').innerText(),
            department: await row.locator('td:nth-child(7)').innerText(),
            status: await row.locator('td:nth-child(8)').innerText(),
        }

        employees.push(employee)
    }

    // for (const employee of employees) {
    //     console.log(employee)
    // }

    const employeesOnActiveStatus = employees
        .filter(employee => employee.status === 'Active')

    console.log('Employees on Active status:', employeesOnActiveStatus)
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
