export type Page = {
    nav: string
}

export type Locale = {
    page: {
        title: string;
        home: Page & {
            greetings: string;
            introduction: string;
            whoAmI: string;
            welcome: string;
        },
        about: Page & {
        },
        contact: Page & {
        },
        projects: Page & {
        }
    }
}