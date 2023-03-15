import { Locator, Page } from '@playwright/test';

export class Delete {
    delete_btn: Locator;
    account_deleted_text: Locator;

    constructor(page: Page) {
        this.delete_btn = page.locator('a[href="/delete_account"]');
        this.account_deleted_text = page.locator("//b[contains(text(),'Account Deleted!')]");
    }

    async deleteAccount() {
        await this.delete_btn.click();
        await this.account_deleted_text.isVisible();
    }
}