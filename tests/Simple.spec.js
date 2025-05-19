import { expect, test} from "@playwright/test";
test("Add to Cart", async({page}) =>{

    //triggering the url
    await page.goto("https://www.amazon.in/");
    // logging the title of the page
    // const title = await page.title();
    //confirming the actual title should be match as expected
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

    // entering the text in the search box
     await expect(page.getByPlaceholder("Search Amazon.in")).toBeVisible();
     // assertion to check the input text box should be enabled
     await expect(page.getByPlaceholder("Search Amazon.in")).toBeEnabled();
     //assertion to check the input box should be empty
     await expect(page.getByPlaceholder("Search Amazon.in")).toBeEmpty();
     // entering the text to search input text box
    await page.getByPlaceholder("Search Amazon.in").fill("mobiles");
    // assertion to verify the search text box should have value "mobiles"
     await expect(page.getByPlaceholder("Search Amazon.in")).toHaveValue("mobiles");
     // assertion to check the search icon is visible
     await expect(page.locator("#nav-search-submit-button")).toBeVisible();
     // clicking the search icon button
     await page.locator("#nav-search-submit-button").click();
    // assertion to check the realme mobile is available or not
       await expect(page.locator("//span[text()='realme NARZO N61 (Voyage Blue,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency | Charger in The Box']/ancestor::div[@class='puisg-col-inner']/descendant::button[text()='Add to cart']")).toBeVisible();
     // clicking on the add to cart button in realme mobile
       await page.click("//span[text()='realme NARZO N61 (Voyage Blue,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency | Charger in The Box']/ancestor::div[@class='puisg-col-inner']/descendant::button[text()='Add to cart']")
     // assertion to check the cart icon visible or not
     await expect(page.locator("#nav-cart-count-container")).toBeVisible();
     //click on the cart icon
     await page.click("#nav-cart-count-container");
     //wait for the locator
     await page.waitForSelector("//span[text()='realme NARZO N61 (Voyage Blue,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency |…']");
     //verifying the realme mobile avaialable or not in cart section by taking text of the product
     await expect(page.locator("//span[text()='realme NARZO N61 (Voyage Blue,6GB RAM+128GB Storage) 90Hz Eye Comfort Display | IP54 Dust & Water Resistance | 48-Month Fluency |…']")).toBeVisible();


    //  await page.getByRole('button',{name:'Add to cart'});


})