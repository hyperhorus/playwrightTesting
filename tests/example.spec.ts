import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('test 3', async ({ page }) => {
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

test('test locating', async ({ page }) => {
  await page.goto('https://teststore.automationtesting.co.uk/index.php')
  const productos = await page.getByAltText('Hummingbird printed t-shirt').allInnerTexts()  
  //await page.pause()
  console.log("Total de elementos: ", productos.length)
 for(let titulo of productos){    
    console.log('Valor del titulo: ', titulo)
 }  
});

test('test 5 getByRole', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.mx')
  await page.getByRole('link',{name: 'Ingresa', exact: true}).click()
  await page.pause()
});