import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SingleBeerView from './SingleBeerView';

describe('SingleBeerView', () => {
  it('should display beer information', async () => {
    const mockBeer = [
      {
        "id": 1,
        "name": "beer1",
        "tagline": "beer1 tagline",
        "description": "beer1 is a great beer"
      }
    ]
    let mockServeBeer = jest.fn()
    let mockShowFood = jest.fn()

    render(
      <MemoryRouter>
        <SingleBeerView
          beer={mockBeer}
          serveBeer={mockServeBeer}
          showFood={mockShowFood}
        />
      </MemoryRouter>
    )

    const beerButton = screen.getByText("I don't want this one")
    const foodButton = screen.getByRole('button', { name: /sounds great! show me some food that goes with this!/i })

    expect(screen.getByText("I don't want this one")).toBeInTheDocument()
    fireEvent.click(beerButton)
    screen.debug()
    expect(mockServeBeer).toHaveBeenCalledTimes(1)
    fireEvent.click(foodButton)
    expect(mockShowFood).toHaveBeenCalledTimes(1)
  })
})
//
