import About from "./components/About";
import Cv from "./components/Cv";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
    </div>
  );
}
