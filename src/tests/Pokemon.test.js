// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
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
  });
});
