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
					1: 'Utilicé React Native y el marco ABP para desarrollar tanto el front-end como el back-end de la aplicación.',
					2: 'Adaptación de las decisiones de diseño en react-native, utilizando los enfoques más simples.',
					3: 'Herramientas preferidas: Zustand y expo go.',
					4: 'Construcción, publicación y revisión de la aplicación y todos los requisitos de la App Store y Google Play.',
				}
			},
			ingeniosys:{
				name: 'Ingeniosys',
				duration: "Marzo 2023 - Enero 2024",
				description: `
					Trabajé aquí por varios meses, antes de empezar en Be-it
				`,
				remark:{
					1: 'Varios proyectos con ASP.NET, jQuery y MVC.',
					2: 'Desarrollo full-stack, ASP.NET y MVC.',
					3: 'Mayor experiencia en UX/UI.',
				}
			},
			simpatTech:{
				name: 'SimpatTech',
				duration: "Mayo 2022 - Enero 2023",
				description: `
					Trabajé realizando asignaciones para la empresa
				`,
				remark:{
					1: 'Desarrollo y asistencia en la creación de sitios web con ASP.NET Razor Pages.',
					2: 'Resolución de problemas relacionados con errores.',
					3: 'Desarrollo de proyectos internos.',
				}
			},
			ravisa:{
				name: 'Ravisa',
				duration: 'Mayo 2021 - Mayo 2022',
				description: `
					Una empresa de logística aduanera, ayudé en la lógica de pedimentos
					y en el mantenimiento de un sistema en estado productivo.
					También participé en el desarrollo del proyecto de CartaPorte.
				`,
				remark: {
					1: 'Desarrollo de servicios web con ASP.NET CORE y Entity Framework CORE, siguiendo una arquitectura de microservicios y mejorando la mantenibilidad.',
					2: 'Atención al cliente para nuestros clientes y usuarios a través de Outlook.',
					3: 'Creación de flujos de Power Automate para enviar información a nuestros clientes y realizar tareas de automatización simples.',
					4: 'Diseño y desarrollo de aplicaciones web con ReactJS.',
				},
			},
			haloCreativeAndDesign:{
				name: 'Halo Creative and Design',
				duration: 'Enero 2020 - Agosto 2020',
				description: `
					En una fábrica de muebles, trabajé en el área de ingeniería y logística.
				`,
				remark:{
					1: 'Ayuda en la optimización e implementación del nuevo sistema de información Oracle SCM (Supply Chain Management).',
					2: 'Asistente de un ingeniero industrial, registrando tiempos de la cadena de producción y aportando ideas sobre cómo reducir tiempos.',
					3: 'Múltiples proyectos, incluido uno importante que consistió en cambiar más de 14,000 registros en una base de datos SQL. (Fue un proyecto largo y arduo debido a los permisos limitados otorgados por Oracle SCM como aplicación), aún así lo completé.',
				},
			},
			virtualium: {
				name: 'Virtualium Team',
				duration: 'Julio 2020 - Septiembre 2020',
				description: `
					De mis primeras experiencias profesionales en la industria del software.
				`,
				remark:{
					1: 'Programación utilizando el marco ReactJS.',
					2: 'Participación y aportación de ideas sobre el estado actual del proyecto.',
					3: 'Consumo de API REST y especificación de cómo deberían funcionar los puntos de entrada de la API REST, trabajando en conjunto para encontrar el mejor enfoque para la solución (entre desarrolladores de frontEnd y backEnd).',
					4: 'Buena comprensión entre mis compañeros de trabajo y yo, utilizando el inglés como nuestro principal idioma de comunicación.',
				}
			}
		},
		footer: {
			nav: 'Contáctame',
			madeWith: "Aplicación hecha con svelte",
			credits:{
				title: 'Créditos a',
				family: 'Mi familia',
				coworkers: 'Compañeros de trabajo',
				teachers: 'Todos mis profesores',
				alejandroTaboada: 'La persona que me enseño lo más importante del desarrollo de software, que en paz descanse.',
				motto: "Si puedes imaginarlo, puedes programarlo",
			},
			copyright: '© 2024 José Daniel Flores Morales. Todos los derechos reservados.'
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
