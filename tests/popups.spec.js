import{expect, test} from '@playwright/test';

// test("Handling Alerts", async ({page}) =>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     page.on("dialog",async dialog =>{
//         await expect(dialog.type()).toContain("alrt");
//         console.log(await dialog.message());
        
//         await expect(dialog.message()).toContain("I am an alert box!");
//         await dialog.accept();
// })
//     await page.locator("//button[@id='alertBtn']").click();
// })
// test("Handling Confirmation", async ({page}) =>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     page.on("dialog",async dialog =>{
//         await expect(dialog.type()).toContain("confirm");
//         console.log(await dialog.message());
        
//         await expect(dialog.message()).toContain("Press a button!");
//         await dialog.accept();
// })
//     await page.locator("//button[@id='confirmBtn']").click();
// })


test("Handling Prompt", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async dialog =>{
        await expect(dialog.type()).toContain("prompt");
        
        await expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept("Madhu");
})
    await page.locator("//button[@id='promptBtn']").click();
})