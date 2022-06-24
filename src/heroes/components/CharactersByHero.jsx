/**
 * Show characters if apply
 * @param {{
 *  characters: string;
 *  alter_ego: string;
 * }} props
 * @returns {JSX.Element}
 */
export const CharactersByHero = ({ alter_ego, characters  }) => {

  if (alter_ego === characters) return (<></>);

  const charactersArray = characters.split(',');

  return (
    <>
      <h3>Characters:</h3>      
      <ul>
        {charactersArray.map(c => (<li key={c}>{c}</li>))}
      </ul>
    </>
  );

};
