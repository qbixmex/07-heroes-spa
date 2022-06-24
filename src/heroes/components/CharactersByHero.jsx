/**
 * Show characters if apply
 * @param {{
 *  characters: string;
 *  alter_ego: string;
 * }} props
 * @returns {JSX.Element}
 */
export const CharactersByHero = ({ characters, alter_ego }) => {

  /** @type {string[]} */
  const charactersArray = characters.split(',');

  if (alter_ego !== characters) return (<></>);

  return (
    <>
      <p className="fw-bold mb-1">Characters:</p>
      <ul>
        { charactersArray.map(c => (<li>{c}</li>)) }
      </ul>
    </>
  );

};
