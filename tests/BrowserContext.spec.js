import { chromium, test} from '@playwright/test';


test.describe.configure({mode:"parallel"});

test('Dactor Login', async ({browser}) =>{
    // const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://49.249.28.218:8081/AppServer/Hospital_Doctor_Patient_Management_System/hms/doctor/");
    await page.fill("[name='username']", "username");
    await  page.fill("[name='password']", "password");
    await page.waitForTimeout(2000);
})


test('Patient Login', async ({browser}) =>{
    // const browser = await chromium.launch();
    const context = await browser.newContext();
    const patientPage = await context.newPage();
    await patientPage.goto("http://49.249.28.218:8081/AppServer/Hospital_Doctor_Patient_Management_System/hms/user-login.php");
    await page.fill("[name='username']", "username");
    await  page.fill("[name='password']", "password");
    
    await patientPage.waitForTimeout(2000);




})