import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "../Components/Header";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

test('The Header component should appear', () => {
  render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  )
})