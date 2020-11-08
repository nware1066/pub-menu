import { getRandomBeer } from './apiCalls'


export const formatBeers = async () => {
  const response = await getRandomBeer()

  let currentBeer;
  const beerData = response[0];

   currentBeer = {
      id: beerData.id,
      name: beerData.name,
      tagline: beerData.tagline,
      description: beerData.description,
      foods: beerData.food_pairing,
    }
  return currentBeer;
}
