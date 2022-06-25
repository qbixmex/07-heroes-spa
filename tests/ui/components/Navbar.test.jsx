import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // Spread MemoryRouter and other functions from react-router-dom
  // if you destructure them
  ...jest.requireActual('react-router-dom'),

  // Mock useNavigate
  useNavigate: () => mockedUseNavigate
}));

const contextValue = {
  logged: true,
  user: {
    id: '5gpE94#bk8ptnIe9',
    name: 'Bruce Wayne'
  },
  logout: jest.fn()
};

describe('Test on <Navbar>', () => {

  beforeEach(() => jest.clearAllMocks());

  test('Should show a user name if is authenticated', () => {
    const { container } = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/dc']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const username = container.querySelector('#username');

    expect(username.innerHTML).toBe(contextValue.user.name);
  });

  test('Should call logout function and navigate to login', () => {
    const { container } = render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/dc']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    
    const logoutButton = container.querySelector('#logout');
    fireEvent.click(logoutButton);

    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });
  });
});
