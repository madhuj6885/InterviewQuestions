import {test,  expect } from "@playwright/test";

let context;
let page;
test.beforeAll("Opening Amazon browser url",async ({browser}) =>{

     context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    await expect(page).toHaveURL("https://www.amazon.in/");
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

})
test.beforeEach("Login", () => {
    console.log("Logged in successfully");
})

test("Search and And Item to Cart",async () =>{
await page.locator("//input[@id='twotabsearchtextbox']").type("I phone 16 pro", {delay:100});
// await page.click("//input[@id='nav-search-submit-button']");
// await page.click("//div[@class='puisg-col-inner' and contains(.,'iPhone 16 Pro Max 256')]/descendant::button[@name='submit.addToCart']");

// await page.click("//div[@class='puisg-col-inner' and contains(.,'iPhone 16 Pro 1 TB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium')]/descendant::button")
await page.waitForTimeout(5000);
// await page.click("//div[@id='nav-cart-count-container']");
// await page.click("//input[@data-action='delete']");
// await page.waitForTimeout(5000);

})