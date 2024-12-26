"use strict";

async function fetchData() {
  try {
    const searchValue = document.getElementById("searchPokemon").value;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchValue}`
    );

    if (!response.ok) {
      throw new Error("could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.style.display = "block";

    imgElement.src = pokemonSprite;

    // console.log(data);
  } catch (error) {
    console.error(error);
  }
}
