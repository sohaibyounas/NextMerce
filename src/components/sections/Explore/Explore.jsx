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
        pt={{ xs: 6, md: 10 }}
        className="bg-gradient-to-tr from-[#3b4371] via-[#7695b3] to-[#d0e9f3] dark:from-[#1e293b] dark:via-[#334155] dark:to-[#0f172a] transition-all duration-500"
        sx={{
          minHeight: "450px",
          pb: { xs: 6, md: 0 },
        }}
      >
        {/* grid text */}
        <Grid
          size={{ xs: 12, md: 6 }}
          px={{ xs: 3, md: 7 }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
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
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 700,
                lineHeight: { xs: "36px", md: "48px" },
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
              mb: 2,
              px: 4,
              py: 1,
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
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              pt: { xs: 4, md: 0 },
            }}
          >
            <Image
              src={Headphone}
              alt="Head phone"
              width={411}
              height={376}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
