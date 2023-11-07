import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import "./Sprite.css";
import loadingGif from "../assets/loading.gif";

function Loading() {
  return <img src={loadingGif} alt="loading" />;
}

export default function Sprite({ name }) {
  const [spriteUrl, setSpriteUrl] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function fetchSprite() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setSpriteUrl(response.data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching pokemon sprite: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSprite();
  }, [name]);

  if (isLoading) {
    return <Loading />;
  } else if (spriteUrl) {
    return <img src={spriteUrl} className="sprite" alt={name} />;
  } else {
    return null;
  }
}

Sprite.propTypes = {
  name: PropTypes.string.isRequired,
};