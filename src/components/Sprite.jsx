import { useState, useEffect } from "react";
import axios from "axios";

export default function Sprite({ name }) {
  const [spriteUrl, setSpriteUrl] = useState("");
  useEffect(() => {
    async function fetchSprite() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setSpriteUrl(response.data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching pokemon sprite: ", error);
      }
    }
    fetchSprite();
  }, [name]);
  if (spriteUrl) {
    return <img src={spriteUrl} className="sprite" />;
  } else {
    return null;
  }
}
