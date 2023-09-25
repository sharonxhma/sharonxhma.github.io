import Nav from "@/_components/nav";
import Hero from "./hero";
import FeaturedWork from "./featured-work";
import Footer from "@/_components/footer";

export default function Home() {
  return (
    <main
      className="p-8 md:p-10 xl:py-12 xl:px-16 font-bai-jamjuree text-black"
      id="top"
    >
      <div className="flex min-h-screen flex-col items-center">
        <Nav />
        <Hero />
      </div>
      <FeaturedWork />
      <div className="mt-20 md:mt-28">
        <Footer />
      </div>
    </main>
  );
}
