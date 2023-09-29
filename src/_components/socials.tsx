import { SocialIcon } from "react-social-icons";

export default function Socials() {
  return (
    <div className="mt-12 flex flex-row gap-x-12">
      <span className="transition ease-in-out hover:-translate-y-1">
        <SocialIcon
          network="linkedin"
          bgColor="black"
          style={{ height: 25, width: 25 }}
          url="https://www.linkedin.com/in/sharon-ma-8248a7213/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </span>
      <span className="transition ease-in-out hover:-translate-y-1">
        <SocialIcon
          network="github"
          bgColor="black"
          style={{ height: 25, width: 25 }}
          url="https://github.com/sharonm6"
          target="_blank"
          rel="noopener noreferrer"
        />
      </span>
      <span className="transition ease-in-out hover:-translate-y-1">
        <SocialIcon
          network="email"
          bgColor="black"
          style={{ height: 25, width: 25 }}
          url="mailto:sharonxhma@gmail.com"
        />
      </span>
    </div>
  );
}
