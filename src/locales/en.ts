import type { Locale } from "./type";

export default {
    page: {
        title: "Portfolio",
        home: {   
            nav: "Home", 
            greetings: "Welcome to my portfolio!!",
            whoAmI: "Who am I?",
            introduction: "My name is José Daniel Flores Morales, I am a software developer with 3 years of experience in the industry.",
            welcome: `On this website, you will find my industry experience, projects I have developed, and projects I have planned.`,
            portfolioSourceCode: `You can find the source code of this portfolio`,
            here: 'here'
        },
        about: {
            nav: "About"
        },
        contact: {
            nav: "Contact Me"
        },
        projects: {
            nav: "Projects",
            pictale: {
                remarks:{
                    1: `Used react native and ABP framework to develop both front-end and backend of the application.`,
                    2: `Matching the design choices in react-native, using the simplest approaches.`,
                    3: `Preferred tools like: Zustand and expo go.`,
                    4: `Building, publishing and reviewing the app and every single requirement from app store and google play.`
                },
            },
        }
    }
} as Locale;
