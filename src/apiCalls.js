export const getRandomBeer = () => {
  return fetch('https://api.punkapi.com/v2/beers/random')
  .then(response => response.json())
  .catch(error => {
    console.log('error', error)
  })
}
