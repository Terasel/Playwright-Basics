import { test, expect } from '@playwright/test'
import { LoginPage } from './pageobjects/LoginPage'

test('purchase an item', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    const login = new LoginPage(page)
    await login.loginWithCredentials('standard_user', 'secret_sauce')

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all()

    const randomIndex = Math.floor(Math.random() * itemsContainer.length)

    const randomItem = itemsContainer[randomIndex]

    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText()
    const expectedName = await randomItem.locator('.inventory_item_name').innerText()
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()

    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`)

    await randomItem.getByRole('button', { name: 'Add to cart' }).click()

    await page.locator('a.shopping_cart_link').click()

    //await page.pause()

    expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible()

    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()

    expect(actualName).toEqual(expectedName)
    expect(actualDescription).toEqual(expectedDescription)
    expect(actualPrice).toEqual(expectedPrice)

    await page.getByRole('button', { name: 'Checkout' }).click()

    await page.getByRole('textbox', { name: 'First Name' }).fill('Goku')
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Sayayin')
    await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('11000')

    await page.getByRole('button', { name: 'Continue' }).click()
    await page.getByRole('button', { name: 'Finish' }).click()

    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible()

})