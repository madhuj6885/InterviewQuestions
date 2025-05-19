class LoginPage {

    constructor(page){
        this.page = page;
this.usernameTbx = page.locator("#username");
this.passwordTbx = page.locator("[name='pwd']");
this.loginBtn = page.locator("//div[text()='Login ']");
}

async trigger() {
    await this.page.goto("http://localhost/login.do");
}

async login(){
    await this.usernameTbx.fill("admin");
    await this.passwordTbx.fill("manager");
    await this.loginBtn.click();
}
}

export default LoginPage