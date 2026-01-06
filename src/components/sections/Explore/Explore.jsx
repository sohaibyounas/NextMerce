"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Headphone from "@/assets/products/new-headphone.webp";
import CountdownTimer from "./CountdownTimer";

export default function Explore() {
  return (
    <>
      <Grid
        container
        spacing={2}
        pt={10}
        className="bg-gradient-to-tr from-[#3b4371] via-[#7695b3] to-[#d0e9f3] dark:from-[#1e293b] dark:via-[#334155] dark:to-[#0f172a] transition-all duration-500"
        sx={{
          minHeight: "450px",
        }}
      >
        {/* grid text */}
        <Grid size={6} pl={7}>
          <Box>
            <Typography
              className="text-[#3C50E0] dark:text-blue-400"
              sx={{
                fontSize: "22px",
                fontWeight: 500,
                lineHeight: "30px",
              }}
            >
              Don’t Miss!!
            </Typography>
            <Typography
              className="text-[#1c274c] dark:text-white"
              sx={{
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "48px",
                pt: "20px",
                pb: "17px",
              }}
            >
              Enhance Your Music Experience
            </Typography>
            <Typography
              className="text-[#1c274c] dark:text-gray-300"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24x",
                pb: "28px",
              }}
            >
              iPhone 16 Pro Max
            </Typography>
          </Box>

          {/* autotiemr */}
          <Box sx={{ pb: "20px" }}>
            <CountdownTimer />
          </Box>

          <Button
            sx={{
              backgroundColor: "#3C50E0",
              color: "#fff",
              textTransform: "none",
              borderRadius: "20px",
              p: "0px 10px",
              "&:hover": {
                background: "#1c36f0",
                color: "#fff",
              },
            }}
          >
            Check it out!
          </Button>
        </Grid>

        {/* grid image */}
        <Grid size={6}>
          <Box>
            <Image src={Headphone} alt="Head phone" width={411} height={376} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
