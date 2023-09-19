"use client";
import WorkCard from "./work-card";
import { Parallax } from "react-scroll-parallax";

export default function FeaturedWork() {
  const title = "FEATURED WORK";

  return (
    <div className="mx-36">
      <div className="py-9 flex flex-col items-center gap-y-2.5">
        <div className="ml-6 h-6 w-80 border-y-8 border-primary-500 -skew-x-[10deg]"></div>
        <div className="my-3 text-5xl font-bold tracking-extreme text-center flex justify-items-center">
          {title.split("").map((letter, index) => (
            <Parallax
              key={`letter-${index}`}
              translateX={[0, 30 * (index - (title.length - 1) / 2)]}
              className={`inline-block ${letter == " " ? "w-7" : "w-14"}`}
            >
              {letter}
            </Parallax>
          ))}
        </div>
        <div className="mr-6 h-6 w-80 border-y-8 border-primary-500 -skew-x-[10deg]"></div>
      </div>
      <div className="mt-32 flex flex-col gap-y-60">
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
