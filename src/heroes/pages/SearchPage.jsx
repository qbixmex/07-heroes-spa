import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";

export const SearchPage = () => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const { q = '' } = queryString.parse( search );

  const { searchText, onInputChange } = useForm({ searchText: '' });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.length <= 2 ) return;
    navigate(`?q=${searchText.trim()}`);
  };

  return (
    <>
      <h1>Search a Hero</h1>
      <hr />
      <div className="row mt-4">
        <div className="col-12 col-lg-5">
          <form onSubmit={ onSearchSubmit }>
            <div className="row g-2 align-items-center mb-4 mb-lg-0">
              <div className="col-12 col-md-10">
                <input
                  id="search-text"
                  name="searchText"
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  placeholder="Search a hero"
                  value={ searchText }
                  onChange={ onInputChange }
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

          <div className="alert alert-info">
            <i className="bi bi-emoji-wink"></i> Type a hero name to get results
          </div>

          <div className="alert alert-danger">
            <i className="bi bi-emoji-frown-fill"></i> There's no hero named <b>{ q }</b>
          </div>
        </div>
      </div>
    </>
  );
};
