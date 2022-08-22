// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import pokemons from '../data';

describe('Testando Pokemon.js', () => {
  test('Teste se é renderizado as informações de um determinado pokemon', () => {
    renderWithRouter(<App />);
    const nomePokemon = screen.getByText('Pikachu');
    expect(nomePokemon).toBeInTheDocument();

    const tipoPokemon = screen.getAllByText('Electric');
    expect(tipoPokemon.length).toBe(2);

    const pesoPokemon = screen.getByText('Average weight: 6.0 kg');
    expect(pesoPokemon).toBeInTheDocument();

    const pokemonUrl = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const pokemonImg = screen.getByRole('img');

    expect(pokemonImg.src).toBe(pokemonUrl);
    expect(pokemonImg.alt).toBe('Pikachu sprite');
  });

  test('Se o card possui um link de detalhes do pokemon', () => {
    renderWithRouter(<App />);
    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    expect(linkDetalhes).toHaveAttribute('href', '/pokemons/25');
  });

  test('Se ao clicar em more details, vai para a página de detalhes', () => {
    renderWithRouter(<App />);
    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const gameLocations = screen.getByRole('heading', { name: /Locations of/i });
    expect(gameLocations).toBeInTheDocument();
  });

  test('Se a URL exibida no navegador muda', () => {
    const { history } = renderWithRouter(<App />);
    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Se o Pokemon esta favoritado', () => {
    renderWithRouter(<App />);
    const linkDetalhes = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkDetalhes);

    const checkFav = screen.getByRole('checkbox', { id: 'favorite' });
    userEvent.click(checkFav);

    expect(checkFav.checked).toBe(true);

    const starUrl = '/star-icon.svg';
    const starScreen = screen.getByAltText(/Pikachu is marked/i);
    expect(starScreen.src).toContain(starUrl);
    expect(starScreen.alt).toBe('Pikachu is marked as favorite');
  });
});
