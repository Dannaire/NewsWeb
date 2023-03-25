import Heads from "@/Components/head";
import Nav from "../Components/nav";
import Card from "../Components/card";
import Hero from "../Components/hero";
import Blogsection from "../Components/blogsection";
import Bloglink from "../Components/bloglink";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <>
      <Heads />
      <Nav />
      <Hero />
      <Card />
      <Blogsection />
      <Bloglink />
      <Footer />
    </>
  );
}
