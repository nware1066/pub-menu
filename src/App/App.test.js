import React, { Component } from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getRandomBeer } from '../apiCalls.js';
import { formatBeers } from '../cleanData.js';
jest.mock('../apiCalls')
import App from './App';

describe('App', () => {

  it('should render home page', () => {
    render(
      <MemoryRouter>
        <App
        />
      </MemoryRouter>
    )

  let welcome = screen.getByText("Welcome to the pub")
  let beerButton = screen.getByRole('button', { name: /get me a beer!/i })
  let instruction = screen.getByText(/click the button and get a beer/i)
  expect(welcome).toBeInTheDocument()
  expect(beerButton).toBeInTheDocument()
  expect(instruction).toBeInTheDocument()
  })


  it('should load a random beer on request', async () => {

    let newBeer = [
    {
        "id": 238,
        "name": "Kingpin",
        "tagline": "21st century lager.",
        "first_brewed": "2016",
        "description": "A 4.7% German Pils with light, biscuit and toasty malt character, upon which is built a hop bitterness that provides complexity and a long, dry finish.",
        "image_url": null,
        "abv": 4.7,
        "ibu": 40,
        "target_fg": 1008,
        "target_og": 1044,
        "ebc": 14,
        "srm": 7,
        "ph": 4.2,
        "attenuation_level": 79,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 10,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pilsner",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.16,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 1.5,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "Start",
                    "attribute": "Bitter"
                },
                {
                    "name": "Perle",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "Middle",
                    "attribute": "Flavour"
                },
                {
                    "name": "Perle",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "End",
                    "attribute": "Flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Jamaican jerk chicken wings",
            "Corn dogs",
            "Strawberry ice cream sundae"
        ],
        "brewers_tips": "Keep an eye on your fermentation temperature to ensure you get the crisp notes that are the hallmark of a good pilsner.",
        "contributed_by": "John Jenkman <johnjenkman>"
    }
]

    await getRandomBeer.mockResolvedValueOnce(newBeer)

    render(
      <MemoryRouter>
        <App
        />
      </MemoryRouter>
    )

    let beerButton = screen.getByRole('button', { name: /get me a beer!/i })
    fireEvent.click(beerButton)
    const beerName =  await waitFor(() => screen.getByText("Kingpin"))
    expect(beerName).toBeInTheDocument()
    const beerDescription =  await waitFor(() => screen.getByText("A 4.7% German Pils with light, biscuit and toasty malt character, upon which is built a hop bitterness that provides complexity and a long, dry finish."))
    expect(beerDescription).toBeInTheDocument()
  })

  it.only('Should allow user to select and view favorites', async () => {

    let newBeer = [
    {
        "id": 238,
        "name": "Kingpin",
        "tagline": "21st century lager.",
        "first_brewed": "2016",
        "description": "A 4.7% German Pils with light, biscuit and toasty malt character, upon which is built a hop bitterness that provides complexity and a long, dry finish.",
        "image_url": null,
        "abv": 4.7,
        "ibu": 40,
        "target_fg": 1008,
        "target_og": 1044,
        "ebc": 14,
        "srm": 7,
        "ph": 4.2,
        "attenuation_level": 79,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 10,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pilsner",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.16,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 1.5,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "Start",
                    "attribute": "Bitter"
                },
                {
                    "name": "Perle",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "Middle",
                    "attribute": "Flavour"
                },
                {
                    "name": "Perle",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "End",
                    "attribute": "Flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Jamaican jerk chicken wings",
            "Corn dogs",
            "Strawberry ice cream sundae"
        ],
        "brewers_tips": "Keep an eye on your fermentation temperature to ensure you get the crisp notes that are the hallmark of a good pilsner.",
        "contributed_by": "John Jenkman <johnjenkman>"
    }
]

    await getRandomBeer.mockResolvedValueOnce(newBeer)

    render(
      <MemoryRouter>
        <App
        />
      </MemoryRouter>
    )

    let beerButton = screen.getByRole('button', { name: /get me a beer!/i })
    fireEvent.click(beerButton)
    let foodButton = await waitFor(() => screen.getByRole('button', { name: /sounds great! show me some food that goes with this!/i }))
    fireEvent.click(foodButton)
    screen.debug()
    let favoriteButton = screen.getByRole('button', { name: /add to favorites/i })
    let favoriteViewButton = screen.getByRole('button', { name: /show me my favorites/i })
    fireEvent.click(favoriteButton)
    fireEvent.click(favoriteViewButton)
    expect(screen.getByText("Kingpin")).toBeInTheDocument()

  })
})
