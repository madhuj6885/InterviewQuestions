import { test, expect } from '@playwright/test';





test("Popup", async ({page}) =>{
    // const context = await browser.newContext();
// const page = await context.newPage();

     await page.goto("https://testautomationpractice.blogspot.com/");

     const rows = await page.locator("#productTable tbody tr rows");


     const pages = await page.locator("")

    //  const tdS =  rows.filter({
    //     has:page.locator("td")
    //  })

     for(let r of rows) {
          let txt = await r.textContent();
          console.log(txt);
     }
    //  console.log(await rows.count());

    //  console.log(await page.title())

    //  await page.getByRole('button', {name:"Point Me"}).hover();

    //  await page.getByRole("button", {name:"Copy Text"}).dblclick();


    //  const src = await page.locator("//p[text()='Drag me to my target']/parent::div");
    //  const tar = await page.locator("//p[text()='Drop here']/parent::div");

    //  await page.waitForTimeout(2000);
    //  await src.dragTo(tar);
     await page.waitForTimeout(5000);


//      const popupPromise = page.waitForEvent('popup');
//    await page.locator("//button[text()='Popup Windows']").click();
// const popup = await popupPromise;
//   console.log(await popup.title())




})
// test("", async ({browser}) =>{

//      for(let p of context.pages()){
//         let title = await p.title();
//         if(title ==='Automation Testing Practice'){
//             p.bringToFront();
//             break;
//         }
//      }

//      await page.title();
// await page.waitForTimeout(5000);

// })

// test("Alert Popup", async ({browser}) =>{
//     const context = await browser.newContext();
//     const page = await context.newPage();


//     await page.goto("https://testautomationpractice.blogspot.com/");

//     page.on('dialog', async dialog =>{
//         await expect(dialog.type()).toContain("prompt");
//         await expect(dialog.message()).toContain("Please enter your name:");
//         await expect(dialog.defaultValue()).toContain("Harry Potter");
//         await dialog.accept("MADHU");

//     });
//     await page.locator("//button[text()='Prompt Alert']");


// })


// test("Handling multiple check boxes", async({page}) =>{

//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const locators = [
//         '#sunday',
//         '#tuesday'
//     ];

//     for(let l of locators) {
//         await page.locator(l).check();
//     }


//     await page.locator("//p[text()='Date Picker 1 (mm/dd/yyyy): ']/child::input[@id='datepicker']").fill("2025-03-12");
//     await page.locator("//div[@class='date-picker-box']/child::input[@id='start-date']").click();
//     await page.locator("#singleFileInput").setInputFiles("tstData/MadhukumarA_4YrsAutomation.pdf");
//     await page.locator("#multipleFilesInput").setInputFiles(['tstData/image.pdf',
//         'tstData/MadhukumarA_4YrsAutomation.pdf'
//     ]);

//     const but = await page.locator("//h2[text()='Dynamic Button']/parent::div/child::div[@class='widget-content']/child::button");
//     if(but.textContent() === 'START') {
//                 await but.click();

//         setTimeout(() =>{
//      but.click();

//         }, 5000);
//     }
//     await page.waitForTimeout(5000);
// })








// test("Hadnling Radio buttons", async ({page}) =>{
//     await page.goto("https://retail.onlinesbi.sbi/retail/login.htm");
//     await page.getByRole("link", {name:"CONTINUE TO LOGIN"}).click();
//     await expect(page.locator("//input[@value='IMG']")).toBeChecked();
//     // await page.waitForTimeout(2000);
//     // await page.locator("//input[@value='IMG']").uncheck();
//         // await page.waitForTimeout(2000);

//     await page.locator("//input[@value='AUD']").check();
//         await page.waitForTimeout(2000);


// })


// test("Handling Dropdown", async ({page}) =>{

//     await page.goto("https://www.amazon.in/");
//     const allOptions  = await page.locator("#searchDropdownBox option").all();

//     for(const o of allOptions) {
//         let txt = await o.innerText();

//         if(txt === "Music"){
//                     console.log(txt);

// await page.locator('#searchDropdownBox').selectOption(txt);
//         }

//     }

//     await page.waitForTimeout(5000);
//     // console.log(allOptions.length);

// })

// test("Handling Input text boxes and printing all options", async ({page}) =>{

//     await page.goto("https://www.amazon.in/");

//     await page.locator("#twotabsearchtextbox").fill("iphone 16");
//     await page.waitForSelector("//div[text()='iphone 16']");
//     const suggestions = await page.locator("//div[text()='iphone 16']").all();
//     await page.waitForTimeout(3000);

//     for(const s of suggestions) {
//         let txt = await s.textContent();
//         console.log(txt);
        
//     }
//     // console.log(suggestions.length);


// await page.waitForTimeout(5000);
//     // await page.
// })