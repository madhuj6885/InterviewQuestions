import { test} from '@playwright/test';

test("Download", async ({page}) =>{
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.fill("#writeArea", "Hello Madhu");
    const d = page.waitForEvent("download");
    await page.click("#downloadButton");
    const dpage = await d;
    await page.waitForTimeout(2000);
    await dpage.saveAs('tstData/Madhu.txt');

    const downloadPromise = page.waitForEvent("download");
    await page.click("#downloadbtn");
    const dp = await downloadPromise;
    await dp.saveAs("testData/demo");



})