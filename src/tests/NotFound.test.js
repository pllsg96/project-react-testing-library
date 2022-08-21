// npx stryker run ./stryker/nomeDoArquivo.conf.json
// test('', () => { });
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testando NotFound.js', () => {
  test('Se a página contem um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const h2Text = screen.getByRole('heading', { name: /Page requested not found/i });

    expect(h2Text).toBeInTheDocument();
  });
  test('Se a página contem a imagem com o gif', () => {
    renderWithRouter(<NotFound />);
    const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const screenImg = screen.getByRole('img', { name: /requested was not found/i });

    expect(screenImg).toBeInTheDocument();
    expect(screenImg.src).toBe(imgSrc);
  });
});
