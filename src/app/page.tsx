import Nav from "../_components/nav";
import Hero from "./hero";
import FeaturedWork from "./featured-work";

export default function Home() {
  return (
    <main className="p-8 md:p-10 xl:py-12 xl:px-16 font-bai-jamjuree text-black">
      <div className="flex min-h-screen flex-col items-center">
        <Nav />
        <Hero />
      </div>
      <FeaturedWork />
      <p className="mt-20 md:mt-28 text-md md:text-lg font-light text-center">
        Last Updated September 2023
      </p>
    </main>
  );
}
