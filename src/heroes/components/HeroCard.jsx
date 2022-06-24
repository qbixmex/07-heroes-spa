import { Link } from 'react-router-dom';
import { CharactersByHero } from './';

export const HeroCard = (props) => {
  const {
    id, superhero, alter_ego,
    first_appearance, characters
  } = props;

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card">
        <Link to={`/hero/${id}`}>
          <img
            className="card-img-top"
            style={{ minWidth: '200px', maxWidth: '500px' }}
            src={ heroImageUrl }
            alt={superhero}
          />
        </Link>
        <div className="card-body">
          <h2 className="card-title">{superhero}</h2>
          <p>
            <span className="fw-bold">Real Name:</span>&nbsp;
            {alter_ego}
          </p>
          <CharactersByHero characters={characters} alter_ego={alter_ego} />
          <p>
            <span className="fw-bold">First Appearance:</span><br />
            <span className="ms-2">{first_appearance}</span>
          </p>
          <div className="text-end">
            <Link
              className='btn btn-outline-primary btn-sm'
              to={`/hero/${id}`}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
