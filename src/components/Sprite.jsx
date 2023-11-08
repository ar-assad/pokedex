import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Sprite.css";
import loadingGif from "../assets/loading.gif";

function Loading() {
  return <img src={loadingGif} alt="loading" />;
}

export default function Sprite({ name, url }) {
  const [spriteUrl, setSpriteUrl] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function fetchSprite() {
      try {
        const response = await axios.get(url);
        setSpriteUrl(response.data.sprites.front_default);
      } catch {
        (error) => setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSprite();
  }, [url]);

  if (error) return <p>Network error...</p>;
  if (isLoading) return <Loading />;
  return <img src={spriteUrl} alt={name} className="sprite" />;
}

Sprite.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
};