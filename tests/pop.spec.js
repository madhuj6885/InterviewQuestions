
import { test } from '@playwright/test';

test("Pagination", async ({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");



    console.log(await page.title());

    const popupPromise = page.waitForEvent('popup');
    await page.locator("#PopUp").click();
    const popupPage = await popupPromise;
    console.log(await popupPage.title());

    await page.waitForTimeout(3000);
    
  
})
