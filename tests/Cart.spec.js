import { expect, test} from "@playwright/test";
test("Add Mutliple items to cart", async ({page}) =>{

    await page.goto("https://www.amazon.in/");
     await page.getByPlaceholder("Search Amazon.in").fill("boult ear buds");

  await page.keyboard.press("Enter");
  await page.waitForSelector("//a[@class='a-link-normal s-line-clamp-2 s-link-style a-text-normal']/h2/span");
  const all = await page.locator("//a[@class='a-link-normal s-line-clamp-2 s-link-style a-text-normal']/h2/span").all();

// storing all the titles of the mobiles
  const allTitles = [];

  // looping the all locators to get the titles of the mobiles
    for(let name of all) {
   let txt = await name.textContent();
   // pushing titles of the mobiles to allTitles array
   allTitles.push(txt);

}

// filtering the title which as duplicated and storing unique title in unique array
       const unique = allTitles.filter((title, index, arr)=>{
        if(arr.indexOf(title) === index) {
          return title;
         }
              

       })

       //iterating all unique titles and clicking on add cart button
    for(let name of unique){
       let btn = await page.locator("//span[text()='"+name+"']/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::button[text()='Add to cart']");
       await btn.click();
       let cartBtn = await page.locator("#nav-cart-count-container");
       //clicking on the cart icon 
       await cartBtn.click();
       let actualText = page.locator("//span[@class='a-truncate-cut']").textContent();
      //  await expect(actualText).toContain(name);
       await page.click("//input[@value='Delete']");
       await page.goBack();

}

})