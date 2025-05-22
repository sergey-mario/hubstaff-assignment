import { test as base } from '@playwright/test';
import { App } from '../pages/app';

type Pages = {
    app: App;
};

export const test = base.extend<Pages>({
    app: async ({ page }, use) => {
        await use(new App(page));
    }
});

export { expect } from '@playwright/test';
