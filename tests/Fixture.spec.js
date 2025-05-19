import { expect, test} from "@playwright/test";
test("Handling multiple windows @tab", async ({browser}) =>{
    // creating context using browser instance
    const context = await browser.newContext();
    //creating page using browser context
    const page = await context.newPage();
    //triggering the url
    await page.goto("https://onlinesbi.sbi/");
    console.log(await page.title())
   // handling new page with the help of page event from browser context
   const pagePromise1 = context.waitForEvent("page");
   // clicking the link in parent page(page)
   await page.getByRole("link", {name:'Banking Forms'}).click();
   //storing the new page triggered in newPage
   const newPage = await pagePromise1;
   console.log(await newPage.title())
   // handling new page with the help of page event from browser context
   const pagePromise2 = context.waitForEvent("page");
   // clicking the link in parent newPage
  await newPage.click("//span[text()='clk here']/parent::a");
     //storing the new page triggered in newPage2
  const newPage2 = await pagePromise2;
  console.log(await newPage2.title());
  //iterating all the pages created using context() by using context.pages()
  for(const p of context.pages()) {
  let title = await p.title();
    if(title === "State Bank of India"){
      console.log(await p.title()
      )
   // bringToFront() > used to make the page to  be front and active
  p.bringToFront();
   break;
    }
   }
await page.waitForTimeout(5000);
await expect(page.locator("#logo")).toBeVisible();
})