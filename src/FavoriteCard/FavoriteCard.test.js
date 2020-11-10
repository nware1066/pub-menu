import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FavoriteCard from './FavoriteCard';

describe('FavoriteCard', () => {

  const mockFavorite = {
    name: 'beer1',
    description: 'beer1 description',
    foods: ["food1", "food2", "food3"]
  }

  render(
    <MemoryRouter>
      <FavoriteCard
        name={mockFavorite.name}
        description={mockFavorite.description}
        foods={mockFavorite.foods}
      />
    </ MemoryRouter>
  )

  it('should render information about a selected beer', () => {
    expect(screen.getByText('beer1')).toBeInTheDocument()
    expect(screen.getByText('beer1 description')).toBeInTheDocument()
    expect(screen.getByText('food1')).toBeInTheDocument()

  })
})
//
