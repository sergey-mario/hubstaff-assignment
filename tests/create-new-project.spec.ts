import { faker } from '@faker-js/faker';
import { expect, test } from '../fixture/app-fixture';
import { testUser } from '../utils/user-data-util';

test.describe('Create new project', async () => {
    const projectName = `project-${faker.string.alphanumeric(10)}`;

    test.afterEach(async ({ app }) => {
        await app.projectsPage.clickActionDropdownByName(projectName);
        await app.projectsPage.clickDeleteOption();
        await app.deleteProjectPopup.deleteProject();
    });

    test('User can create new project', async ({ app }) => {
        await app.homePage.goto();
        await app.homePage.clickSignInButton();
        await app.signInPage.signIn(testUser.email, testUser.password);
        await app.sideBarWidget.clickProjectManagementOption();
        await app.sideBarWidget.clickProjectsOption();
        await app.projectsPage.clickAddProjectButton();
        await app.newProjectPopup.fillProjectName(projectName);
        await app.newProjectPopup.clickSaveButton();
        const projectNameFromProjectsPage = await app.projectsPage.getProjectByName(projectName);
        expect(projectNameFromProjectsPage).toBe(projectName);
    });
});
