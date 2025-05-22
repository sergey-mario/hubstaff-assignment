import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class SignUpPage extends BasePage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly termsCheckbox: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.locator('#hubstaff_user_first_name');
        this.lastNameInput = page.locator('#hubstaff_user_last_name');
        this.emailInput = page.locator('#hubstaff_email');
        this.passwordInput = page.locator('#hubstaff_password');
        this.termsCheckbox = page.locator('[data-testid="accept_terms"] + div');
        this.createAccountButton = page.getByTestId('create_my_account');
    }

    async fillFirstName(firstName: string): Promise<void> {
        await this.acceptCookies();
        await this.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName: string): Promise<void> {
        await this.acceptCookies();
        await this.lastNameInput.fill(lastName);
    }

    async fillEmail(email: string): Promise<void> {
        await this.acceptCookies();
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.acceptCookies();
        await this.passwordInput.fill(password);
    }

    async acceptTerms(): Promise<void> {
        await this.acceptCookies();
        await this.termsCheckbox.click();
    }

    async clickCreateAccountButton(): Promise<void> {
        await this.acceptCookies();
        await this.createAccountButton.click();
    }

    async createAccount(firstName: string, lastName: string, email: string, password: string): Promise<void> {
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.acceptTerms();
        await this.clickCreateAccountButton();
    }
}