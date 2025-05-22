import { Locator, Page } from '@playwright/test';

export class DeleteProjectPopup {
    readonly page: Page;
    readonly deleteCheckbox: Locator;
    readonly deleteButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.deleteCheckbox = page.locator('#delete-checkbox + span');
        this.deleteButton = page.locator('#delete-button');
    }

    async clickDeleteCheckbox(): Promise<void> {
        await this.deleteCheckbox.click();
    }

    async clickDeleteButton(): Promise<void> {
        await this.deleteButton.click();
    }

    async deleteProject(): Promise<void> {
        await this.clickDeleteCheckbox();
        await this.clickDeleteButton();
        try {
            await this.deleteCheckbox.waitFor({ state: 'hidden', timeout: 5000 });
        } catch (error) {
            throw new Error('Project was not deleted');
        }
    }
}