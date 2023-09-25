"use client";
import Socials from "@/_components/socials";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config.js";
const fullConfig = resolveConfig(tailwindConfig);

export default function Info() {
  if (!fullConfig?.theme?.colors) {
    throw new Error("Missing theme colors");
  }

  type ColorConfig = {
    500?: string;
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
    <div className="w-fit pt-20 pb-12 md:py-12 flex flex-col items-center">
      <div
        className="bg-gradient-solid-middle text-7xl sm:text-8xl font-bold text-center"
        style={styleGradient}
      >
        <p className="px-8 md:px-14 xl:px-8 leading-normal">Sharon</p>
        <p className="px-8 md:px-14 xl:px-8 leading-normal">Ma</p>
      </div>
      <Socials />
    </div>
  );
}
