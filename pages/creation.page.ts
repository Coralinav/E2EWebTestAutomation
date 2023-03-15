import { Locator, Page } from '@playwright/test';

export class AccountCreation {
    page: Page;
    signup_and_login: Locator;
    new_user_text: Locator;
    name: Locator;
    email_create_account: Locator;
    signup_btn: Locator;
    enter_account_information_text: Locator;
    title: Locator;
    password: Locator;
    day: Locator;
    month: Locator;
    year: Locator;
    date_of_birth: Locator;
    checkbox_newsletter: Locator;
    checkbox_special_offers: Locator;
    first_name: Locator;
    last_name: Locator;
    company: Locator;
    address: Locator;
    address_two: Locator;
    country: Locator;
    state: Locator;
    city: Locator;
    zipcode: Locator;
    mobile_number: Locator;
    create_account_btn: Locator;
    account_created_text: Locator;
    continue_btn: Locator;
    logged_username_text: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enter_account_information_text = page.locator("//b[contains(text(),'Enter Account Information')]");
        this.title = page.locator("#id_gender1");
        this.password = page.locator("#password");
        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");
        this.checkbox_newsletter = page.locator("#newsletter");
        this.checkbox_special_offers = page.locator("#optin");
        this.first_name = page.locator("#first_name");
        this.last_name = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address = page.locator("#address1");
        this.address_two = page.locator("#address2");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobile_number = page.locator("#mobile_number");
        this.create_account_btn = page.locator(".login-form button.btn.btn-default");
        this.account_created_text = page.locator("//b[contains(text(),'Account Created!')]");
        this.continue_btn = page.locator(".pull-right a.btn.btn-primary");
        this.logged_username_text = page.locator("i.fa.fa-user");
    }

    async goToEnterAccountInformation() {
        await this.page.waitForLoadState();
        await this.enter_account_information_text.isVisible();
    }

    async fillAccountInformation() {
        await this.title.click();
        await this.password.fill("password");
    }

    async selectDateOfBirth() {
        await this.day.selectOption('19');
        await this.month.selectOption('1');
        await this.year.selectOption('1997');
    }

    async checkSignupAndOffers() {
        await this.checkbox_newsletter.click();
        await this.checkbox_special_offers.click();
    }

    async fillAddressInformation() {
        await this.first_name.fill("testing");
        await this.last_name.fill("automation");
        await this.company.fill("automation company");
        await this.address.fill("address 1");
        await this.address_two.fill("address 2");
        await this.country.selectOption("India");
        await this.state.fill("st");
        await this.city.fill("ct");
        await this.zipcode.fill("12345");
        await this.mobile_number.fill("672638474");
    }

    async selectCreateAccountBtn() {
        await this.create_account_btn.click();
    }

    async validateCreateAccount() {
        await this.account_created_text.isVisible();
        await this.continue_btn.click();
        await this.logged_username_text.isVisible();
    }
}