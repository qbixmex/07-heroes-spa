import { heroes } from "../data/heroes";

/**
 * Get Hero by id
 * @param {string} id Hero Identifier
 * @returns {{
 *	id: string;
 *	superhero: string;
 *	studio: string;
 *	alter_ego: string;
 *	first_appearance: string;
 *	characters: string;
 *	}|undefined} Hero Object or undefined
 */
export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id);
};
