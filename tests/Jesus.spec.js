import { test } from '@playwright/test';

test("Learn Js", async ({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("i phone 16 pro");

    await page.click("//span[text()='iPhone 16 Pro 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Black Titanium']/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::button[text()='Add to cart']");

  await page.waitForTimeout(5000);

  const pagePromise = context.waitForEvent("page");
  await page.locator("#open").click();
  const newPage = await pagePromise;

  await newPage.locator("#demo").click();
  console.log(await newPage.title());

  await newPage.locator("#selectoption").selectOption({label:'m'});
  await newPage.locator(".demo").fill("Search box");
  await newPage.locator("all options").click();

  console.log(`Introduce the world is the perfect of the demo, It is involved`);
  //Here is the code to switching the page from child window to the parent window
  // for this we need to use the browser context for the switching
  // pointer to the specifications of the world no one in the world!
  


    
})