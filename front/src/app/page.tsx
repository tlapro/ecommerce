
import LandingPage from "@/components/landing/LandingPage";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Landing() {

  return (
    <>
    <ThemeProvider>
        <LandingPage />
    </ThemeProvider>
    </>
  );
}
