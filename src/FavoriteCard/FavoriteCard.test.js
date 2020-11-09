import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FavoriteCard from './FavoriteCard';

describe('FavoriteCard', () => {

  const mockFavorite = {
    name: 'beer1',
    description: 'beer1 description',
  }

  render(
    <MemoryRouter>
      <FavoriteCard
        name={mockFavorite.name}
        description={mockFavorite.description}
      />
    </ MemoryRouter>
  )

  it('should render information about a selected beer', () => {
    expect(screen.getByText('beer1')).toBeInTheDocument()
    expect(screen.getByText('beer1 description')).toBeInTheDocument()

  })
})
//
