import { Locator, Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly acceptCookiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptCookiesButton = page.locator('#CybotCookiebotDialogBodyLevelButtonAccept');
    }

    async acceptCookies(): Promise<void> {
        try {
            await this.acceptCookiesButton.waitFor({ timeout: 2000 });
            await this.acceptCookiesButton.click();
        } catch (error) {
            // Ignore if the button is not present
        }
    }
}