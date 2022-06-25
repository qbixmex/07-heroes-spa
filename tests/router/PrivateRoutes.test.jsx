import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoutes } from '../../src/router';

describe('Test on <PrivateRoutes />', () => {

  // Local Storage Mock
  Storage.prototype.setItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should show children if user is authenticated', () => {

    const contextValue = {
      logged: true,
      user: {
        id: '5gpE94#bk8ptnIe9',
        name: 'Tony Stark'
      }
    };

    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=spiderman']}>
          <PrivateRoutes>
            <h1>Search Page</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const h1 = container.querySelector('h1');

    expect(h1.innerHTML).toBe('Search Page');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=spiderman');
  });

  test('Should navigate to root page if user is not authenticated', () => {
    const contextValue = { logged: false };
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Routes>
            <Route path='marvel' element={
              <PrivateRoutes>
                <h1>Marvel Page</h1>
              </PrivateRoutes>
            } />
            <Route path='/login' element={ <h1>Login Page</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toBe('Login Page');
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });
});