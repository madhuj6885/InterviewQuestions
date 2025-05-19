
import { test } from '@playwright/test';
test("Handling Authentication Popup", async ({page}) =>{
    await page.goto("https://cosmocode.io/automation-practice-webtable/");
    const rows = page.locator("//table[@id='countries']/tbody/tr");
    const allRows= rows.filter({
        has: page.locator('td')
    })
console.log(await allRows.length);

await page.waitForTimeout(5000);
  
})