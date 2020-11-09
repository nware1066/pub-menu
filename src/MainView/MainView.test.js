import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import MainView from './MainView'

describe('MainView', () => {
  it('Should render the landing page', () => {
    let mockServeBeer = jest.fn()

    render(
      <MemoryRouter>
        <MainView
        serveBeer={mockServeBeer}
        />
      < /MemoryRouter>
    )

    const beerButton = screen.getByRole('button')

    expect(screen.getByText("Welcome to the pub")).toBeInTheDocument()
    expect(beerButton).toBeInTheDocument()
    expect(screen.getByText("Click the button and get a beer")).toBeInTheDocument()
    fireEvent.click(beerButton)
    expect(mockServeBeer).toHaveBeenCalledTimes(1)


  })
})
//
