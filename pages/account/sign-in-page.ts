import { Locator, Page } from '@playwright/test';

export class SignInPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#user_email');
        this.passwordInput = page.locator('#user_password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickSignInButton(): Promise<void> {
        await this.signInButton.click();
    }

    async signIn(email: string, password: string): Promise<void> {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickSignInButton();
    }
}