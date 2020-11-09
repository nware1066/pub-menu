import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SingleBeerView from './SingleBeerView';

describe('SingleBeerView', () => {
  it('should display beer information', () => {
    let mockServeBeer = jest.fn()
    const mockBeer = [
      {
        "id": 1,
        "name": "beer1",
        "tagline": "beer1 tagline",
        "description": "beer1 is a great beer"
      }
    ]

    render(
      <MemoryRouter>
        <SingleBeerView
          beer={mockBeer}
          serveBeer={mockServeBeer}
        />
      </MemoryRouter>
    )
    expect(screen.getByText("I don't want this one")).toBeInTheDocument()
    userEvent.click(screen.getByText("I don't want this one"))
    expect(mockServeBeer).toHaveBeenCalledTimes(1)
  })
})
//
