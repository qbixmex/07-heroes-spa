import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { CharactersByHero } from "../components";
import { getHeroById } from "../helpers";
import { topCss, imageCssClasses } from "./";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [ id ]);

  if (!hero) return (<Navigate to='/' />);

  const {
    superhero,
    alter_ego,
    first_appearance,
    characters,
    studio,
  } = hero;

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <main>
        <div className={ topCss }>
          <div className="col-12 col-lg-5">
            <img
              className={imageCssClasses}
              src={`/assets/heroes/${id}.jpg`}
              alt={superhero}
            />
          </div>
          <div className="col-12 col-lg-7">
            <h1 className="mb-4">{superhero}</h1>
            <h2>Character Information</h2>
            <table className="table">
              <tbody>
                <tr>
                  <th>Alter Ego</th>
                  <td>{alter_ego}</td>
                </tr>
                <tr>
                  <th style={{ width: '160px' }}>First Appearance:</th>
                  <td>{first_appearance}</td>
                </tr>
                <tr>
                  <th>Studio:</th>
                  <td>{studio}</td>
                </tr>
              </tbody>
            </table>
            
            <CharactersByHero characters={characters} alter_ego={alter_ego} />
            <button
              className="btn btn-outline-primary"
              onClick={ onNavigateBack }
            >
              Back
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
