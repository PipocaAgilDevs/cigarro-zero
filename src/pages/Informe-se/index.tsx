import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import TitleSection from "./modules/TitleSection/index";
import CardSection from "./modules/CardSection";
import { Banner } from "./modules/Banner";

export default function InformeSe() {
  return (
    <Layout>
      <Banner />
      <TitleSection />
      <Carousel />
      <CardSection />
    </Layout>
  );
}
