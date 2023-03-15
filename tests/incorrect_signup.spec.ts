import { test } from '@playwright/test';
import { Signup } from '../pages/signup.page';
import { GoTo } from '../pages/goto.page';


test('Try to signup with an existing email', async ({ page }) => {
    const signup = new Signup(page);
    const goto = new GoTo(page);

    await goto.goto();
    await signup.goToSignup();
    await signup.existingEmailSignup();

});
