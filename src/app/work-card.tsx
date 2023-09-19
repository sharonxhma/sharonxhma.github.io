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
        entry.target.style.opacity = entry.intersectionRatio;

        if (entry.intersectionRatio > 0.5) setIsFocusSection(true);
        else setIsFocusSection(false);
      });
    };
    const options = {
      root: null,
      threshold: [0.2, 0.7, 1],
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
        className={`p-9 transition-shadow ease-out duration-500 ${
          isFocusSection && "shadow-lg"
        } transition-transform ease-in-out hover:scale-105	`}
      >
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-col">
            <p className="text-4xl font-bold">{title}</p>
            <p className="mt-5 text-xl font-normal">{description}</p>
            <p className="mt-3.5 text-xl font-normal">{contribution}</p>
          </div>
          <Image
            src={`/images/${img}.png`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[459px] h-fit"
            alt={img}
          />
        </div>
        <div className="mt-7">
          <div className="flex flex-row gap-x-8">
            {techStack.map((tech) => (
              <TechButton text={tech} key={tech} />
            ))}
          </div>
          {(linkLiveSite || linkDevPost || linkGitHub) && (
            <>
              <Divider className="mt-6 rounded-sm h-0.5 bg-gray-200" />
              <div className="mt-6 flex flex-row gap-x-8">
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
