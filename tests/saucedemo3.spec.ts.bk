import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';
import dotenv from 'dotenv';

test('Test de compras', async({ page }) =>{
    await page.goto('https://www.saucedemo.com/')
    /* await page.getByRole('textbox',{name:'Username'}).fill('standard_user')
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click() */

    const pagina = new LoginPage(page)
    await pagina.loginWithCredentials('standard_user','secret_sauce')
    await pagina.checkSuccessLogin()


    ////button[@id='add-to-cart-sauce-labs-backpack']
    const itemsContainer = await page.locator('#inventory_container .inventory_item').all()
    const randomIndex = Math.floor(Math.random() * itemsContainer.length)
    const randomItem = itemsContainer[randomIndex]
    const expectDescription = await randomItem.locator(' .inventory_item_desc').innerText()
    const expectName = await randomItem.locator(' .inventory_item_name ').innerText()
    const expectPrice = await randomItem.locator(' .inventory_item_price').innerText()


    console.log(`Description: ${expectDescription}`)
    console.log(`Name: ${expectName}`)
    console.log(`Price: ${expectPrice}`)

    await randomItem.getByRole('button',{name:'Add to cart'}).click()
    await page.locator('a.shopping_cart_link').click()

    //await page.pause()

    expect(page.getByRole('button',{name:'Checkout'})).toBeVisible()

    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    console.log(`Actual Name: ${actualName}`)
    console.log(`Actual Price: ${actualPrice}`)
    console.log(`Actual Description: ${actualDescription}`)

    expect(expectDescription).toEqual(actualDescription)
    expect(expectName).toEqual(actualName)
    expect(expectPrice).toEqual(actualPrice)

    await page.getByRole('button',{name:'Checkout'}).click()

    await page.locator('//input[@id=\'first-name\']').fill('Guillermo')
    await page.locator('//input[@id=\'last-name\']').fill('Llano Medina')
    await page.locator('//input[@id=\'postal-code\']').fill('76000')    

    await page.getByRole('button',{name:'Continue'}).click()

    await page.getByRole('button',{name:'Finish'}).click()

    const headinFinish = await page.getByRole('heading',{name:'Thank you for your order!'}).innerText()
    console.log(`Heading: ${headinFinish}`)
    expect(page.getByRole('heading',{name:'Thank you for your order!'})).toBeVisible()

    // await page.locator('//button[@id=\'add-to-cart-sauce-labs-backpack\']').click()
    // await page.locator('//a[@class=\'shopping_cart_link\']').click()
    await page.pause()

});

test('Navigate', async ({ page }) => {
    
    dotenv.config(); // Cargar las variables de entorno
    console.log('BASE_URL:', process.env.BASE_URL);
    await page.goto(process.env.BASE_URL!);

   
    /* await page.getByRole('link',{name: 'Ingresa', exact: true}).click()
    await page.pause() */
  });

  test('TC01 - Login exitoso con credenciales válidas', async ({ page }) => {
    const loginPage = new SauceDemoPage(page);
    await loginPage.login(process.env.USER!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/inventory/);
  });