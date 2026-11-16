const {test, expect} = require ('@playwright/test');
const {loginpage} = require ('../pages/login');
const {selectAndAddToCart} = require('../pages/AddToCart');

test ('Tc01 - page launch and login page', async({page}) =>
{

const loginFunctioCall = new loginpage(page);

await loginFunctioCall.pageLunch_Function();
await loginFunctioCall.loginFormFill_Function('standard_user', 'secret_sauce');

/*Add to Cart Class Call*/

const addtoCart = new selectAndAddToCart(page);
await addtoCart.selectandAddtoCart_Function('Sauce Labs Onesie');

}) 

/* npx playwright test tests/main.spec.js --project=chromium --headed  */ 





