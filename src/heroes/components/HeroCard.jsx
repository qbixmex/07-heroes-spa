import { Link } from 'react-router-dom';

export const HeroCard = (props) => {
  const { id, superhero, alter_ego, } = props;
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
          <p><b>Real Name:</b> {alter_ego}</p>          
        </div>
      </div>
    </div>
  );
};
