import Carousel from "../../components/Carousel";
import TextCardContents from "./components/TextCardContents/index";
import CardSection from "./components/CardContents";
import { Header } from "./components/Header";

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
