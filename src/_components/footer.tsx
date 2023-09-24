import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div className="w-full mt-20 md:mt-28 flex flex-row items-center">
      <span className="mx-auto">
        <p className="-mr-11 text-md md:text-lg font-light text-center">
          Last Updated September 2023
        </p>
      </span>
      <Link
        href="#top"
        scroll={true}
        className="inline-block p-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-500 hover:text-white transition-colors"
      >
        <ChevronUpIcon className="w-7 h-7 stroke-2" />
      </Link>
    </div>
  );
}
