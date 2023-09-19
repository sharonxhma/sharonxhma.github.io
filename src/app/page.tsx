import Nav from "./nav";
import Hero from "./hero";
import FeaturedWork from "./featured-work";

export default function Home() {
  return (
    <main className="py-12 px-16 font-bai-jamjuree text-black">
      <div className="flex min-h-screen flex-col items-center">
        <Nav />
        <Hero />
      </div>
      <FeaturedWork />
      <p className="mt-36 text-xl	font-light text-center">
        Last Updated September 2023
      </p>
    </main>
  );
}
