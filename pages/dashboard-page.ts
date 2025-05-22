import { Locator, Page } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly sideBarMenu: Locator;
    readonly userAvatar: Locator;
    readonly orgAvatar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sideBarMenu = page.locator('[role="navigation"]');
        this.userAvatar = page.locator('[class="avatar avatar-speck"]');
        this.orgAvatar = page.locator('[class="avatar"]');
    }
}