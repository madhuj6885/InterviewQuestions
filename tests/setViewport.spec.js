import { test, browser} from '@playwright/test';

test("Set Viewport", async({browser}) =>{
const c = await browser.newContext();
const p = await c.newPage();
await p.setViewportSize({
    width:1280,
    height:1080
});

await p.goto("https://www.amazon.in/");
await p.waitForTimeout(5000);
})