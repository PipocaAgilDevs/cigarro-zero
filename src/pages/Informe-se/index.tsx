import Carousel from "../../components/Carousel";
import TitleSection from "./modules/TitleSection/index";
import CardSection from "./modules/CardSection";
import { Banner } from "./modules/Banner";

export default function InformeSe() {
  return (
    <>
      <Banner />
      <TitleSection />
      <Carousel />
      <CardSection />
    </>
  );
}
