/**
 * main.tsx — Entry point
 *
 * Pure static prerendering. No client-side hydration.
 */

import { prerender as ssr } from "preact-iso";
import { App } from "./App";
import "./styles.css";

export async function prerender(data: unknown) {
  return await ssr(<App {...(data as object)} />);
}
