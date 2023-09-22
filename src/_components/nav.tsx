export default function Nav() {
  return (
    <div className="w-full flex flex-row justify-between">
      <span className="justify-self-start">
        <p className="text-2l font-bold">SM.</p>
      </span>
      <span className="flex flex-row gap-x-6">
        <p className="text-2l font-bold">WORK</p>
        <p className="text-2l font-bold">ABOUT ME</p>
      </span>
    </div>
  );
}
