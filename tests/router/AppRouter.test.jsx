import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router";

describe('Test on <AppRouter />', () => {
  test('Should show login if user is not authenticated', () => {
    const contextValue = { logged: false };

    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const h1 = container.querySelector('h1');

    expect(h1.innerHTML).toBe('Login Screen');
  });

  test('Should show marvel if user is authenticated', () => {
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
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const h1 = container.querySelector('h1');

    expect(h1.innerHTML).toBe('Marvel Page');
  });
});
