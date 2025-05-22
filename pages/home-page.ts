import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly freeTrialButton: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.freeTrialButton = page.locator('[data-name="Free 14-day trial"]').first();
        this.signInButton = page.getByTestId('sign_in_button');
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }

    async clickFreeTrialButton(): Promise<void> {
        await this.freeTrialButton.click();
    }

    async clickSignInButton(): Promise<void> {
        await this.signInButton.click();
    }
}