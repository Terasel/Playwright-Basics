import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com/');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('iphone');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('link', { name: 'Apple iPhone 17 (256 GB) - Lavanda - Distribuidor Autorizado', exact: true }).dblclick();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});

test('test locators', async ({page}) => {
  await page.goto('https://www.youtube.com/');
  await page.pause()

  await page.locator('//input[@class="ytSearchboxComponentInput yt-searchbox-input title"]').fill('algo')
  await page.pause()
})