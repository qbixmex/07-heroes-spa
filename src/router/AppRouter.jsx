import { Routes, Route } from "react-router-dom";

import { LoginScreen } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PublicRoutes, PrivateRoutes } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoutes>
            <LoginScreen />
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
