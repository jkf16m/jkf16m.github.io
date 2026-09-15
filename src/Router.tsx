/**
 * Router.tsx — Client-side router
 *
 * Uses preact-iso for routing with prerendering support.
 */

import { LocationProvider, Router as IsoRouter, Route } from "preact-iso/router";
import { Home } from "./home";

export function Router() {
  return (
    <LocationProvider>
      <IsoRouter>
        <Route path="/" component={Home} />
      </IsoRouter>
    </LocationProvider>
  );
}
