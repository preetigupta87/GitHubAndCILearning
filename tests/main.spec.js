const {test, expect} = require ('@playwright/test');

const {loginpage} = require ('../pages/login');

test ('Tc01 - page launch and login page', async({page}) =>
{

const loginFunctioCall = new loginpage(page)
{
   await loginFunctioCall.pageLunch_Function();
    await loginFunctioCall.loginFormFill_Function('standard_user', 'secret_sauce');

}

}) 

/* npx playwright test tests/main.spec.js --project=chromium --headed  */ 





