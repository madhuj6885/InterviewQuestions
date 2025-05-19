import { test } from "@playwright/test";
test("Add to cart", async ({page}) =>{

    await page.goto("https://www.amazon.in/");
    await page.fill("//input[@placeholder='Search Amazon.in']", "iphone 16 pro max");
    await page.click("#nav-search-submit-button");


    await page.waitForSelector("//div[@data-cy='reviews-block']//a/span");
    const allRatings = await page.locator("//div[@data-cy='reviews-block']//a/span").all();
   console.log(await allRatings.length);


   for(let r of allRatings) {
       const arrayRatings = [];
       console.log(max);

    let txt = await r.textContent();

    let n = Number(txt);
    await arrayRatings.push(n);
    
    //div[@data-cy='reviews-block']//a/span/parent::a
    // console.log(typeof n);
    // console.log(txt);
   }

//    console.log(arrayRatings);

let max 
})
