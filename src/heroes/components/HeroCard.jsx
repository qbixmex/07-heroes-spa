import { Link } from 'react-router-dom';

export const HeroCard = (props) => {
  const { id, superhero, alter_ego, } = props;
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
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
        <p><b>Real Name:</b> {alter_ego}</p>          
      </div>
    </div>
  );
};
