export const SearchPage = () => {
  return (
    <>
      <h1>Search a Hero</h1>
      <hr />
      <div className="row mt-4">
        <div className="col-12 col-lg-5">
          <form>
            <div className="row g-2 align-items-center mb-4 mb-lg-0">
              <div className="col-12 col-md-10">
                <input
                  id="search-text"
                  name="searchText"
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  placeholder="Search a hero"
                />
              </div>
              <div className="col-12 col-md-2">
                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-primary">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-7">
          <h2 style={{ lineHeight: '28px', marginBottom: '0' }}>Results</h2>
          <hr />

          <div className="alert alert-info fw-bold">
            <i class="bi bi-emoji-wink"></i> Type a hero name to get results
          </div>

          <div className="alert alert-danger fw-bold">
            <i class="bi bi-emoji-frown-fill"></i> There's no hero named "Goku"
          </div>
        </div>
      </div>
    </>
  );
};
