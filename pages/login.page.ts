import { Locator, Page } from '@playwright/test';

export class Login {
    login_btn: Locator;
    email_login: Locator;
    password_login: Locator;
    login_to_your_account_text: Locator;
    logged_username_text: Locator;
    error_login_message: Locator;

    constructor(page: Page) {
        this.login_to_your_account_text = page.locator("//h2[contains(text(),'Login to your account')]");
        this.email_login = page.locator(".login-form input:nth-child(2)");
        this.password_login = page.locator(".login-form input:nth-child(3)");
        this.login_btn = page.locator(".login-form .btn.btn-default");
        this.logged_username_text = page.locator("i.fa.fa-user");
        this.error_login_message = page.locator("//p[contains(text(),'Your email or password is incorrect!')]");
    }

    async loginAccount() {
        await this.logged_username_text.isVisible();
        await this.email_login.fill("testingautomation@playwright.com");
        await this.password_login.fill("password");
        await this.login_btn.click();
        await this.logged_username_text.isVisible();
    }

    async errorLoginAccount() {
        await this.logged_username_text.isVisible();
        await this.email_login.fill("test@test.com");
        await this.password_login.fill("test");
        await this.login_btn.click();
        await this.error_login_message.isVisible();
    }
}