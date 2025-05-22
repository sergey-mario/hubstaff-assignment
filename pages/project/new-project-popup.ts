import { Locator, Page } from '@playwright/test';

export class NewProjectPopup {
    readonly page: Page;
    readonly projectNameInput: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.projectNameInput = page.locator('#name textarea');
        this.saveButton = page.locator('.modal-footer .btn-primary');
    }

    async fillProjectName(projectName: string): Promise<void> {
        await this.projectNameInput.fill(projectName);
    }

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }
}