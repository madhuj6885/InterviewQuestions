import { test } from '@playwright/test';
test("Multiple Window", async ({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.title());

    const pagePromise = context.waitForEvent("page");
    await page.locator("//a[text()='OrangeHRM, Inc']").click();
    const newPage = await pagePromise;

    console.log(await newPage.title());
    await newPage.locator("[name='locale']").selectOption({value:"/en"});
    await page.locator([name='username']).fill("Admin");
    await page.locator([name='password']).fill("admin123");

    await page.waitForTimeout(5000);

    
})