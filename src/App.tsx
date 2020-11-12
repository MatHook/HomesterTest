import React, { useState } from "react";
import Joke from "./components/Joke";
import Jokes from "./components/Jokes";
import Legends from "./components/Legends";
import "./styles.css";

const App = () => {
  const [list, setList] = useState(true);
  return (
    <div className="App">
      <h1>&lt;InCodeWeTrust /&gt;</h1>
      <h2>Клуб Фронтенд Джентельменов</h2>
      {list ? (
        <div>
          <button onClick={() => setList(!list)}>Best Jokes</button>
          <Joke />
          <Jokes />
        </div>
      ) : (
        <div>
          <button onClick={() => setList(!list)}>Get new Jokes</button>
          <Legends />
        </div>
      )}
    </div>
  );
};

export default App;
