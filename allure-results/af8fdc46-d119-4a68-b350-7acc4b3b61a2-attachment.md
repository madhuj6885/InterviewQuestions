# Test info

- Name: Hadnling Radio buttons
- Location: C:\Users\Admin\OneDrive\Desktop\Amazon\tests\Interview.spec.js:4:5

# Error details

```
Error: locator.uncheck: Clicking the checkbox did not change its state
Call log:
  - waiting for locator('//input[@value=\'IMG\']')
    - locator resolved to <input value="IMG" type="radio" tabindex="16" id="capOption" checked="checked" name="optionOfCaptcha" aria-label="Image Captcha" onclick="javascript:getUserSelImgCaptcha();"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish
    - navigations have finished

    at C:\Users\Admin\OneDrive\Desktop\Amazon\tests\Interview.spec.js:9:49
```

# Page snapshot

```yaml
- banner:
  - link "SBI Logo":
    - /url: http://bank.sbi
  - list:
    - listitem:
      - link "SBI Home Loan":
        - /url: https://homeloans.sbi/
        - img "SBI Home Loan"
    - listitem:
      - link "About OnlineSBI":
        - /url: /sbijava/retail/html/aboutus.html
    - listitem:
      - link "Forms":
        - /url: /npersonal/reg_forms.html
    - listitem:
      - link "Net Banking Branches":
        - /url: javascript:void(0);
    - listitem:
      - button "Language"
- navigation:
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Products & Services":
        - /url: "#"
    - listitem:
      - link "How Do I (Help)":
        - /url: /npersonal/rinb_videos.html
    - listitem:
      - link "Manage Debit Card E-Mandate":
        - /url: https://www.sihub.in/managesi/sbi
    - listitem:
      - link "Contact Us":
        - /url: https://retail.onlinesbi.sbi/npersonal/contact_us.html
- heading "Login to OnlineSBI" [level=3]
- list:
  - listitem: Dear Customer, Mandatory login and profile password change introduced for added security.
  - listitem: To clear cache, please refresh this page by pressing Ctrl + F5
- text: Welcome to Personal Internet Banking
- paragraph: "(CARE: Username and password are case sensitive.)"
- text: Username*
- textbox "userName"
- text: Password*
- textbox "confirm password"
- text: Enter the text as shown in the image *
- textbox "Enter The Captcha"
- text: Select one of the Captcha options *
- radio "Image Captcha" [checked]
- text: Image Captcha
- radio "Audio Captcha"
- text: Audio Captcha
- img "Captcha"
- link "Refresh Captcha":
  - /url: "javascript:"
  - text: 
- button "Login"
- button "Reset"
- list:
  - listitem:
    - link "New User? Register here/Activate":
      - /url: "#"
      - text: New User ? Register here/Activate
  - listitem:
    - link "Forgot Username/Login Password":
      - /url: "#"
      - text: Forgot Username / Login Password
- paragraph:
  - checkbox
  - text: Enable Virtual Keyboard
- text: For better security use the Online Virtual Keyboard to login.
- link "More":
  - /url: /npersonal/virtualkeyboard.html
  - strong: More
  - text: ...
- table:
  - rowgroup:
    - row "login image":
      - cell "login image":
        - img "login image"
    - row "Dear Customer, OTP based login & Mandatory login password change after 180 days introduced for added security. Please do not share OTP/password/user information with anyone. Bank never asks for such information. For better control & security of your account, you can Lock or Unlock your INB access through link \"Lock & Unlock User\" available at bottom of this Page. Mandatory Profile password change after 365 days introduced for added security.":
      - cell "Dear Customer, OTP based login & Mandatory login password change after 180 days introduced for added security. Please do not share OTP/password/user information with anyone. Bank never asks for such information. For better control & security of your account, you can Lock or Unlock your INB access through link \"Lock & Unlock User\" available at bottom of this Page. Mandatory Profile password change after 365 days introduced for added security.":
        - text: Dear Customer,
        - list:
          - listitem: OTP based login & Mandatory login password change after 180 days introduced for added security.
          - listitem: Please do not share OTP/password/user information with anyone. Bank never asks for such information.
          - listitem: For better control & security of your account, you can Lock or Unlock your INB access through link "Lock & Unlock User" available at bottom of this Page.
          - listitem: Mandatory Profile password change after 365 days introduced for added security.
- text: 
- paragraph: NEVER respond to any popup,email, SMS or phone call, no matter how appealing or official looking, seeking your personal information such as username, password(s), mobile number, ATM Card details, etc. Such communications are sent or created by fraudsters to trick you into parting with your credentials.
- text: 
- list:
  - listitem:
    - link "Complaints":
      - /url: https://crcf.bank.sbi
  - listitem:
    - link "Trouble logging in":
      - /url: "#"
  - listitem:
    - link "Password Management":
      - /url: /npersonal/passwordmanagement.html
  - listitem:
    - link "Security Tips":
      - /url: /npersonal/securitytips.html
  - listitem:
    - link "FAQ":
      - /url: /npersonal/faq.html
- list:
  - listitem:
    - link "About Phishing":
      - /url: /npersonal/aboutphishing.html
  - listitem:
    - link "Report Phishing":
      - /url: javascript:openemail()
  - listitem:
    - link "Lock & Unlock User":
      - /url: "#"
  - listitem:
    - link "Block ATM Card":
      - /url: "#"
- text: 
- paragraph: This site is certified by Verisign as a secure and trusted site. All information sent or received in this site is encrypted using 256-bit encryption
- list:
  - listitem: Mandatory fields are marked with an asterisk (*)
  - listitem: Do not provide your username and password anywhere other than in this page
  - listitem:
    - text: Your username and password are highly confidential. Never part with them.
    - strong: SBI
    - text: will never ask for this information.
- img "VeriSign"
- paragraph: "© State Bank of India (APM Id: Serv_Tran_552)"
- paragraph: Site best viewed at 1024 x 768 resolution in Microsoft Edge 79 +, Mozilla 96 +, Google Chrome 97 +
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 |
   4 | test("Hadnling Radio buttons", async ({page}) =>{
   5 |     await page.goto("https://retail.onlinesbi.sbi/retail/login.htm");
   6 |     await page.getByRole("link", {name:"CONTINUE TO LOGIN"}).click();
   7 |     await expect(page.locator("//input[@value='IMG']")).toBeChecked();
   8 |     await page.waitForTimeout(2000);
>  9 |     await page.locator("//input[@value='IMG']").uncheck();
     |                                                 ^ Error: locator.uncheck: Clicking the checkbox did not change its state
  10 |         await page.waitForTimeout(2000);
  11 |
  12 |     await page.locator("//input[@value='AUD']").check();
  13 |         await page.waitForTimeout(2000);
  14 |
  15 |
  16 | })
  17 |
  18 |
  19 | // test("Handling Dropdown", async ({page}) =>{
  20 |
  21 | //     await page.goto("https://www.amazon.in/");
  22 | //     const allOptions  = await page.locator("#searchDropdownBox option").all();
  23 |
  24 | //     for(const o of allOptions) {
  25 | //         let txt = await o.innerText();
  26 |
  27 | //         if(txt === "Music"){
  28 | //                     console.log(txt);
  29 |
  30 | // await page.locator('#searchDropdownBox').selectOption(txt);
  31 | //         }
  32 |
  33 | //     }
  34 |
  35 | //     await page.waitForTimeout(5000);
  36 | //     // console.log(allOptions.length);
  37 |
  38 | // })
  39 |
  40 | // test("Handling Input text boxes and printing all options", async ({page}) =>{
  41 |
  42 | //     await page.goto("https://www.amazon.in/");
  43 |
  44 | //     await page.locator("#twotabsearchtextbox").fill("iphone 16");
  45 | //     await page.waitForSelector("//div[text()='iphone 16']");
  46 | //     const suggestions = await page.locator("//div[text()='iphone 16']").all();
  47 | //     await page.waitForTimeout(3000);
  48 |
  49 | //     for(const s of suggestions) {
  50 | //         let txt = await s.textContent();
  51 | //         console.log(txt);
  52 |         
  53 | //     }
  54 | //     // console.log(suggestions.length);
  55 |
  56 |
  57 | // await page.waitForTimeout(5000);
  58 | //     // await page.
  59 | // })
```