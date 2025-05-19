# Test info

- Name: Handling WebTable
- Location: C:\Users\Admin\OneDrive\Desktop\Amazon\tests\WebTable.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Manage Products ' })

    at C:\Users\Admin\OneDrive\Desktop\Amazon\tests\WebTable.spec.js:10:61
```

# Test source

```ts
   1 |
   2 | import { test } from '@playwright/test';
   3 | test("Handling WebTable", async ({page}) =>{
   4 |     await page.goto("http://49.249.28.218:8081/AppServer/Online_Shopping_Application/");
   5 |     await page.getByRole('link', {name:"Admin Login"}).click();
   6 |     await page.getByPlaceholder("Username").fill("admin");
   7 |     await page.getByPlaceholder("Password").fill("Test@123");
   8 |     await page.getByRole('button', {name:"Login"});
   9 |     await page.waitForTimeout(3000);
> 10 |     await page.getByRole('link', {name:'Manage Products '}).click();
     |                                                             ^ Error: locator.click: Target page, context or browser has been closed
  11 |     await page.getByLabel("Search: ").fill("seller");
  12 |     const rows = await page.locator("#DataTables_Table_0 tbody tr").all();
  13 |     console.log(await rows.length);
  14 |     await page.waitForTimeout(5000);
  15 |
  16 |    
  17 | })
```