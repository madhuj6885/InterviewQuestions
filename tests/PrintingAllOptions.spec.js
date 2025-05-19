import { expect, test } from '@playwright/test';
test("Print all Options", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator("#multipleFilesInput").setInputFiles(['tstData/MadhukumarA_4YrsAutomation.pdf','tstData/image.pdf']);
    // tstData\MadhukumarA_4YrsAutomation.pdf
    // const allOptions = await page.locator("#searchDropdownBox>option").all();
    // for(let option of allOptions) {
    //     let txt = await option.textContent();

    //     if(txt.includes("Watches")){
    //         await page.locator("#searchDropdownBox").selectOption(txt);
    //     }
    //     console.log(txt);

    // }

    // webtables

    const rows = await page.locator("[name='BookTable'] tbody tr");
        // console.log(await rows.length);

        // // for(let r of rows) {
        //     let txt = await r.textContent();
        //     // console.log(txt);
        // }
   let matchedRow = rows.filter({
    has:page.locator('td'),
    hasText:"Master In Java	"
   })
        // let matchedRow = rows.filter({
        //     has:page.locator("td"),
        //     hasText:'Master In Java'
        // })

        const allTds = await matchedRow.locator("td").all();
for(let d of allTds) {
    let txt = await d.textContent();
    console.log(txt);
    
}
    // await expect(rows.count())(7);

    await page.waitForTimeout(5000);
    // console.log(allOptions.length);
    



})