import { useMemo } from 'react';
import { getHeroesByStudio } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ studio }) => {

  const heroes = useMemo(() => getHeroesByStudio(studio), [studio]);

  return (
    <div className='row g-4 animate__animated animate__fadeIn'>
      {
        heroes.map(hero => (
          <HeroCard key={ hero.id } { ...hero } />
        ))
      }
    </div>
  );
};
