import type { Locale } from './type';

export default {
	page: {
		title: 'Portafolio',
		home: {
			nav: 'Inicio',
			greetings: '¡¡Bienvenido a mi portafolio!!',
			whoAmI: '¿Quién soy?',
			introduction:
				'Mi nombre es José Daniel Flores Morales, soy un desarrollador de software, actualmente tengo 3 años de experiencia en la industria',
			welcome: `En esta página web, encontrarás mi experiencia en la industria, proyectos que he desarrollado y
            proyectos que tengo planeado.
            `,
			portfolioSourceCode: `Puedes encontrar el código fuente de este portafolio`,
			here: 'aquí'
		},
		about: {
			nav: 'Acerca de'
		},
		contact: {
			nav: 'Contáctame'
		},
		projects: {
			nav: 'Proyectos'
		}
	}
} as Locale;
