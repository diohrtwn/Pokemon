class PokemonResult extends HTMLElement {
  constructor() {
    super();
    this.resultElement = null;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="pokemon-result">
        <p>Please enter a Pokemon name or ID.</p>
      </div>
    `;
    this.resultElement = this.querySelector('.pokemon-result');
  }

  set result(pokemon) {
    const resultHtml = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <p>ID: ${pokemon.id}</p>
      <p>Type: ${pokemon.types.join(", ")}</p>
      <ul>
        <li>HP: ${pokemon.stats[0].value}</li>
        <li>Attack: ${pokemon.stats[1].value}</li>
        <li>Defense: ${pokemon.stats[2].value}</li>
        <li>Special Attack: ${pokemon.stats[3].value}</li>
        <li>Special Defense: ${pokemon.stats[4].value}</li>
        <li>Speed: ${pokemon.stats[5].value}</li>
      </ul>
    `;
    this.resultElement.innerHTML = resultHtml;
  }

  set error(message) {
    const errorHtml = `<div class="pokemon-error"><p>${message}</p></div>`;
    this.resultElement.innerHTML = errorHtml;
  }
}

customElements.define('pokemon-result', PokemonResult);
