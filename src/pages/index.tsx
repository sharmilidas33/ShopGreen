import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main>
    <Header/>
    <BottomHeader/>
   </main>
  );
}
