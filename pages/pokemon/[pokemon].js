import Head from "next/head";
import styles from "./pokemon.module.css";

function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name || "No pokemon found!"}</title>
      </Head>
      <div className={styles.container}>
        <span>
          {(pokemon && pokemon?.name) || "Oops, can't find your pokemon."}
        </span>
        <img src={pokemon?.sprites?.back_default} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );
  let pokemon = null;

  try {
    pokemon = await res.json();
  } catch (err) {
    // error
  }

  return {
    props: {
      pokemon,
    },
  };
}

export default Pokemon;
