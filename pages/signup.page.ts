import { Locator, Page } from '@playwright/test';

export class Signup {
    page: Page;
    signup_and_login: Locator;
    new_user_text: Locator;
    name: Locator;
    email_create_account: Locator;
    signup_btn: Locator;
    error_message_address: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signup_and_login = page.locator('a[href="/login"]');
        this.new_user_text = page.locator("//h2[contains(text(),'New User Signup!')]");
        this.name = page.locator(".signup-form input:nth-child(2)")
        this.email_create_account = page.locator(".signup-form input:nth-child(3)");
        this.signup_btn = page.locator(".signup-form button.btn.btn-default");
        this.error_message_address = page.locator("//p[contains(text(),'Email Address already exist!')]");
    }

    async goToSignup() {
        await this.page.waitForLoadState();
        await this.signup_and_login.click();
        await this.new_user_text.isVisible();
    }

    async signupForm() {
        await this.name.fill("testing");
        await this.email_create_account.fill('testingautomation@playwright.com');
        await this.signup_btn.click();
    }

    async existingEmailSignup() {
        await this.name.fill("test");
        await this.email_create_account.fill('test@test.com');
        await this.signup_btn.click();
        await this.error_message_address.isVisible();
    }
}