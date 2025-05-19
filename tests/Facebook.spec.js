import {test} from "@playwright/test";

test("Create New Account @fb", async({page}) =>{

    console.log("Facebok");
    
    // await page.goto("https://www.facebook.com/");
    // await page.getByText("Create new account").click();
    // await page.locator("input[name='firstname']").fill("madhu");
    // await page.locator("input[name='lastname']").fill("kumar");
    // const days = await page.locator("#day option").all();
    // const months = await page.locator("#month option").all();


    // for(let d of days) {
    //     let txt = await d.textContent();
    //     if(txt === '3' ){
    //         console.log(txt);
    //         await page.locator("#day").selectOption(txt);
    //         break;
    //     }
    // }
    //  for(let m of months) {
    //     let txt = await m.textContent();
    //     if(txt === 'Apr' ){
    //         console.log(txt);
    //         await page.locator("#month").selectOption(txt);
    //         break;
    //     }
    // }

    // await page.check("//label[text()='Male']");
    // await page.waitForTimeout(5000);
    
})