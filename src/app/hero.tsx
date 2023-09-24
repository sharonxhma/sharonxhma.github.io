"use client";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { SocialIcon } from "react-social-icons";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export default function Hero() {
  const TYPE_ANIM_PAUSE = 1000;
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

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

  const ref = useRef<HTMLSpanElement>(null);

  return (
    <div className="md:mx-28 lg:mx-52 xl:mx-72 2xl:mx-96 my-auto flex flex-col items-center">
      <div className="-mt-20 flex flex-col items-center">
        <p
          className="px-4 text-5xl sm:text-6xl leading-tight font-bold bg-gradient-solid-half"
          style={styleGradient}
        >
          Sharon Ma
        </p>

        <span className="mt-6 flex flex-col leading-loose text-center text-lg font-normal">
          <TypeAnimation
            ref={ref}
            sequence={[
              `Lorem Ipsum!\nI'm a lorem`,
              TYPE_ANIM_PAUSE,
              `Lorem Ipsum!\nI'm a ipsum`,
              TYPE_ANIM_PAUSE,
              `Lorem Ipsum!\nI'm a dolor`,
              TYPE_ANIM_PAUSE,
              `Lorem Ipsum!\nI'm a lorem / ipsum / dolor.\nI'm currently lorem`,
              TYPE_ANIM_PAUSE,
              `Lorem Ipsum!\nI'm a lorem / ipsum / dolor.\nI'm currently ipsum`,
              TYPE_ANIM_PAUSE,
              `Lorem Ipsum!\nI'm a lorem / ipsum / dolor.\nI'm currently dolor.`,
              TYPE_ANIM_PAUSE,
              `Lorem Ipsum!\nI'm a lorem / ipsum / dolor.\nI'm currently lorem / ipsum / dolor.`,
              (el) => {
                if (el) el.classList.remove(CURSOR_CLASS_NAME);
              },
            ]}
            speed={50}
            deletionSpeed={75}
            style={{ whiteSpace: "pre-line" }}
            cursor={false}
            className={CURSOR_CLASS_NAME}
          />
        </span>

        <div className="mt-12 flex flex-row gap-x-12">
          <span className="transition ease-in-out hover:-translate-y-1">
            <SocialIcon
              network="linkedin"
              bgColor="black"
              style={{ height: 25, width: 25 }}
            />
          </span>
          <span className="transition ease-in-out hover:-translate-y-1">
            <SocialIcon
              network="github"
              bgColor="black"
              style={{ height: 25, width: 25 }}
            />
          </span>
          <span className="transition ease-in-out hover:-translate-y-1">
            <SocialIcon
              network="email"
              bgColor="black"
              style={{ height: 25, width: 25 }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
