import { Routes, Route } from "react-router-dom";

import { LoginScreen } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PublicRoutes, PrivateRoutes } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* ALTERNATIVE WAY */}
        <Route path="login/*" element={
          <PublicRoutes>
            <Routes>
              <Route path="*" element={<LoginScreen />} />
            </Routes>
          </PublicRoutes>
        } />

        <Route path="*" element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        } />
      </Routes>
    </>
  );
};
