import LandingPage from "./LandingPage";
import ThemeSelector from "./elements/ThemeSelector"

export default function Layout() {
  return (
    <>
      <div className="flex flex-col justify-start h-screen w-screen pt-6 px-8 bg-dayTheme-background dark:bg-nightTheme-background">
        <ThemeSelector />
        <LandingPage />
      </div>
    </>
  );
}
