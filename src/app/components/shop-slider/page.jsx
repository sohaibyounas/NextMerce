import {
  Box,
  Button,
  Card,
  CardContent,
  Icon,
  Typography,
} from "@mui/material";
import style from "./shops";
import Image from "next/image";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import SamrtWartch from "@/assets/newarrivals/smartwatch.png";
import Tablet from "@/assets/newarrivals/tablet.png";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

export default function Shop() {
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
      description: "This is the new Iphone 17.",
      price: "$999",
      priceCut: "$800",
    },
    {
      id: 4,
      image: Juicer,
      description: "This is the portable electric juicer.",
      price: "$120",
      priceCut: "$100",
    },
    {
      id: 5,
      image: Monitor,
      description: "This is the 4K monitor.",
      price: "$300",
      priceCut: "$200",
    },
    {
      id: 6,
      image: Screen,
      description: "This is the LCD screen.",
      price: "$180",
      priceCut: "$120",
    },
    {
      id: 7,
      image: SamrtWartch,
      description: "This is the smart watch.",
      price: "$250",
      priceCut: "$200",
    },
    {
      id: 8,
      image: Tablet,
      description: "This is the new tablet.",
      price: "$400",
      priceCut: "$350",
    },
  ];

  return (
    <>
      <Box sx={{ mt: 4 }}>
        <Box sx={style.shop}>
          <Typography sx={style.shopTitle}>New Arrivals</Typography>
          <Button sx={style.shopButton}>
            <Typography sx={style.shopButtonText}>View All</Typography>
          </Button>
        </Box>
        <Box sx={style.shopCardBox}>
          {cardData.map((card) => (
            <Card
              key={card.id}
              sx={{ minWidth: 275, boxShadow: 1, borderRadius: "10px", m: 1 }}
            >
              <CardContent
                className="cardcontent"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  p: 0,
                  position: "relative",
                }}
              >
                {/* card image */}
                <Box
                  sx={{
                    backgroundColor: "#F6F7FB",
                    width: "100%",
                    p: 2,
                  }}
                >
                  <Image
                    src={card.image}
                    alt="image"
                    style={{ width: "200px", height: "200px" }}
                  />
                </Box>

                {/* card details */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 1,
                    mt: 4,
                    p: "0px 5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#1C274C",
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                        color: "#1c274c",
                      }}
                    >
                      {card.price}
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "28px",
                        color: "#8C92A4",
                      }}
                    >
                      {card.priceCut}
                    </Typography>
                  </Box>
                </Box>

                {/* card button */}
                <Box
                  className="cardbutton"
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    left: -10,
                  }}
                >
                  <Icon
                    className="hiddenbutton"
                    sx={{
                      mr: 2,
                      cursor: "pointer",
                      "&: hover": { color: "#1C274C" },
                      boxShadow: 1,
                      borderRadius: "50%",
                      p: "4px",
                    }}
                  >
                    <CiHeart color="#1C274C" size={15} />
                  </Icon>
                  <Button className="hiddenbutton" sx={style.cardButton}>
                    <Typography>Add to Cart</Typography>
                  </Button>
                  <Icon
                    className="hiddenbutton"
                    sx={{
                      ml: 2,
                      cursor: "pointer",
                      "&: hover": { color: "#1C274C" },
                      boxShadow: 1,
                      borderRadius: "50%",
                      p: "4px",
                    }}
                  >
                    <FiEye color="#1C274C" size={15} />
                  </Icon>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}
