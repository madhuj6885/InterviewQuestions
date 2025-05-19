
import { expect, test } from '@playwright/test';
import { nextTick } from 'process';
test("Handling WebTable", async ({page}) =>{
    await page.goto("http://49.249.28.218:8081/AppServer/Online_Shopping_Application/");
    await page.getByRole('link', {name:"Admin Login"}).click();
    await page.getByPlaceholder("Username").fill("admin");
    await page.getByPlaceholder("Password").fill("Test@123");
    await page.getByRole('button', {name:"Login"}).click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', {name:'Manage Products '}).click();
    // await page.getByLabel("Search: ").fill("seller");
    // await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    const rows = await page.locator("#DataTables_Table_0 tbody tr");
        // const tdS = await page.locator("#DataTables_Table_0 tbody tr td").all();




        let NextLink = await page.locator("//span[text()='Next']/parent::a");
        // let isClickAble = true;
        ;

        // console.log(await pages.count());
              //let status = await expect(NextLink).toBeEnabled();

        for(let p=0; p<=20; p++) {
            if(p>0) {
                await NextLink.click();

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

    // await page.waitForTimeout(5000);

   
})