import React, { useState } from "react";
import axios from "axios";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
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
  return (
    <div>
      <button onClick={getJoke}>Joke</button>
      {joke}
    </div>
  );
};

export default Joke;
