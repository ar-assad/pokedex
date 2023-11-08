import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PokeCard from "./info_components/PokeCard";
import Stats from "./info_components/Stats";
import "./PokemonInfo.css";

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
  return (
    <div className="info">
      <div className="header">
        <h1>Pokémon Info</h1>
        <Link to="/">Home</Link>
      </div>
      <PokeCard data={data} className="card" />
      <Stats data={data} className="stats" />
    </div>
  );
}
