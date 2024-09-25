import Carousel from "./components/Carousel/Carousel";
import Trivia from "./components/Trivia/Trivia";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import { Divider } from "@nextui-org/react";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-hidden bg-gradient-radial from-black via-stone-950 to-stone-900">
      <Carousel />
      <Trivia />
      <Divider className="m-4 flex-1 mx-auto w-1/2 bg-white" />
      <Services />
      <Catalog />
      <Footer />
    </main>
  );
}
