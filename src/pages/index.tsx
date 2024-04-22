import Banner from "@/components/Banner";
import Products from "@/components/Products";

export default function Home() {
  return (
   <main>
    <div className="max-w-screen-2xl mx-auto">
      <Banner/>
      <Products/>
    </div>
   </main>
  );
}
