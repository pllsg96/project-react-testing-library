// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando App.js', () => {
  describe('Verifica se o header tem um conjunto fixo de links para navegação', () => {
    test('Verifica se o Home existe em App', () => {
      // acessar
      renderWithRouter(<App />);
      const linkHome = screen.getByRole('link', { name: 'Home' });

      // aferir
      expect(linkHome).toBeInTheDocument();
    });

    test('Verifica se o About existe em App', () => {
      // acessar
      renderWithRouter(<App />);
      const linkAbout = screen.getByRole('link', { name: 'About' });

      // aferir
      expect(linkAbout).toBeInTheDocument();
    });

    test('Verifica se o Favorite Pokémons existe', () => {
      // acessar
      renderWithRouter(<App />);
      const linkFp = screen.getByRole('link', { name: 'Favorite Pokémons' });

      // aferir
      expect(linkFp).toBeInTheDocument();
    });
  });

  describe('Testa os redirecionamentos da aplicação', () => {
    test('Verifica se ao clicar em Home, a aplicação vai para a página inicial', () => {
      const { history } = renderWithRouter(<App />);
      const linkHome = screen.getByRole('link', { name: 'Home' });
      expect(linkHome).toBeInTheDocument();

      const { location: { pathname } } = history;
      userEvent.click(linkHome);
      expect(pathname).toBe('/');
    });

    test('Verifica se ao clicar em About, a aplicação vai para a página about', () => {
      const { history } = renderWithRouter(<App />);
      const linkAbout = screen.getByRole('link', { name: 'About' });
      expect(linkAbout).toBeInTheDocument();

      // const { location: { pathname } } = history;
      userEvent.click(linkAbout);
      expect(history.location.pathname).toBe('/about');
    });

    test('Se ao clicar em Favorite Pokémons, redireciona para /FavoritePokemons', () => {
      const { history } = renderWithRouter(<App />);
      const linkFavorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(linkFavorites).toBeInTheDocument();

      // const { location: { pathname } } = history;
      userEvent.click(linkFavorites);
      expect(history.location.pathname).toBe('/favorites');
    });
  });
});
