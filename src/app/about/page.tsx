import Nav from "@/_components/nav";
import Info from "./info";
import Footer from "@/_components/footer";

export default function About() {
  return (
    <main
      className="p-8 md:p-10 xl:py-12 xl:px-16 font-bai-jamjuree text-black"
      id="top"
    >
      <Nav />
      <div className="sm:-mt-10 xl:-mt-24 xl:mx-9 min-h-screen xl:min-h-screen flex flex-col place-content-center">
        <div className="md:p-12 flex flex-col xl:flex-row gap-x-20 items-center">
          <Info />
          <Details />
        </div>
      </div>
      <div className="mt-14 md:mt-5">
        <Footer />
      </div>
    </main>
  );
}

function Details() {
  return (
    <div className="w-full mt-4 xl:-mt-6 xl:pr-8 xl:pt-16 text-xl text-center flex flex-col gap-y-7">
      <p>{`Lorem Ipsum!`}</p>
      <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</p>
      <p>{`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
      <p>{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}</p>
    </div>
  );
}
