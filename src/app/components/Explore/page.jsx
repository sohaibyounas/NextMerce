import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Headphone from "@/assets/products/new-headphone.webp";
import CountdownTimer from "./CountdownTimer";

export default function Explore() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 2 }}
        pt={{ xs: 5, md: 10 }}
        sx={{
          backgroundImage:
            "linear-gradient(to right top, #3b4371, #546b93, #7695b3, #a0bfd3, #d0e9f3)",
        }}
      >
        {/* grid text */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            pl: { xs: 2, md: 7 },
            pr: { xs: 2, md: 0 },
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: { xs: 5, md: 0 },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#3C50E0",
                fontSize: { xs: "16px", md: "22px" },
                fontWeight: 500,
                lineHeight: "30px",
              }}
            >
              Don’t Miss!!
            </Typography>
            <Typography
              sx={{
                color: "#1c274c",
                fontSize: { xs: "28px", sm: "34px", md: "40px" },
                fontWeight: 700,
                lineHeight: { xs: "36px", md: "48px" },
                pt: "20px",
                pb: "17px",
              }}
            >
              Enhance Your Music Experience
            </Typography>
            <Typography
              sx={{
                color: "#1c274c",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                pb: "28px",
              }}
            >
              iPhone 16 Pro Max
            </Typography>
          </Box>

          {/* autotiemr */}
          <Box
            sx={{
              pb: "20px",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <CountdownTimer />
          </Box>

          <Box>
            <Button
              sx={{
                backgroundColor: "#3C50E0",
                color: "#fff",
                textTransform: "none",
                borderRadius: "20px",
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
          </Box>
        </Grid>

        {/* grid image */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "300px", sm: "400px", md: "411px" },
              height: "auto",
            }}
          >
            <Image
              src={Headphone}
              alt="Head phone"
              layout="responsive"
              width={411}
              height={376}
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
