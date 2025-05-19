import { test } from '@playwright/test';

test("Handling WebTable", async ({page}) =>{
    await page.goto("https://demoapps.qspiders.com/ui/table/tablePagination");
    // await page.getByRole('link', {name:"Admin Login"}).click();
    // await page.getByPlaceholder("Username").fill("admin");
    // await page.getByPlaceholder("Password").fill("Test@123");
    // await page.getByRole('button', {name:"Login"}).click();
    // await page.waitForTimeout(3000);
    // await page.getByRole('link', {name:'Manage Products '}).click();
    // // await page.getByLabel("Search: ").fill("seller");
    // // await page.keyboard.press("Enter");
    // await page.waitForTimeout(3000);
    const rows = await page.locator("//p[contains(.,'Your Products List')]/parent::div//div/table/tbody/tr");
        // const tdS = await page.locator("#DataTables_Table_0 tbody tr td").all();



await page.waitForSelector("//ul[@class='flex space-x-2']/li");
        let pages = await page.locator("//ul[@class='flex space-x-2']/li");
        console.log(await pages.count());

        for(let p=0; p<await pages.count(); p++) {
            if(p>0) {
                await pages.nth(p).click();

            }

            for(let i=0; i<await rows.count(); i++){
                const row = rows.nth(i);
                const tds = row.locator("td");
                for(let j=0; j<await tds.count(); j++) {
                    console.log(await tds.nth(j).textContent());
                }

            }
        }

    //     for(let p=0; p<=rows.length; p++) {
            
    // for(let r of rows) {
    //     let txt = await r.locator("td").innerText();
    //     console.log(txt);
    // }

    //     }




    // console.log(Array.isArray(tdS));
    


    // for(let td of tdS) {
    //     let txt = await td
    // }

    // console.log(Array.isArray(tdS));
// console.log(await tdS.count());

    // let matchedRow = rows.filter({
        
    //     has: page.locator("td"),
    //     hasText:'seller'
        
        
    // })
//  await matchedRow.locator("//i[@class='icon-edit']/parent::a").click();

    await page.waitForTimeout(5000);

   
})