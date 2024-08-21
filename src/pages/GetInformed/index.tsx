import Carousel from "../../components/Carousel";
import CardSection from "./components/CardContents";
import { Header } from "./components/Header";
import TextCardContents from "./components/TextCardContents/index";

export default function InformeSe() {
  return (
    <>
      <Header />
      <TextCardContents />
      <Carousel />
      <CardSection />
    </>
  );
}
