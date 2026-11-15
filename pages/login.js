class loginpage{

constructor (page){

this.page = page;
this.username  = page.getByLabel('Username');
this.password = page.getByLabel('Password');
this.loginButton = page.locator('#login-button');

}

async pageLunch_Function()
{
   await this.page.goto('https://www.saucedemo.com/');
   await this.page.waitForTimeout(2000);


}

async loginFormFill_Function(username, password)
{
   await this.username.fill(username);
   await  this.password.fill(password);
    await this.loginButton.click();

    await this.page.waitForTimeout(2000);

}
}

module.exports = {loginpage};