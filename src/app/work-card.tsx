import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, Divider } from "@tremor/react";
import { TechButton, LinkButton } from "./buttons";

function FadeSection({
  children,
  setIsFocusSection,
}: {
  children: any;
  setIsFocusSection: Dispatch<SetStateAction<boolean>>;
}) {
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const callback = (entries: any[]) => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > 0.6) entry.target.style.opacity = 1;
        else entry.target.style.opacity = entry.intersectionRatio;

        if (entry.intersectionRatio > 0.5) setIsFocusSection(true);
        else setIsFocusSection(false);
      });
    };
    const options = {
      root: null,
      threshold: [0.1, 0.3, 0.6, 1],
    };

    const observer = new IntersectionObserver(callback, options);
    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={domRef}
      className="transition-opacity ease-in-out duration-300"
    >
      {children}
    </section>
  );
}

export default function WorkCard({
  title,
  description,
  contribution,
  img,
  techStack,
  linkLiveSite = "",
  linkDevPost = "",
  linkGitHub = "",
}: {
  title: string;
  description: string;
  contribution: string;
  img: string;
  techStack: string[];
  linkLiveSite?: string;
  linkDevPost?: string;
  linkGitHub?: string;
}) {
  const [isFocusSection, setIsFocusSection] = useState(false);

  return (
    <FadeSection setIsFocusSection={setIsFocusSection}>
      <Card
        className={`p-6 xl:p-9 transition-shadow ease-out duration-500 ${
          isFocusSection && "shadow-md"
        } transition-transform ease-in-out hover:scale-[1.02] xl:hover:scale-105 `}
      >
        <div className="flex flex-col gap-y-3 xl:flex-row xl:gap-x-8">
          <div className="order-2 xl:order-1 flex flex-col">
            <p className="text-2xl md:text-3xl xl:text-4xl font-bold">
              {title}
            </p>
            <span className="text-sm md:text-lg xl:text-lg 2xl:text-xl font-normal">
              <p className="mt-3.5 md:mt-5">{description}</p>
              <p className="mt-3 md:mt-3.5">{contribution}</p>
            </span>
          </div>
          <Image
            src={`/images/${img}.png`}
            width="0"
            height="0"
            sizes="100vw"
            className="order-1 md:order-2 md:my-2 xl:my-0 w-96 xl:w-6/12 2xl:w-[459px] h-fit flex flex-col justify-self-center self-center"
            alt={img}
          />
        </div>
        <div className="mt-4 xl:mt-7">
          <div className="flex flex-row flex-wrap gap-y-4 gap-x-4 md:gap-x-6 xl:gap-x-8">
            {techStack.map((tech) => (
              <TechButton text={tech} key={tech} />
            ))}
          </div>
          {(linkLiveSite || linkDevPost || linkGitHub) && (
            <>
              <Divider className="my-4 xl:mt-6 rounded-sm h-0.5 bg-gray-200" />
              <div className="mt-0 xl:mt-6 flex flex-row flex-wrap gap-y-4 gap-x-4  md:gap-x-6 xl:gap-x-8">
                {linkLiveSite && (
                  <LinkButton
                    text="Visit Live Site"
                    icon="link"
                    url={linkLiveSite}
                  />
                )}
                {linkDevPost && (
                  <LinkButton
                    text="Visit Devpost"
                    icon="link"
                    url={linkDevPost}
                  />
                )}
                {linkGitHub && (
                  <LinkButton
                    text="Visit GitHub"
                    icon="code"
                    url={linkGitHub}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </Card>
    </FadeSection>
  );
}
