import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import FoodPairingView from './FoodPairingView'
describe('FoodPairingView', () => {
  it('Should display food options', () => {
    let mockViewFood = true
    let mockFoods = [
      "food1", "food2", "food3"
    ]

    render(
      <FoodPairingView
        foods={mockFoods}
        viewFood={mockViewFood}
      />
    )
    expect(screen.getByText("food1")).toBeInTheDocument()
    expect(screen.getByText("food2")).toBeInTheDocument()
    expect(screen.getByText("food3")).toBeInTheDocument()

  })
})
