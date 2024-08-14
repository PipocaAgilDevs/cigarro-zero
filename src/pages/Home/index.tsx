import EntendaTabagismoSection from "./modules/EntendaTabagismo";
import FindHelp from "./modules/FindHelp";
import HeroSection from "./modules/Hero";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EntendaTabagismoSection />
      <FindHelp />
    </>
  );
}
