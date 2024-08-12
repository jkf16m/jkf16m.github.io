import type { Locale } from './type';

export default {
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
		projects: {
			nav: 'Proyectos',
			pictale:{
				description: `
				Proyecto de pictale
				`
			}
		},
	},
	components:{
		project:{
			date: 'Fecha',
			role: 'Rol',
			usedTechnologies: 'Tecnologías usadas',
			roles:{
				architect: 'Arquitecto'
			}
		}
	}
} as Locale;
