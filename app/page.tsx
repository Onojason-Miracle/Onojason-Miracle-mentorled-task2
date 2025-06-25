import Homeimg from "@/components/home";
import Header from "@/components/header";
import Product from "@/components/product";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Homeimg />

      <main className=" main">
        <Header />
        <Product />
      </main>

      <Footer />
    </>
  );
}
