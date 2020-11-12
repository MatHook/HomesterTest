import React, { useState, useEffect } from "react";
import axios from "axios";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const getSimpleJoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        console.log(res.data.value);
        setJoke(res.data.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getJokes = () => {
    setLoading(true)
    setInterval(() => {
      getSimpleJoke();
    }, 3000);
  };

  const stopLoop = () => {
    setLoading(false)
  };

  return (
    <div>
      {loading ? (
        <button onClick={getJokes}>Jokes Loop</button>
      ) : (
        <button onClick={stopLoop}>Stop</button>
      )}
      {joke}
    </div>
  );
};

export default Jokes;
