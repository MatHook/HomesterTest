import React, { useEffect, useState } from "react";
import axios from "axios";

const Legends = () => {
  const [jokes, setJokes] = useState([
    "An elephant never forgets Chuck Norris.",
  ]);

  const resetJokes = () => {
    setJokes([]);
  };

  const addJoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        console.log(res.data.value);
        setJokes([...jokes, res.data.value]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDeleteJoke = (index: any) => {
    setJokes(jokes.filter(j => j !== index))
  }

  useEffect(() => {
    if (jokes.length >= 10) {
      jokes.shift();
    }
  });

  return (
    <div>
      Best of the Best
      <ol>
        {jokes.map((joke) => (
          <li key={joke}>{joke}<button onClick={() => {onDeleteJoke(joke)}}>delete</button></li>
        ))}
      </ol>
      <button onClick={addJoke}>Add random joke</button>
      <button onClick={resetJokes}>Reset jokes</button>
    </div>
  );
};

export default Legends;
