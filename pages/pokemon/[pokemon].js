import Head from "next/head";
import styles from "./pokemon.module.css";

function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
      </Head>
      <div className={styles.container}>
        Welcome, Pokemon!
        <img src={pokemon.sprites.back_default} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();

  let paths = pokemon.results.map((p) => {
    return `/pokemon/${p.name}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}

export default Pokemon;
