// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import pokemons from '../data';

describe('Testando FavoritePokemons.js', () => {
  describe('Verifica se a página sem pokémons favoritos, possui mensagem', () => {
    test('Se a página contem um heading h2 com o texto No favorite pokemon found', () => {
      renderWithRouter(<FavoritePokemons />);
      const noPokemonsFound = screen.getByText('No favorite pokemon found');

      expect(noPokemonsFound).toBeInTheDocument();
    });

    test('Se a página contem a quantidade certa de pokemons favoritos', () => {
      renderWithRouter(<FavoritePokemons pokemons={ [pokemons[1]] } />);

      const getCharmander = screen.getByText('Charmander');
      expect(getCharmander).toBeInTheDocument();
    });
  });
});
