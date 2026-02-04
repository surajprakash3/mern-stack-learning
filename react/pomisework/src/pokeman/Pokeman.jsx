import { useState, useEffect } from "react";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())
      .then((data) => {
        // 🔹 fetch details of each pokemon
        return Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        );
      })
      .then((allData) => {
        setPokemonData(allData);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("pokemon", pokemonData);

  return (
    <div>
      <h2>Pokemon API Fetch</h2>

      {pokemonData.map((poke) => (
        <div key={poke.id}>
          <h4>{poke.name}</h4>
          <img src={poke.sprites.front_default} alt={poke.name} />
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
