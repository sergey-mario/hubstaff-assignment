import { faker } from '@faker-js/faker';
import { expect, test } from '../fixture/app-fixture';

test.describe('Free 14-day trial', async () => {
    test('User can not start free trial', async ({ app }) => {
        const email = faker.internet.email();
        await app.homePage.goto();
        await app.homePage.clickFreeTrialButton();
        await app.signupPage.createAccount(
            faker.person.firstName(),
            faker.person.lastName(),
            email,
            faker.internet.password()
        );
        expect.soft(await app.confirmationPage.getVerifyEmailTitle()).toEqual('Verify your email');
        expect.soft(await app.confirmationPage.getVerifyEmailSubtitle()).toEqual(
            `You're in. An email has been sent to ${email}. Hit confirm and you'll be ready to start working.`);
    });
});
