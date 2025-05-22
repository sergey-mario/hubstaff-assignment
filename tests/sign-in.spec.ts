import { expect, test } from '../fixture/app-fixture';
import { testUser } from '../utils/user-data-util';

test.describe('Sign in', async () => {
    test('User can sign in', async ({ app }) => {
        await app.homePage.goto();
        await app.homePage.clickSignInButton();
        await app.signInPage.signIn(testUser.email, testUser.password);
        await expect(app.dashboardPage.sideBarMenu).toBeVisible();
        await expect(app.dashboardPage.userAvatar).toBeVisible();
    });
});
