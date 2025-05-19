# Test info

- Name: Handling WebTable
- Location: C:\Users\Admin\OneDrive\Desktop\Amazon\tests\WebTable.spec.js:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Admin Login' })

    at C:\Users\Admin\OneDrive\Desktop\Amazon\tests\WebTable.spec.js:6:56
```

# Test source

```ts
   1 |
   2 | import { expect, test } from '@playwright/test';
   3 | import { nextTick } from 'process';
   4 | test("Handling WebTable", async ({page}) =>{
   5 |     await page.goto("http://49.249.28.218:8081/AppServer/Online_Shopping_Application/");
>  6 |     await page.getByRole('link', {name:"Admin Login"}).click();
     |                                                        ^ Error: locator.click: Target page, context or browser has been closed
   7 |     await page.getByPlaceholder("Username").fill("admin");
   8 |     await page.getByPlaceholder("Password").fill("Test@123");
   9 |     await page.getByRole('button', {name:"Login"}).click();
  10 |     await page.waitForTimeout(3000);
  11 |     await page.getByRole('link', {name:'Manage Products '}).click();
  12 |     // await page.getByLabel("Search: ").fill("seller");
  13 |     // await page.keyboard.press("Enter");
  14 |     await page.waitForTimeout(3000);
  15 |     const rows = await page.locator("#DataTables_Table_0 tbody tr");
  16 |         // const tdS = await page.locator("#DataTables_Table_0 tbody tr td").all();
  17 |
  18 |
  19 |
  20 |
  21 |         let NextLink = await page.locator("//span[text()='Next']/parent::a");
  22 |         // let isClickAble = true;
  23 |         ;
  24 |
  25 |         // console.log(await pages.count());
  26 |               //let status = await expect(NextLink).toBeEnabled();
  27 |
  28 |         for(let p=0; p<=20; p++) {
  29 |             if(p>0) {
  30 |                 await NextLink.click();
  31 |
  32 |             }
  33 |
  34 |             for(let i=0; i<await rows.count(); i++){
  35 |                 const row = rows.nth(i);
  36 |                 const tds = row.locator("td");
  37 |                 for(let j=0; j<await tds.count(); j++) {
  38 |                     console.log(await tds.nth(j).textContent());
  39 |                 }
  40 |
  41 |             }
  42 |         }
  43 |
  44 |     //     for(let p=0; p<=rows.length; p++) {
  45 |             
  46 |     // for(let r of rows) {
  47 |     //     let txt = await r.locator("td").innerText();
  48 |     //     console.log(txt);
  49 |     // }
  50 |
  51 |     //     }
  52 |
  53 |
  54 |
  55 |
  56 |     // console.log(Array.isArray(tdS));
  57 |     
  58 |
  59 |
  60 |     // for(let td of tdS) {
  61 |     //     let txt = await td
  62 |     // }
  63 |
  64 |     // console.log(Array.isArray(tdS));
  65 | // console.log(await tdS.count());
  66 |
  67 |     // let matchedRow = rows.filter({
  68 |         
  69 |     //     has: page.locator("td"),
  70 |     //     hasText:'seller'
  71 |         
  72 |         
  73 |     // })
  74 | //  await matchedRow.locator("//i[@class='icon-edit']/parent::a").click();
  75 |
  76 |     // await page.waitForTimeout(5000);
  77 |
  78 |    
  79 | })
```