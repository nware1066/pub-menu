import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SingleBeerView from './SingleBeerView';
import FoodPairingView from '../FoodPairingView/FoodPairingView';

describe('SingleBeerView', () => {
  it('should display beer information', () => {
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
    expect(mockServeBeer).toHaveBeenCalledTimes(1)
    fireEvent.click(foodButton)
    expect(mockShowFood).toHaveBeenCalledTimes(1)
  })

  it('Should show food options on request', () => {

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
    let mockViewFood = false

    render(
      <MemoryRouter>
        <SingleBeerView
          beer={mockBeer}
          serveBeer={mockServeBeer}
          showFood={mockShowFood}
          viewFood={mockViewFood}
        />
      </MemoryRouter>
    )

    let beerButton = screen.getByText("I don't want this one")
    let foodButton = screen.getByRole('button', { name: /sounds great! show me some food that goes with this!/i })

    fireEvent.click(foodButton)

    mockViewFood = true
    let mockAddToFavorites = jest.fn();


    render(
      <MemoryRouter>
        <SingleBeerView
          beer={mockBeer}
          serveBeer={mockServeBeer}
          showFood={mockShowFood}
          viewFood={mockViewFood}
          addToFavorites={mockAddToFavorites}
        />
      </MemoryRouter>
    )

    let favoriteButton = screen.getByText("Add to Favorites")

    foodButton = screen.getByRole('button', { name: /sounds great! show me some food that goes with this!/i })
    expect(screen.getByText("Show Me My Favorites")).toBeInTheDocument()
    expect(screen.getByText("I Want To See More Beers")).toBeInTheDocument()
    expect(favoriteButton).toBeInTheDocument()
    fireEvent.click(favoriteButton)
    expect(mockAddToFavorites).toHaveBeenCalledTimes(1)
  })
})
//
