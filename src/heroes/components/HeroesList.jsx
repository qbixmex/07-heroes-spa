import { useMemo } from 'react';
import { getHeroesByStudio } from '../helpers';
import { HeroCard } from './HeroCard';

const rowClass = `\
row row-cols-1 \
row-cols-md-2 \
row-cols-lg-3 \
row-cols-xl-4 \
g-4 \
animate__animated animate__fadeIn\
`;

export const HeroesList = ({ studio }) => {

  const heroes = useMemo(() => getHeroesByStudio(studio), [studio]);

  return (
    <div className={ rowClass }>
      {
        heroes.map(hero => (
          <div key={ hero.id } className="col">
            <HeroCard { ...hero } />
          </div>
        ))
      }
    </div>
  );
};
