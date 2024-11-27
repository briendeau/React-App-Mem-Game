import { useState, useEffect } from "react";

function CardGrid({ updateScore, updateHighScore, score, highScore }) {
  const [pokemon, setPokemon] = useState([]);
  const [tempKey, setTempKey] = useState("");

  // helper function shuffle
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Use a temporary variable to swap arr[i] and arr[randomIndex]
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  };

  const handleClick = (e) => {
    console.log("card clicked");
    // when card is click, shuffle the cards and update the state array to a new configuration
    // take pokemon array and randomize the order.
    let copyArr = [...pokemon];
    console.log(`before shuffle + ${JSON.stringify(pokemon)}`);
    shuffleArray(copyArr);
    setPokemon(copyArr);
    console.log(pokemon);

    // if the card clicked is not the same as last one, add +1 to score
    // must use name of pokemon, since index values are shuffled and change.
    // else set highscore to score and score back to 0
    const dataKey = e.target.getAttribute("data-key");
    console.log("Card clicked with key:", dataKey);

    if (dataKey != tempKey) {
      updateScore(score + 1);
      console.log(tempKey);
      setTempKey(dataKey);
      console.log(dataKey);
    }

    if (dataKey == tempKey) {
      alert("Game over, you have clicked this card already!");
      updateScore(0);
    }

    // debug, img and card div give different e.target.attribute values, make sure to allow both clicks.
    // console.log(e.target);

    if (score >= highScore) {
      updateHighScore(highScore + 1);
    }
    // add feature: if gameover show dialog to restart game
  };

  useEffect(() => {
    const pokemonAPI = "https://pokeapi.co/api/v2/pokemon?limit=18";
    try {
      const fetchPokemon = async () => {
        // try {
        const response = await fetch(pokemonAPI);
        const data = await response.json();

        const pokemonData = [];
        for (let pokemon of data.results) {
          let pokeDetails = await fetch(pokemon.url);
          let pokeData = await pokeDetails.json();
          pokemonData.push({
            name: pokeData.name, // name of pokemon
            image: pokeData.sprites.front_default, //pokemon front image
          });
        }
        // console.log(pokemonData); // array data

        // update state with pokemon data
        setPokemon(pokemonData);
      };

      fetchPokemon();
    } catch (error) {
      console.error(error);
    }
  }, []);

  // create a second useEffect for logging the state, don't combine with the fetching logic. SoC.
  useEffect(() => {
    console.log("Score:", score);
    console.log("Highscore:", highScore);
    console.log(tempKey);
  }, [score, highScore]);

  return (
    <div className="card-grid">
      {pokemon.map((poke, index) => (
        <div
          key={index}
          className="card"
          onClick={handleClick}
          data-key={poke.name}
        >
          <img
            src={poke.image}
            alt={poke.name}
            className="card-img"
            data-key={poke.name}
          />
          <h3 className="card-name" data-key={poke.name}>
            {poke.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
