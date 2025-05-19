
import { test } from '@playwright/test';
test("Handling Authentication Popup", async ({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage({
      httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
    });

    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/");

    // await page.click("//a[text()='Login']");
        await page.waitForTimeout(5000);

    // await popupPage.getByLabel("Username").fill("madhu");
    // await popupPage.getByLabel("Password").fill("kumar");
    // await popupPage.waitForTimeout(5000);
    //     await popupPage.getByRole('button', {name:'Sign in'});
})