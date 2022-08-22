// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testando Pokedex.js', () => {
  test('Se a página contem um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const h2Text = screen.getByRole('heading', { name: /Encountered pokémons/i });

    expect(h2Text).toBeInTheDocument();
  });

  test('Se é exibido o próximo pokemon quando clicado em "próximo pokemon"', () => {
    renderWithRouter(<App />);
    const nextButton = screen.getByTestId('next-pokemon');
    expect(nextButton).toBeInTheDocument();

    pokemons.forEach((poke) => {
      const { name } = poke;
      const nomeTela = screen.getByText(name);
      const imgNaTela = screen.getByRole('img');
      expect(nomeTela).toBeInTheDocument();
      expect(imgNaTela).toBeInTheDocument();
      userEvent.click(nextButton);
    });
  });

  test('Se existem os botões filtro', () => {
    renderWithRouter(<App />);
    const nFiltros = 7;
    const botoesFiltro = screen.getAllByTestId('pokemon-type-button');
    expect(botoesFiltro.length).toBe(nFiltros);
  });

  test('Se ao clicar no filtro, só apresentará um pokemon', () => {
    renderWithRouter(<App />);
    const botoesFiltro = screen.getAllByTestId('pokemon-type-button');
    userEvent.click(botoesFiltro[0]);

    const nomeEletric = screen.getAllByText(/electric/i);
    expect(nomeEletric.length).toBe(2);

    const proxPokemon = screen.getByTestId('next-pokemon');
    expect(proxPokemon.disabled).toBe(true);
  });
});
