import Categories from "@/components/Categories";
import HeroSlider from "@/components/HeroSlider";
import Products from "@/components/Products";
import Wrapper from "@/components/wrapper";
import Poster from "@/components/Poster";
// import Insta from "@/components/Insta";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery ";

export default function Home() {
  return (
    <main className="h-[100%]">
      <HeroSlider />
      <Categories />
      <section>
        <Poster />
        <Wrapper className={`max-w-[1860px]`}>
          <Products />
        </Wrapper>
      </section>
      <section>
        <Poster />
        <Wrapper className={`max-w-[1860px]`}>
          <Products />
        </Wrapper>
      </section>
      <section>
        <Poster />
        <Wrapper className={`max-w-[1860px]`}>
          <Products />
        </Wrapper>
      </section>
      <Testimonial />
      <Gallery />
    </main>
  );
}
