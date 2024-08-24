describe('Test Saucedemo', () => {

    // sesi 9
    it('Test 1 - Login Successfully and add product to cart', async () => {
        await browser.url('https://www.saucedemo.com/');

        const usernameTextBox = await browser.$('#user-name');
        const passwordTextBox = await browser.$('#password');
        const loginButton = await browser.$('//input[@type="submit"]');

        const cartButton1 = await browser.$('#add-to-cart-sauce-labs-backpack');
        const cartButton2 = await browser.$('#add-to-cart-sauce-labs-bike-light');
        const goToCartPage = await browser.$('#shopping_cart_container');

        const checkItem1 = await $('#item_4_title_link');
        const checkItem2 = await $('#item_0_title_link');

        await usernameTextBox.addValue('standard_user');
        await passwordTextBox.addValue('secret_sauce');
        await loginButton.click();

        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(browser).toHaveTitle("Swag Labs");

        await cartButton1.click();
        await cartButton2.click();

        await goToCartPage.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");

        await expect(checkItem1).toBeDisplayed();
        await expect(checkItem2).toBeDisplayed();

        await browser.pause(3000);
    });
});