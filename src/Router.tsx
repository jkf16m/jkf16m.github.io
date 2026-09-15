/**
 * Router.tsx — Client-side router
 *
 * Uses preact-iso for routing with prerendering support.
 */

import { LocationProvider, Router as IsoRouter, Route } from "preact-iso/router";
import { Home } from "./home";
import { Budget } from "./budget";

export function Router() {
  return (
    <LocationProvider>
      <IsoRouter>
        <Route path="/" component={Home} />
        <Route path="/budget" component={Budget} />
      </IsoRouter>
    </LocationProvider>
  );
}
