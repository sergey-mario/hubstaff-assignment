import { Locator, Page } from '@playwright/test';

export class SideBarWidget {
    readonly page: Page;
    readonly menuItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuItems = page.locator('[role="menuitem"]');
    }

    async clickProjectManagementOption(): Promise<void> {
        await this.menuItems.getByText('Project management', { exact: true }).click();
    }

    async clickProjectsOption(): Promise<void> {
        await this.menuItems.getByText('Projects', { exact: true }).click();
    }
}