import { act, render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import mock from '../Mock/mock_carrinho.json'
import { BrowserRouter } from 'react-router-dom';
import Produtos from '../Pages/Produtos';

test('The page Produtos should appear', () => {
  render(
    <BrowserRouter>
      <Produtos key={1} handleCarrinho={() => {}} carrinho={[{}]}></Produtos>
    </BrowserRouter>
  )
  const produtos = screen.getAllByTestId('produtos')
  fireEvent.click(produtos[0])
});