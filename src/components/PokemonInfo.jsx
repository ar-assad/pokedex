import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PokemonInfo() {
  const { name } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setData(response.data);
      } catch {
        (error) => setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonData();
  }, [name]);

  if (error) return <p>Network error...</p>;
  if (isLoading) return <p>Loading...</p>;
  return <h1>{data.id} {data.name}</h1>;
}
