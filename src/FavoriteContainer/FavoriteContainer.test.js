import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FavoriteContainer from './FavoriteContainer';
import FavoriteCard from '../FavoriteCard/FavoriteCard';


describe('FavoriteContainer', () => {
  it('should display all favorites', () => {
    let mockFavorites = [
        {
          "id": 1,
          "name": "beer1",
          "tagline": "beer1 tagline",
          "description": "beer1 is a great beer"
        },
        {
          "id": 2,
          "name": "beer2",
          "tagline": "beer2 tagline",
          "description": "beer2 is a great beer"
        },
        {
          "id": 3,
          "name": "beer3",
          "tagline": "beer3 tagline",
          "description": "beer3 is a great beer"
        }
    ]

    render(
      <MemoryRouter>
        <FavoriteContainer
          favorites={mockFavorites}
        />
      </MemoryRouter>
    )
    expect(screen.getByText("beer1")).toBeInTheDocument()
    expect(screen.getByText("beer2")).toBeInTheDocument()
    expect(screen.getByText("beer3")).toBeInTheDocument()


  })
})
