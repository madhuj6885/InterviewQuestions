# Test info

- Name: Print all Options
- Location: C:\Users\Admin\OneDrive\Desktop\Amazon\tests\PrintingAllOptions.spec.js:2:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

    at C:\Users\Admin\OneDrive\Desktop\Amazon\tests\PrintingAllOptions.spec.js:3:16
```

# Test source

```ts
   1 | import { test } from '@playwright/test';
   2 | test("Print all Options", async ({page}) =>{
>  3 |     await page.goto("https://testautomationpractice.blogspot.com/");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
   4 |
   5 |     await page.locator("#multipleFilesInput").setInputFiles("['tstData/MadhukumarA_4YrsAutomation.pdf','tstData/image.pdf']");
   6 |     // tstData\MadhukumarA_4YrsAutomation.pdf
   7 |     // const allOptions = await page.locator("#searchDropdownBox>option").all();
   8 |     // for(let option of allOptions) {
   9 |     //     let txt = await option.textContent();
  10 |
  11 |     //     if(txt.includes("Watches")){
  12 |     //         await page.locator("#searchDropdownBox").selectOption(txt);
  13 |     //     }
  14 |     //     console.log(txt);
  15 |     // }
  16 |
  17 |     await page.waitForTimeout(5000);
  18 |     // console.log(allOptions.length);
  19 |     
  20 | })
```