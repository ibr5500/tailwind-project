import Head from "next/head";
import MovieSearch from "./components/MovieSearch";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie database</title>
        <meta name="description" content="a simple movie database" />
      </Head>
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Movie database</h1>
        <MovieSearch />
      </main>
    </div>
  );
};

export default Home;
