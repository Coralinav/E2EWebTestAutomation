import { Locator, Page } from '@playwright/test';

export class GoTo {
    page: Page;
    logout_btn: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    // Go to the home page.
    async goto() {
        await this.page.goto('/');
    }

}