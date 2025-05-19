// const { chromium, devices } = require('playwright');
import { test, devices} from "@playwright/test";



  test("Demo", async({browser}) =>{
  const iPhone = devices['iPhone 12'];
  // const browser = await chromium.launch();
  const context = await browser.newContext({
    ...iPhone
  });
  const page = await context.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'mobile-emulated.png' });
  await browser.close();

  })

