import { useState, useEffect } from "react";

function CardGrid() {
  const [pokemon, setPokemon] = useState([]);

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

  // console.log(pokemon);
  return (
    <div className="card-grid">
      {pokemon.map((poke, index) => (
        <div key={index} className="card">
          <img src={poke.image} alt={poke.name} className="card-img" />
          <h3 className="card-name">{poke.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
