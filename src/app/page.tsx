import Nav from "./nav";
import Hero from "./hero";
import Card from "./card";

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

function FeaturedWork() {
  return (
    <div className="mx-36">
      <div className="py-9 flex flex-col items-center gap-y-2.5">
        <div className="h-2	w-80 bg-primary-500"></div>
        <div className="h-2	w-80 bg-primary-500"></div>
        <p className="my-2	text-5xl font-bold tracking-extreme text-center">
          FEATURED WORK
        </p>
        <div className="h-2	w-80 bg-primary-500"></div>
        <div className="h-2	w-80 bg-primary-500"></div>
      </div>
      <div className="mt-32 flex flex-col gap-y-60">
        <Card
          title="Loremipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          contribution="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim"
          img="placeholder"
          techStack={["Lorem", "Ipsum", "Dolor", "Amet"]}
          linkLiveSite="/"
          linkGitHub="/"
        />
        <Card
          title="Loremipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          contribution="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim"
          img="placeholder"
          techStack={["Lorem", "Ipsum", "Dolor"]}
          linkLiveSite="/"
          linkGitHub="/"
        />
        <Card
          title="Loremipsum"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus."
          contribution="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim"
          img="placeholder"
          techStack={["Lorem", "Ipsum", "Dolor", "Amet"]}
          linkDevPost="/"
          linkGitHub="/"
        />
      </div>
    </div>
  );
}
