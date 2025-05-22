import About from "./components/About";
import Head from "next/head";

import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-dvh">
        <Header></Header>
        <Hero></Hero>
      </div>
      <About></About>
    </div>
  );
}
