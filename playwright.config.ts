import { defineConfig, devices } from '@playwright/test';

const minute = 60000;
export default defineConfig({
    testDir: './tests',
    timeout: minute * 3,
    expect: {
        timeout: minute
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 3 : undefined,
    testMatch: ['**.spec.ts'],
    reporter: [
        ['list'],
        [
            'allure-playwright',
            {
                environmentInfo: {
                    NODE_VERSION: process.version,
                    OS: process.platform,
                    Environment: process.env.NODE_ENV,
                    Browser: 'chromium'
                }
            }
        ],
        ['html', { open: 'never' }]
    ],
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: minute,
        navigationTimeout: minute,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        ignoreHTTPSErrors: true,
        launchOptions: {
            slowMo: 300,
            args: ['--use-gl=egl']
        },
        baseURL: 'https://hubstaff.com'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});
