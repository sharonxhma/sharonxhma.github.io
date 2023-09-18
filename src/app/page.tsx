import Nav from "./nav";
import Hero from "./hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-16 font-bai-jamjuree text-black">
      <Nav />
      <Hero />
    </main>
  );
}
