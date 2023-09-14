import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react';
import Carrinho from '../Pages/Carrinho';
import mock from '../Mock/mock_carrinho.json'
import { BrowserRouter } from 'react-router-dom';

test('The page Carrinho should appear', () => {
  render(
    <BrowserRouter>
    
    <Carrinho carrinho={[{name: '', images: '', price: 0}]} />
    </BrowserRouter>
  );
});