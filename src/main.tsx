/**
 * main.tsx — Entry point
 *
 * Mounts the App component with prerendering support.
 */

import { hydrate, prerender as ssr } from "preact-iso";
import { App } from "./App";
import "./styles.css";

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app")!);
}

export async function prerender(data: unknown) {
  return await ssr(<App {...(data as object)} />);
}
