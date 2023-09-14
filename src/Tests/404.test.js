import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Page404 from '../Pages/404';

test('The page 404 should appear', () => {
    render(<Page404 />);
    const text = screen.getByText('É a página 404');
    const button = screen.getByTestId('botao');
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});
