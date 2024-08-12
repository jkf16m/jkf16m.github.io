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
				duration: "Marzo 2023 - Enero 2024",
				description: `
					Trabaje aquí por varios meses, antes de empezar en Be-it
				`,
				remark:{
					1: 'Multiple projects with ASP.NET, jQuery and MVC.',
					2: 'Full-stack development, ASP.NET and MVC.',
					3: 'Much more experience in UX/UI.',
				}
			},
			simpatTech:{
				name: 'SimpatTech',
				duration: "Mayo 2022 - Enero 2023",
				description: `
					Trabaje haciendo asignaciones para la empresa
				`,
				remark:{
					1: 'Developing and helping making ASP.NET Razor pages websites.',
					2: 'Solving issues related to bugs.',
					3: 'Making InHouse projects.',
				}
			},
			ravisa:{
				name: 'Ravisa',
				duration: 'Mayo 2021 - Mayo 2022',
				description: `
					Una empresa de logística aduanera, estuve ayudando en la lógica de pedimentos,
					y en mantener un sistema en estado productivo.
					También en el desarrollo del proyecto del desarrollo de CartaPorte.
				`,
				remark: {
					1: 'Developing a web services with ASP.NET CORE and Entity framework CORE, trying to follow a micro-service architecture and improve maintainability.',
					2: 'Offering customer service to our clients and users via outlook.',
					3: 'Creating power automate flows to send information to our clients and simple automation tasks.',
					4: 'Designing web applications and developing them with ReactJS.',
				},
			},
			haloCreativeAndDesign:{
				name: 'Halo Creative and Design',
				duration: 'Enero 2020 - Agosto 2020',
				description: `
					En una fábrica de muebles, trabaje en el área de ingenieria y logística.
				`,
				remark:{
					1: 'Helping in the optimization and implementation of the new informational system Oracle SCM (Supply Chain Management).',
					2: 'A helper for an industrial engineer, recording times of the production chain and giving new ideas about how to cut times.',
					3: 'Multiple projects, including one important project that was about changing more than 14,000 records in a SQL Database. (It was a long hard working project due to the limited permissions given by Oracle SCM as an application), still done.',
				},
			},
			virtualium: {
				name: 'Virtualium Team',
				duration: 'Julio 2020 - Septiembre 2020',
				description: `
					De mis primeras experiencias profesionales en la industria de software.
				`,
				remark:{
					1: 'Programming using ReactJS framework.',
					2: 'Participating and giving ideas of the current project status.',
					3: 'Consuming API REST, and giving specifications about how the API REST entry points should work, working together finding the best approach for the solution (both me and my coworker, between frontEnd and backEnd developers).',
					4: 'Nice understading between coworkers and me, using english as our main communication language.',
				}
			}
		},
		footer: {
			madeWith: "Aplicación hecha con svelte"
		}
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
				aspnet: 'ASP.NET',
				oracleScm: 'Oracle SCM',
			},
			roles:{
				architect: 'arquitecto',
				developer: 'desarrollador',
				leadDeveloper: 'desarrollador principal',
				fullstack: 'full-stack',
				technicalSupport: 'soporte técnico',
				maintainer: 'mantenimiento',
				engineer: 'ingeniero',
				helper: 'ayudante',
			},
			remarks: 'Detalles'
		},
	},
} as Locale;
