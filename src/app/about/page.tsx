import Nav from "@/_components/nav";
import Info from "./info";
import Footer from "@/_components/footer";

export default function About() {
  return (
    <main
      className="p-8 md:p-10 xl:py-12 xl:px-16 font-bai-jamjuree text-black"
      id="top"
    >
      <Nav />
      <div className="sm:-mt-10 xl:-mt-24 xl:mx-9 min-h-screen xl:min-h-screen flex flex-col place-content-center">
        <div className="md:p-12 flex flex-col xl:flex-row gap-x-20 items-center">
          <Info />
          <Details />
        </div>
      </div>
      <div className="mt-14 md:mt-5">
        <Footer />
      </div>
    </main>
  );
}

function Details() {
  return (
    <div className="w-full mt-4 xl:-mt-6 xl:pr-8 xl:pt-16 text-xl text-center flex flex-col gap-y-7">
      <p>{`Hello there!`}</p>
      <p>{`I'm a fourth-year Computer Science major specializing in Intelligent Systems at the University of California, Irvine.`}</p>
      <p>{`Since high school, I have been committed to advancing educational experiences, beginning from when I volunteered to teach and develop curriculum for underserved students. This passion led me to assist in courses promoting critical thinking through educational software and to join Daplab as a web development research assistant, where I contributed to the development of a data analytics platform that empowers math educators.`}</p>
      <p>{`Currently, I'm a Community Outreach Co-Chair at WICS and working on an AI-enhanced platform that aims to support youths' occupational identities.`}</p>
    </div>
  );
}
