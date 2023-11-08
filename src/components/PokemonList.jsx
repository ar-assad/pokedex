import { useState, useEffect } from "react";
import axios from "axios";
import Sprite from "./Sprite";
import "./PokemonList.css";
import { Link } from "react-router-dom";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=25"
        );
        const data = response.data;
        setPokemonData(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }
    fetchPokemonList();
  }, []);

  return (
    <div>
      <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`} className="link">
              <p>{pokemon.name}</p>{" "}
              <Sprite name={pokemon.name} url={pokemon.url} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="buttons">
        {prevPage && (
          <button onClick={() => fetchMorePokemon(prevPage)}>Previous</button>
        )}
        {nextPage && (
          <button onClick={() => fetchMorePokemon(nextPage)}>Next</button>
        )}
      </div>
    </div>
  );

  async function fetchMorePokemon(url) {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPokemonData(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }
}
