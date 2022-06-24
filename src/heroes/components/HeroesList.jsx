import { getHeroesByStudio } from '../helpers';

export const HeroesList = ({ studio }) => {

  const heroes = getHeroesByStudio(studio);

  return (
    <div className='row'>
      {
        heroes.map(({ id, superhero, alter_ego, studio }) => (
          <div key={ id } className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card" style={{ minWidth: '200px', maxWidth: '500px' }}>
              <img
                className="card-img-top"
                src={ `src/assets/heroes/${id}.jpg` }
                alt={ superhero }
              />
              <div className="card-body">
                <h2 className="card-title">{ superhero }</h2>
                <p>
                  <span className="fw-bold">Real Name:</span>&nbsp;
                  { alter_ego }
                </p>
                <p>
                  <span className="fw-bold">Studio:</span>&nbsp;
                  { studio }
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};
