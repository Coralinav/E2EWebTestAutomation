import { test } from '@playwright/test';
import { Signup } from '../pages/signup.page';
import { Login } from '../pages/login.page';
import { GoTo } from '../pages/goto.page';


test('Try to login with invalid email and password', async ({ page }) => {
    const signup = new Signup(page);
    const login = new Login(page);
    const goto = new GoTo(page);

    await goto.goto();
    await signup.goToSignup();
    await login.errorLoginAccount();

});
