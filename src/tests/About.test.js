// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

describe('Testando About.js', () => {
  describe('Verifica se o About possui as informações da pokédex', () => {
    test('Se a página contem um heading h2 com o texto About Pokédex', () => {
      renderWithRouter(<About />);
      const h2About = screen.getByRole('heading', { name: 'About Pokédex' });

      expect(h2About).toBeInTheDocument();
    });

    test('Se a página contem 2 textos falando sobre a Pokédex', () => {
      renderWithRouter(<About />);
      const p1 = screen.getByText(/simulates a Pokédex/i);
      const p2 = screen.getByText(/filter Pokémons by type/i);

      expect(p1).toBeInTheDocument();
      expect(p2).toBeInTheDocument();
    });

    test('Se About contém uma imagem de uma Pokédex', () => {
      renderWithRouter(<About />);
      const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
      const imgPokedex = screen.getByRole('img');

      expect(imgPokedex).toBeInTheDocument();
      expect(imgPokedex.src).toEqual(imgSrc);
    });
  });
});
