// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Testando App.js', () => {
  describe('Verifica se o header tem um conjunto fixo de links para navegação', () => {
    test('Verifica se o Home existe em App', () => {
      // acessar
      const history = createMemoryHistory();
      render(
        <Router history={ history }>
          <App />
        </Router>,
      );
      const linkHome = screen.getByText('Home');

      // aferir
      expect(linkHome).toBeInTheDocument();
    });

    test('Verifica se o About existe em App', () => {
      // acessar
      const history = createMemoryHistory();
      render(
        <Router history={ history }>
          <App />
        </Router>,
      );
      const linkAbout = screen.getByText('About');

      // aferir
      expect(linkAbout).toBeInTheDocument();
    });

    test('Verifica se o Favorite Pokémons existe', () => {
      // acessar
      const history = createMemoryHistory();
      render(
        <Router history={ history }>
          <App />
        </Router>,
      );
      const linkFp = screen.getByText('Favorite Pokémons');

      // aferir
      expect(linkFp).toBeInTheDocument();
    });
  });
});
