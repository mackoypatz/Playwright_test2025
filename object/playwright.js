export class playwrightPage {
    constructor(page) {
        this.page = page;

        // login
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');

        // add to cart
        this.addcart1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'); 
        this.addcart2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addcart3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

        // logout (prefer locator instead of getByRole for stability)
        this.openmenu = page.getByRole('button', { name: 'Open Menu' });
        this.sidemenulogout = page.locator('[data-test="logout-sidebar-link"]');
    }

    async gotothiswebsite() {
        await this.page.goto('https://www.saucedemo.com/');
        
    }

    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async addcart() {
        await this.addcart1.click();
        await this.addcart2.click();
        await this.addcart3.click();
    }

    async logout() {
        await this.openmenu.click();
        await this.sidemenulogout.click();
    }
}
