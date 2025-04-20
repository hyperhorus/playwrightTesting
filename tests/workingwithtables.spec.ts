import { test, expect } from '@playwright/test';

test('Test webtable', async ({ page }) => {
    await page.goto('https://cosmocode.io/automation-practice-webtable/')
    const tableContainer =  page.locator('xpath=//table[@id=\'countries\']')
    const rows = await tableContainer.locator("xpath=.//tr").all()

   console.log("tamaño de tabla " + rows.length)

   const countries: Country[] = []

    for(let row of rows){
        let country: Country = {
            name: await row.locator('xpath=//td[2]').innerText(),
            capital: await row.locator('xpath=//td[3]').innerText(),
            currency: await row.locator('xpath=//td[4]').innerText(),
            primaryLanguage: await row.locator('xpath=//td[5]').innerText()
        }
        countries.push(country)       
    } 

    // for(let pais of countries){
    //     console.log(pais)
    // }

    const hablaPortugues = countries.filter(country => country.primaryLanguage === 'Spanish')

    console.log(hablaPortugues)

/*     const row1 = rows.at(1)
    const countryName = await row1?.locator('//td[2]').innerText()
    const countryCapital = await row1?.locator('//td[3]').innerText()
    const countryCurrency = await row1?.locator('//td[4]').innerText()
    const countryLanguage = await row1?.locator('//td[5]').innerText()
    console.log("Pais " + countryName )
    console.log("Capital " + countryCapital )
    console.log("Moneda " + countryCurrency )
    console.log("Idioma " + countryLanguage ) */
  });


interface Country{
    name:string
    capital:string
    currency:string
    primaryLanguage:string
}

  /*
  container //table[@id='countries']

//table[@id='countries']//tr[3]/td[1] -> check
//table[@id='countries']//tr[3]/td[2] -> Country
//table[@id='countries']//tr[3]/td[3] -> Capital
//table[@id='countries']//tr[3]/td[4] -> Currency
//table[@id='countries']//tr[3]/td[5] -> Primary Language

  */