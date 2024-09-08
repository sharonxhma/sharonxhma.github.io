"use client";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Socials from "@/_components/socials";

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
  const [line, setLine] = useState(0);
  const [scrollFull, setScrollFull] = useState(false);

  useEffect(() => {
    const detectPageScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrollFull(true);
        document.removeEventListener("scroll", detectPageScroll);
      }
    };
    document.addEventListener("scroll", detectPageScroll);
  }, [scrollFull]);

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
          {scrollFull ? (
            <>
              <p>{`Hello there!`}</p>
              <p>{`I’m a software developer / web development research assistant @ Daplab / Community Outreach Co-Chair @ WICS / fourth-year computer science major @ UCI.`}</p>
              <p>{`I’m currently working on an AI-augmented career exploration platform for youths.`}</p>
            </>
          ) : (
            <>
              <TypeAnimation
                ref={ref}
                sequence={[
                  `Hello there!`,
                  (el) => {
                    if (el) {
                      el.classList.remove(CURSOR_CLASS_NAME);
                      setLine((prev) => prev + 1);
                    }
                  },
                ]}
                speed={60}
                deletionSpeed={80}
                style={{ whiteSpace: "pre-line" }}
                cursor={false}
                className={CURSOR_CLASS_NAME}
              />
              {line == 1 && (
                <TypeAnimation
                  ref={ref}
                  sequence={[
                    `I’m a software developer`,
                    TYPE_ANIM_PAUSE,
                    `I’m a web development research assistant @ Daplab`,
                    TYPE_ANIM_PAUSE,
                    `I’m a Community Outreach Co-Chair @ WICS`,
                    TYPE_ANIM_PAUSE,
                    `I’m a fourth-year computer science major @ UCI`,
                    TYPE_ANIM_PAUSE,
                    `I’m currently working on an AI-augmented career exploration platform for youths`,
                    TYPE_ANIM_PAUSE,
                    ``,
                    (el) => {
                      if (el) {
                        el.classList.remove(CURSOR_CLASS_NAME);
                        setLine((prev) => prev + 1);
                      }
                    },
                  ]}
                  speed={60}
                  deletionSpeed={80}
                  style={{ whiteSpace: "pre-line" }}
                  cursor={false}
                  className={CURSOR_CLASS_NAME}
                />
              )}
              {line == 2 && (
                <TypeAnimation
                  ref={ref}
                  sequence={[
                    `I’m a software developer / web development research assistant @ Daplab / Community Outreach Co-Chair @ WICS / fourth-year computer science major @ UCI.\nI’m currently working on an AI-augmented career exploration platform for youths.`,
                    (el) => {
                      if (el) el.classList.remove(CURSOR_CLASS_NAME);
                    },
                  ]}
                  speed={85}
                  deletionSpeed={80}
                  style={{ whiteSpace: "pre-line" }}
                  cursor={false}
                  className={CURSOR_CLASS_NAME}
                />
              )}
            </>
          )}
        </span>
        <Socials />
      </div>
    </div>
  );
}
