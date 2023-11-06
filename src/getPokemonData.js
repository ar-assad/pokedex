import axios from 'axios';
export default async function getPokemonData(name) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
  }
  catch (error) {
    console.error('Error fetching pokemon data: ', error);
  }
}
