"use client";

import Seller from "@/components/sections/BestSeller/BestSeller";
import Header from "@/components/layout/Header/Header";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import Footer from "@/components/layout/Footer/Footer";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";

export default function PopularPage() {
  return (
    <>
      {/* header section */}
      <Header />

      {/* product details section */}
      <Box sx={{ flexGrow: 1 }}>
        <Breadcrumb title="Our Best Products" />
        <Box sx={{ backgroundColor: "#F3F4F6", pt: 2 }}>
          <Seller data={cardData} />
        </Box>
      </Box>

      {/* footer section */}
      <Footer />
    </>
  );
}

const cardData = [
  {
    id: 1,
    image: Fitness,
    description: "This is the finess runner machine.",
    price: "$200",
    priceCut: "$150",
  },
  {
    id: 2,
    image: GrayLCD,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 3,
    image: Iphone,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 4,
    image: Juicer,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 5,
    image: Monitor,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 6,
    image: Screen,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
];
