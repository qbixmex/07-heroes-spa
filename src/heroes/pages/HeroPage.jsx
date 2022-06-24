import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) return (<Navigate to='/' />);;

  const {
    superhero,
    studio,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <>
      <h2>{ hero.superhero }</h2>
      <img src={`/assets/heroes/${id}.jpg`} alt={superhero} />
      <p>Alter Ego: { alter_ego }</p>
      <p>Characters: { characters }</p>
      <p>First Appearance: { first_appearance }</p>
      <p>Studio: { studio }</p>
    </>
  );
};
