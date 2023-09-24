import Nav from "@/_components/nav";
import Footer from "@/_components/footer";

export default function About() {
  return (
    <main
      className="p-8 md:p-10 xl:py-12 xl:px-16 font-bai-jamjuree text-black"
      id="top"
    >
      <div className="flex flex-col items-center">
        <Nav />
        <div className="my-24">ABOUT ME PAGE</div>
        <Footer />
      </div>
    </main>
  );
}
