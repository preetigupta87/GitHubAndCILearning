class selectAndAddToCart {

constructor (page)
{
 this.page = page;
 this.object = page.locator(".inventory_item_description");
 this.button_AddtoCart = page.locator(".btn btn_primary btn_small btn_inventory ");
 this.Cart_icon_Click = page.locator(".shopping_cart_link");
 

}

async selectProduct_Function(ProductName)
{
/*const product = this.object.filter({hasText : ProductName});
await product.getByRole('button', { name: 'Add to cart' }).click();*/

const product = this.object.filter({ hasText: ProductName });
await product.getByRole('button', { name: 'Add to cart' }).click();
}

async ClickonCart_function()
{
   await this.Cart_icon_Click.click();
}
 
async selectandAddtoCart_Function(ProductName)
{
    await this.selectProduct_Function(ProductName);
    await this.ClickonCart_function();

}

}

module.exports = {selectAndAddToCart};