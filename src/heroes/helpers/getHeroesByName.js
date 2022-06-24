import { heroes } from "../data/heroes";

/**
 * Get Heroes array by hero name search term.
 * @param {string=''} name Hero name
 * @returns {{
 * id: string;
 * superhero: string;
 * studio: string;
 * alter_ego: string;
 * first_appearance: string;
 * characters: string;
 * }[]|[]}
 */
export const getHeroesByName = ( name = '' ) => {

  if ( name.length === 0 ) return [];

  name = name.toLocaleLowerCase().trim();

  return heroes.filter(({ superhero }) => {
    superhero = superhero.toLowerCase();
    return superhero.includes( name );
  });

};