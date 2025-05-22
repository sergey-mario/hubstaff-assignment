import { BrowserContext, Page } from '@playwright/test';
import { ConfirmationPage } from './account/confirmation-page';
import { SignInPage } from './account/sign-in-page';
import { SignUpPage } from './account/sign-up-page';
import { DashboardPage } from './dashboard-page';
import { HomePage } from './home-page';
import { DeleteProjectPopup } from './project/delete-project-popup';
import { NewProjectPopup } from './project/new-project-popup';
import { ProjectsPage } from './project/projects-page';
import { SideBarWidget } from './widget/side-bar-widget';

export class App {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly confirmationPage: ConfirmationPage;
    readonly dashboardPage: DashboardPage;
    readonly deleteProjectPopup: DeleteProjectPopup;
    readonly homePage: HomePage;
    readonly newProjectPopup: NewProjectPopup;
    readonly projectsPage: ProjectsPage;
    readonly sideBarWidget: SideBarWidget;
    readonly signInPage: SignInPage;
    readonly signupPage: SignUpPage;
    
    constructor(page: Page) {
        this.page = page;
        this.context = page.context();
        this.confirmationPage = new ConfirmationPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.deleteProjectPopup = new DeleteProjectPopup(page);
        this.homePage = new HomePage(page);
        this.newProjectPopup = new NewProjectPopup(page);
        this.projectsPage = new ProjectsPage(page);
        this.sideBarWidget = new SideBarWidget(page);
        this.signInPage = new SignInPage(page);
        this.signupPage = new SignUpPage(page);
    }
}
