import type { Locale } from './type';

export default {
	words:{
		for: 'para',
		in: 'en',
	},
	page: {
		title: 'Portafolio',
		home: {
			nav: 'Inicio',
			greetings: 'José Daniel Flores Morales',
			welcome: `
				Desarrollador con más de 3 años de experiencia. Enfocado en frontend, aspirando
				a la arquitectura de software.
            `,
			portfolioSourceCode: `Puedes encontrar el código fuente de este portafolio`,
			here: 'aquí'
		},
		about: {
			whoAmI: '¿Quién soy?',
			nav: 'Acerca de',
			introduction:
				`Mi nombre es José Daniel Flores Morales, soy un desarrollador de software, actualmente tengo 3 años de experiencia en la industria`,
		},
		contact: {
			nav: 'Contáctame'
		},
		projects:{
			nav: 'Proyectos',
		},
		experience: {
			nav: 'Experiencia',
			pictale:{
				name: 'proyecto Pictale',
				duration: "Julio 2023 - Junio 2024",
				description: `
				Proyecto de pictale
				`,
				remark: {
					1: 'Used react native and ABP framework to develop both front-end and backend of the application.',
					2: 'Matching the design choices in react-native, using the simplest approaches.',
					3: 'Preferred tools like: Zustand and expo go.',
					4: 'Building, publishing and reviewing the app and every single requirement from app store and google play.',
				}
			},
			ingeniosys:{
				name: 'Ingeniosys',
				duration: "Marzo 2024 - Enero 2024",
				description: `
					Trabaje aquí por varios meses, antes de empezar en Be-it
				`,
				remark:{
					1: 'Multiple projects with ASP.NET, jQuery and MVC.',
					2: 'Full-stack development, ASP.NET and MVC.',
					3: 'Much more experience in UX/UI.',
				}
			}
		},
	},
	components:{
		project:{
			date: 'Fecha',
			role: 'Rol',
			usedTechnologies: 'Tecnologías usadas',
			technologies:{
				reactNative: 'React Native',
				dotnet: '.NET',
				dotnetCore: '.NET Core',
				csharp: 'C#',
				javascript: 'Javascript',
				typescript: 'Typescript',
				nodejs: 'NodeJS',
				jquery: 'JQuery',
				aspnet: 'ASP.NET'
			},
			roles:{
				architect: 'arquitecto',
				developer: 'desarrollador',
				leadDeveloper: 'desarrollador principal',
				fullstack: 'full-stack',
			},
			remarks: 'Abrir detalles'
		}
	}
} as Locale;
