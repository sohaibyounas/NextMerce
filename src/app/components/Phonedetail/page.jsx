import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Promo from "@/assets/general/promo-01.png";

export default function Phonedetail() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          mt: "83px",
          backgroundColor: "#F5F5F5",
          position: "relative",
        }}
      >
        {/* phone text */}
        <Box sx={{ p: "60px 20px 20px 78px", maxWidth: 600 }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
              color: "#1C274C",
            }}
          >
            Apple iPhone 14 Plus
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "48px",
              color: "#1C274C !important",
              pt: "30px",
              pb: "34px",
            }}
          >
            UP TO 30% OFF
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "24px" }}
          >
            iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro, A15
            Bionic, with a 5‑core GPU, powers all the latest features.
          </Typography>
          {/* button */}
          <Button
            sx={{
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              mt: 4,
              px: 3,
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#1E40AF" },
              borderRadius: "20px",
            }}
          >
            Buy Now
          </Button>
        </Box>
        {/* phone image */}
        <Box sx={{ position: "absolute", top: 50, right: 50 }}>
          <Image src={Promo} alt="Phone Image" width={274} height={350} />
        </Box>
      </Box>
    </>
  );
}
