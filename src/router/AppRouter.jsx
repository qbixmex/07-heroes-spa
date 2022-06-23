import { Routes, Route } from "react-router-dom";

import { LoginScreen } from "../auth";
import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={ <LoginScreen /> } />
        <Route path="*" element={ <HeroesRoutes /> } />
      </Routes>
    </>
  );
};
