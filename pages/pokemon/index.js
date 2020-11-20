function PokemonSearch() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit -> e.currentTarget", e.target);

    const { pokemon } = e.target.elements;

    window.location.href = `/pokemon/${pokemon.value}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon" />
      <button type="sumbmit">Search Pokemon</button>
    </form>
  );
}

export default PokemonSearch;
