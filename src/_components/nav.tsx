import Link from "next/link";

export default function Nav() {
  return (
    <div className="-mt-2 md:-mt-4 w-full flex flex-row justify-between">
      <span className="justify-self-start self-center">
        <Link href="/">
          <p className="text-2l font-bold hover:cursor-pointer hover:text-primary-600">
            SM.
          </p>
        </Link>
      </span>
      <span className="flex flex-row gap-x-6">
        <Link href="/#featured-work">
          <p className="text-2l font-bold p-2 md:p-4 rounded-lg hover:bg-primary-100 hover:cursor-pointer">
            WORK
          </p>
        </Link>
        <Link href="/about">
          <p className="text-2l font-bold p-2 md:p-4 rounded-lg hover:bg-primary-100 hover:cursor-pointer">
            ABOUT ME
          </p>
        </Link>
      </span>
    </div>
  );
}
