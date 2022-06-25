import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRoutes } from '../../src/router/PublicRoutes';


describe('Test on <PublicRoutes />', () => {
  test('Should show children if user not authenticated', () => {
    const contextValue = { logged: false };

    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Public Route</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    const h1 = container.querySelector('h1');

    expect( h1.innerHTML ).toBe('Public Route');
  });

  test('Should navigate to root page if user authenticated', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '5gpE94#bk8ptnIe9',
        name: 'Tony Stark'
      }
    };
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoutes>
                <h1>Public Route</h1>
              </PublicRoutes>
            } />
            <Route path='/' element={ <h1>Marvel Page</h1> } />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toBe('Marvel Page');
  });
});