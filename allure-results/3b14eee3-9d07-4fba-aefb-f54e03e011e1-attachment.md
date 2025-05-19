# Test info

- Name: Login Page
- Location: C:\Users\Admin\OneDrive\Desktop\Amazon\tests\Actitime.spec.js:5:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#username')

    at LoginPage.login (C:\Users\Admin\OneDrive\Desktop\Amazon\PageObjectModel\LoginPage.js:13:28)
    at C:\Users\Admin\OneDrive\Desktop\Amazon\tests\Actitime.spec.js:9:21
```

# Test source

```ts
   1 | class LoginPage {
   2 |
   3 |     constructor(page){
   4 |         // this.page = page;
   5 | this.usernameTbx = page.locator("#username");
   6 | this.passwordTbx = page.locator("[name='pwd']");
   7 | this.loginBtn = page.locator("//div[text()='Login ']");
   8 | }
   9 |
  10 |
  11 |
  12 | async login(){
> 13 |     await this.usernameTbx.fill("admin");
     |                            ^ Error: locator.fill: Target page, context or browser has been closed
  14 |     await this.passwordTbx.fill("manager");
  15 |     await this.loginBtn.click();
  16 | }
  17 | }
  18 |
  19 | export default LoginPage
```