import { test } from '@playwright/test';
import { AccountCreation } from '../pages/creation.page';
import { Signup } from '../pages/signup.page';
import { Login } from '../pages/login.page';
import { GoTo } from '../pages/goto.page';
import { Logout } from '../pages/logout.page';
import { Delete } from '../pages/delete.page';


test('Create, Validate and Delete Account', async ({ page }) => {
    const creation = new AccountCreation(page);
    const signup = new Signup(page);
    const login = new Login(page);
    const goto = new GoTo(page);
    const logout = new Logout(page);
    const deleting = new Delete(page);

    await goto.goto();
    await signup.goToSignup();
    await signup.signupForm();
    await creation.goToEnterAccountInformation();
    await creation.fillAccountInformation();
    await creation.selectDateOfBirth();
    await creation.checkSignupAndOffers();
    await creation.fillAddressInformation();
    await creation.selectCreateAccountBtn();
    await creation.validateCreateAccount();
    await logout.selectLogout();
    await login.loginAccount();
    await deleting.deleteAccount();
});



