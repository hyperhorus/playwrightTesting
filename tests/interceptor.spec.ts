import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../tests/pageobjects/SauceDemoPage';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

test('TC01b - login exitoso con interceptor', async ({ page }) => {

    await page.on("request", req => {
        console.log(req.url())
    })

    await page.route("**/*.{jpg,svg,css}", 
        (route) => route.abort()
    )

    // await page.route("https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.51d7ffaf.jpg", 
    //     (route) => route.abort()
    // )

    const loginPage = new SauceDemoPage(page);
    await loginPage.login(process.env.USER!, process.env.PASSWORD!);
    await expect(page).toHaveURL(/inventory/);

    await page.screenshot({path: 'logina1.png', fullPage:true })
});

test('Interceptor test', async ({ page }) => {

    await page.route("https://demoqa.com/BookStore/v1/Books", 
        (route) => {
            route.fulfill({
                status:304,
                headers:{
                    'Content-Type':'application/json'
                },
                body:`{
    "books": [
        {
            "isbn": "9781449325862",
            "title": "El libro de Memo",
            "subTitle": "A Working Introduction",
            "author": "Richard E. Silverman",
            "publish_date": "2020-06-04T08:48:39.000Z",
            "publisher": "O'Reilly Media",
            "pages": 234,
            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
        }
    ]
}`
            })
        }
    )

  
    await page.goto("https://demoqa.com/books")
    await page.pause()


    await page.screenshot({path: 'libros.png', fullPage:true })
});