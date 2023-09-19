import { Card, Divider } from "@tremor/react";
import Image from "next/image";
import { TechButton, LinkButton } from "./buttons";

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
  return (
    <Card className="p-9">
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
                <LinkButton text="Visit GitHub" icon="code" url={linkGitHub} />
              )}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
