import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function TechButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="px-4 py-2 rounded border-l-[5px]	border-primary-700 bg-lightgrey text-sm font-medium text-primary-700 shadow-sm hover:cursor-auto"
    >
      {text}
    </button>
  );
}

export function LinkButton({
  text,
  icon,
  url,
}: {
  text: string;
  icon: string;
  url: string;
}) {
  let iconComponent;

  switch (icon) {
    case "link":
      iconComponent = (
        <LinkIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      );
      break;
    case "code":
      iconComponent = (
        <CodeBracketIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      );
      break;
  }

  return (
    <Link href={url} target="_blank">
      <button
        type="button"
        className="px-4 py-2.5 inline-flex items-center gap-x-1.5 rounded border	border-primary-700 text-sm font-medium text-primary-700 shadow-sm hover:bg-primary-300"
      >
        {iconComponent}
        {text}
      </button>
    </Link>
  );
}
