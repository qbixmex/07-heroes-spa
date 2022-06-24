import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const { q = '' } = queryString.parse(search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText.trim()}`);
  };

  return (
    <>
      <h1>Search a Hero</h1>
      <hr />
      <div className="row mt-4">
        <div className="col-12 col-lg-5">
          <form onSubmit={onSearchSubmit}>
            <div className="row g-2 align-items-center mb-4 mb-lg-0">
              <div className="col-12 col-md-10">
                <input
                  id="search-text"
                  name="searchText"
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  placeholder="Search a hero"
                  value={searchText}
                  onChange={onInputChange}
                />
              </div>
              <div className="col-12 col-md-2">
                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-primary">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-7">
          <h2 style={{ lineHeight: '28px', marginBottom: '0' }}>Results</h2>
          <hr />

          <div className={ `alert alert-info animate__animated animate__flash ${ !showSearch && 'd-none' }` }>
            <i className="bi bi-emoji-wink-fill"></i> Type a hero name to get results
          </div>

          <div className={ `alert alert-danger animate__animated animate__flash ${ !showError && 'd-none'}` }>
            <i className="bi bi-emoji-frown-fill"></i> There's no hero named <b>{q}</b>
          </div>

          {
            (heroes.length !== 0) &&
            <div className="row row-cols-2 g-4">
              {
                heroes.map(hero => (
                  <div key={hero.id} className="col animate__animated animate__fadeIn">
                    <HeroCard {...hero} />
                  </div>
                ))
              }
            </div>
          }
        </div>
      </div>
    </>
  );
};
