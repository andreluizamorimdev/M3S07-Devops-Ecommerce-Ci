import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Components/Button';

test('The Button component should appear', () => {
  render(
    <BrowserRouter>
      <Button text="botao" />
    </BrowserRouter>
  )
  const text = screen.getByText('botao')
  expect(text).toBeInTheDocument()
});