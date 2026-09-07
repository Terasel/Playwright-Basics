import { test, expect } from '@playwright/test';

// placeholder file

test('purchase an item', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')

  await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce')
  await page.getByRole('button', {name: 'Login'}).click()

  await testInfo.attach('login', {
    body: await page.screenshot(),
    contentType: 'image/png'
  })

  const itemsContainer = await page.locator('#inventory_container .inventory_item').all()


  for(let item of itemsContainer){
    console.log(await item.innerText()) 
  }

});
