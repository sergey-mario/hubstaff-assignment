import { Locator, Page } from '@playwright/test';

export class ConfirmationPage {
    readonly page: Page;
    readonly verifyEmailTitle: Locator;
    readonly verifyEmailSubtitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.verifyEmailTitle = page.locator('h1.title');
        this.verifyEmailSubtitle = page.locator('.subtitle');
    }

    async getVerifyEmailTitle(): Promise<string> {
        return await this.verifyEmailTitle.textContent() ?? '';
    }

    async getVerifyEmailSubtitle(): Promise<string> {
        return await this.verifyEmailSubtitle.textContent() ?? '';
    }
}