import { test, expect } from '@playwright/test'

test('purchase an item', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user')
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all()

    const randomIndex = Math.floor(Math.random() * itemsContainer.length)

    const randomItem = itemsContainer[randomIndex]

    await page.pause()

})