import { Locator, Page } from '@playwright/test';

export class ProjectsPage {
    readonly page: Page;
    readonly addProjectButton: Locator;
    readonly projectName: Locator;
    readonly actionDropdownByName: (name: string) => Locator;
    readonly actionOption: (option: string) => Locator;

    constructor(page: Page) {
        this.page = page;
        this.addProjectButton = page.locator('[data-original-title^="Add new project"]');
        this.projectName = page.locator('.project-name');
        this.actionDropdownByName = (name: string) =>
            page.locator('tr').filter({ hasText: name }).locator('[data-toggle="dropdown"]');
        this.actionOption = (name: string) => page.getByRole('link', { name });
    }

    async clickAddProjectButton(): Promise<void> {
        await this.addProjectButton.click();
    }

    async getProjectByName(projectName: string): Promise<string> {
        return await this.projectName.filter({ hasText: projectName }).textContent() ?? '';
    }

    async clickActionDropdownByName(name: string): Promise<void> {
        await this.actionDropdownByName(name).click();
    }

    async clickDeleteOption(): Promise<void> {
        await this.actionOption('Delete project').click();
    }
}