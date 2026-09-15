/**
 * main.tsx — Entry point
 *
 * Prerendered HTML with client-side hydration for interactivity.
 */

import { hydrate, prerender as ssr } from "preact-iso";
import { App } from "./App";
import "./styles.css";

if (typeof window !== "undefined") {
  hydrate(<App />);
}

export async function prerender(data: unknown) {
  return await ssr(<App {...(data as object)} />);
}
