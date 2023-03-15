import { Locator, Page } from '@playwright/test';

export class Logout {
    logout_btn: Locator;

    constructor(page: Page) {
        this.logout_btn = page.locator('a[href="/logout"]');
    }

    async selectLogout() {
        await this.logout_btn.click();
    }
}