"use client";
import WorkCard from "./work-card";
import { Parallax } from "react-scroll-parallax";

export default function FeaturedWork() {
  const title = "FEATURED WORK";

  return (
    <div className="sm:mx-8 md:mx-10 xl:mx-28" id="featured-work">
      <div className="py-9 flex flex-col items-center gap-y-2.5">
        <div className="sm:ml-6 h-6 w-72 sm:w-80 border-y-8 border-primary-500 sm:-skew-x-[10deg]"></div>
        <div className="my-3 text-2xl md:text-3xl xl:text-5xl font-bold tracking-normal md:tracking-widest xl:tracking-extreme text-center flex justify-items-center">
          {title.split("").map((letter, index) => (
            <Parallax
              key={`letter-${index}`}
              translateX={[0, 30 * (index - (title.length - 1) / 2)]}
              className={`hidden sm:inline-block ${
                letter == " " ? "w-4 md:w-5 xl:w-7" : "w-8 md:w-9 xl:w-14"
              }`}
            >
              {letter}
            </Parallax>
          ))}
          <p className="inline-block sm:hidden text-3xl">{title}</p>
        </div>
        <div className="sm:mr-6 h-6 w-72 sm:w-80 border-y-8 border-primary-500 sm:-skew-x-[10deg]"></div>
      </div>
      <div className="mt-32 flex flex-col gap-y-36 xl:gap-y-60">
        <WorkCard
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
        <WorkCard
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
        <WorkCard
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
