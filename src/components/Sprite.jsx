import { useState, useEffect } from "react";
import getPokemonData from "../getPokemonData";

export default function Sprite({ name }) {
  const [spriteUrl, setSpriteUrl] = useState("");
  useEffect(() => {
    const data = getPokemonData(name);
    setSpriteUrl(data.sprites.front_default);
  }, [name]);
  if (spriteUrl) {
    return <img src={spriteUrl} className="sprite" />;
  } else {
    return null;
  }
}
