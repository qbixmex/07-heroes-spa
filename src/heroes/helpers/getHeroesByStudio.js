import { heroes } from '../data/heroes';

/**
 * Get heroes by studio name.
 * @param {string} studio Example: 'DC Comics' or 'Marvel Comics'
 * @returns {{
 *	id: string;
 *	superhero: string;
 *	studio: string;
 *	alter_ego: string;
 *	first_appearance: string;
 *	characters: string;
	}[] } Array of DC or Marvel Comics objects.
 */
export const getHeroesByStudio = ( studio ) => {

  const validStudios = ['DC Comics', 'Marvel Comics'];

  if ( !validStudios.includes( studio ) ) {
    throw new Error(`${ studio } is not a valid studio`);
  }

  return heroes.filter( hero => hero.studio === studio );

};
