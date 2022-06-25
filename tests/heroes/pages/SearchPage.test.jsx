import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Test on <SearchPage />', () => {

  beforeEach(() => jest.clearAllMocks());

  test('Should match with Snapshot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('Should show with default values', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );
    const h1 = container.querySelector('h1');
    const searchInput = container.querySelector('#search-text');
    const infoMessage = container.querySelector('#info-message');
    const errorMessage = container.querySelector('#error-message');
    expect(h1.innerHTML).toBe('Search a Hero');
    expect(searchInput).toBeTruthy();
    expect(infoMessage.innerHTML).toContain('Type a hero name to get results');
    expect(infoMessage.className).not.toContain('d-none');
    expect(errorMessage.className).toContain('d-none');
  });

  test('Should show spiderman and input with queryString value', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search?q=spiderman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const searchInput = container.querySelector('#search-text');
    const errorMessage = container.querySelector('#error-message');
    const card = container.querySelector('.card');
    const cardTitle = container.querySelector('.card-title');
    const image = container.querySelector('[alt=Spiderman]');

    expect(searchInput.value).toBe('spiderman');
    expect(errorMessage.className).toContain('d-none');
    expect(card).toBeTruthy();
    expect(cardTitle.innerHTML).toBe('Spiderman');
    expect(image.src).toContain('/assets/heroes/marvel-spider.jpg');

  });

  test('Should show an error if hero is not exist "Batman Beyond"', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search?q=Batman%20Beyond']}>
        <SearchPage />
      </MemoryRouter>
    );
    const infoAlert = container.querySelector('#info-message');
    const errorAlert = container.querySelector('#error-message');
    expect(infoAlert.className).toContain('d-none');
    expect(errorAlert.className).not.toContain('d-none');
    expect(errorAlert.innerHTML).toContain("Batman Beyond");
  });

  test('Should call navigate function', () => {
    const inputValue = 'Batman';

    const { container } = render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const form = container.querySelector('form');
    const searchInput = container.querySelector('#search-text');

    fireEvent.input(searchInput, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(searchInput.value).toBe(inputValue);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${ inputValue }`);

  });

});