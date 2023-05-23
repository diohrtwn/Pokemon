const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
  const searchValue = searchBox.value;
  if (searchValue) {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
        types: data.types.map((type) => type.type.name),
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      };
      displayResult(pokemon);
    } catch (error) {
      displayError(`Could not find Pokemon "${searchValue}".`);
    }
  } else {
    displayError("Please enter a Pokemon name or ID.");
  }
});

const displayResult = (pokemon) => {
  const resultHtml = `<img src="${pokemon.image}" alt="${pokemon.name}"> <h2>${
    pokemon.name
  }</h2> <p>ID: ${pokemon.id}</p> <p>Type: ${pokemon.types.join(
    ", "
  )}</p> <ul> <li>HP: ${pokemon.stats[0].value}</li> <li>Attack: ${
    pokemon.stats[1].value
  }</li> <li>Defense: ${pokemon.stats[2].value}</li> <li>Special Attack: ${
    pokemon.stats[3].value
  }</li> <li>Special Defense: ${pokemon.stats[4].value}</li> <li>Speed: ${
    pokemon.stats[5].value
  }</li> </ul>`;
  resultDiv.innerHTML = resultHtml;
};

const displayError = (message) => {
  const resultHtml = `<p>${message}</p>`;
  resultDiv.innerHTML = resultHtml;
};
