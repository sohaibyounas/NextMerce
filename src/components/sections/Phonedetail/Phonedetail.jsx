"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Promo from "@/assets/general/promo-01.png";
import Watch from "@/assets/products/promo-03.png";
import Workout from "@/assets/products/workout.webp";

export default function Phonedetail() {
  return (
    <>
      {/* phone detail */}
      <Grid
        container
        spacing={2}
        className="bg-[#F5F5F5] dark:bg-slate-900/50 transition-colors duration-300"
        sx={{
          width: "100%",
          mt: "83px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* phone text */}
        <Grid size={6} maxWidth={600} pl={10}>
          <Typography
            className="text-[#1C274C] dark:text-gray-300"
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            Apple iPhone 14 Plus
          </Typography>
          <Typography
            className="text-[#1C274C] dark:text-white"
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "48px",
              pt: "30px",
              pb: "34px",
            }}
          >
            UP TO 30% OFF
          </Typography>
          <Typography
            className="text-gray-600 dark:text-gray-400"
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
        </Grid>
        {/* phone image */}
        <Grid size={6} pl={40}>
          <Image src={Promo} alt="Phone Image" width={274} height={350} />
        </Grid>
      </Grid>

      {/* product detail */}
      <Grid container spacing={4} mt={4}>
        {/* product 1 */}
        <Grid
          size={6}
          className="bg-[#DBF4F3] dark:bg-slate-800 transition-colors duration-300"
          sx={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* phone image */}
          <Grid size={6} pt={7}>
            <Image
              src={Workout}
              alt="Workout Machine"
              width={300}
              height={300}
            />
          </Grid>

          {/* phone text */}
          <Grid size={6} pt={7.8} pl={2}>
            <Typography
              className="text-[#1C274C] dark:text-gray-300"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Foldable Motorised Treadmill
            </Typography>
            <Typography
              className="text-[#1C274C] dark:text-white"
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "38px",
                pt: "22px",
                pb: "24px",
              }}
            >
              Workout At Home
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "30px",
                color: "#02AAA4",
              }}
            >
              Flat 20% off
            </Typography>
            {/* button */}
            <Button
              sx={{
                backgroundColor: "#02AAA4",
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
          </Grid>
        </Grid>

        {/* product 2 */}
        <Grid
          size={6}
          className="bg-[#FFECE1] dark:bg-[#2A2D3E] transition-colors duration-300"
          sx={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* phone text */}
          <Grid size={8} pt={7.8} pl={5}>
            <Typography
              className="text-[#1C274C] dark:text-gray-300"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              Apple Watch Ultra
            </Typography>
            <Typography
              className="text-[#1C274C] dark:text-white"
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "38px",
                pt: "22px",
                pb: "24px",
              }}
            >
              Up to 40% off
            </Typography>
            <Typography
              className="text-gray-700 dark:text-gray-400"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22px",
              }}
            >
              The aerospace-grade titanium case strikes the perfect balance of
              everything.
            </Typography>
            {/* button */}
            <Button
              sx={{
                backgroundColor: "#F27430",
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
          </Grid>

          {/* phone image */}
          <Grid size={4} pt={7}>
            <Image src={Watch} alt="Smart Watch" width={200} height={200} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
