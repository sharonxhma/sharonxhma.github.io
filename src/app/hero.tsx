import { SocialIcon } from "react-social-icons";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export default function Hero() {
  if (!fullConfig?.theme?.colors) {
    throw new Error("Missing theme colors");
  }

  type ColorConfig = {
    500?: string;
    700?: string;
  };
  type ExtendedCSSProperties = React.CSSProperties & {
    "--gradient-color-start"?: string;
    "--gradient-color-end"?: string;
  };

  const whiteColor = fullConfig.theme.colors.white as string;
  const primaryColor = (fullConfig.theme.colors.primary as ColorConfig)["500"];
  const styleGradient: ExtendedCSSProperties = {
    "--gradient-color-start": whiteColor,
    "--gradient-color-end": primaryColor,
  };

  return (
    <div className="mx-80 my-auto">
      <div className="-mt-6 flex flex-col items-center">
        <p
          className="px-4 text-6xl leading-tight font-bold bg-gradient-solid-half"
          style={styleGradient}
        >
          Sharon Ma
        </p>

        <span className="mt-6 flex flex-col gap-y-6 text-center text-lg font-normal">
          <p>Lorem, ipsum!</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum soci
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium qui
          </p>
        </span>

        <div className="mt-12 flex flex-row gap-x-12">
          <SocialIcon
            network="linkedin"
            bgColor="black"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            network="github"
            bgColor="black"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            network="email"
            bgColor="black"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>
    </div>
  );
}
