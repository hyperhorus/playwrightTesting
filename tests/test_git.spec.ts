import { test, expect } from '@playwright/test';

test('test unica prueba', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx')
  await page.locator('input[id=\'cb1-edit\']').fill('iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[@class=\'ui-search-layout ui-search-layout--stack\']')).toBeVisible()
  //await page.pause()
  const titles = await page.locator('//ol[@class=\'ui-search-layout ui-search-layout--stack\']//li//h3').allInnerTexts()

 console.log("Total de elementos: ", titles.length)
 for(let titulo of titles){
    console.log('Valor del titulo: ', titulo)

 }
});