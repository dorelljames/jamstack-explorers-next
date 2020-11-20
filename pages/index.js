import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    router.push("/blog");
  };

  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a href="#">Blog</a>
      </Link>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}

export default Home;
