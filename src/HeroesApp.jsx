import { AuthProvider } from "./auth";
import { AppRouter } from "./router";

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default HeroesApp;
