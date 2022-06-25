import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages';

describe('Test on <SearchPage />', () => {
  
  
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

    // screen.debug();
    
  });
});