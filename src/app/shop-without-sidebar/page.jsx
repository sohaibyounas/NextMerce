import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import SamrtWatch from "@/assets/newarrivals/smartwatch.png";
import Tablet from "@/assets/newarrivals/tablet.png";
import Seller from "../components/BestSeller/page.jsx";

export default function Shopslider() {
  return (
    <>
      <Seller data={cardData} />
    </>
  );
}

// images array
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
  {
    id: 7,
    image: SamrtWatch,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 8,
    image: Tablet,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
];
