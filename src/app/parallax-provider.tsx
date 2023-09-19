"use client";

import { ParallaxProvider as ScrollParallaxProvider } from "react-scroll-parallax";

export default function ParallaxProvider({ children }: { children: any }) {
  return <ScrollParallaxProvider>{children}</ScrollParallaxProvider>;
}
