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
        spacing={4}
        sx={{
          width: "100%",
          mt: { xs: 4, md: "83px" },
          backgroundColor: "#F5F5F5",
          alignItems: "center",
          px: { xs: 2, md: 0 },
          py: { xs: 5, md: 0 },
        }}
      >
        {/* phone text */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            pl: { xs: 2, md: 10 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              fontWeight: 500,
              lineHeight: "28px",
              color: "#1C274C",
            }}
          >
            Apple iPhone 14 Plus
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontWeight: 700,
              lineHeight: { xs: "40px", md: "48px" },
              color: "#1C274C !important",
              pt: "30px",
              pb: "34px",
            }}
          >
            UP TO 30% OFF
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              maxWidth: { xs: "100%", md: "500px" },
              mx: { xs: "auto", md: 0 },
            }}
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
              px: 4,
              py: 1.5,
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
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            p: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "300px" }}>
            <Image
              src={Promo}
              alt="Phone Image"
              layout="responsive"
              width={274}
              height={350}
            />
          </Box>
        </Grid>
      </Grid>

      {/* product detail */}
      <Grid container spacing={4} mt={4}>
        {/* product 1 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#DBF4F3",
              borderRadius: "10px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              p: 4,
              height: "100%",
              overflow: "hidden",
            }}
          >
            {/* phone image */}
            <Box
              sx={{
                width: { xs: "200px", sm: "150px", md: "200px" },
                flexShrink: 0,
              }}
            >
              <Image
                src={Workout}
                alt="Workout Machine"
                layout="responsive"
                width={300}
                height={300}
              />
            </Box>

            {/* phone text */}
            <Box
              sx={{
                pl: { xs: 0, sm: 4 },
                pt: { xs: 4, sm: 0 },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "#1C274C",
                }}
              >
                Foldable Motorised Treadmill
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "30px" },
                  fontWeight: 700,
                  lineHeight: "38px",
                  color: "#1C274C !important",
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
              <Button
                sx={{
                  backgroundColor: "#02AAA4",
                  color: "#FFFFFF",
                  mt: 3,
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
          </Box>
        </Grid>

        {/* product 2 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              backgroundColor: "#FFECE1",
              borderRadius: "10px",
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              alignItems: "center",
              p: 4,
              height: "100%",
              overflow: "hidden",
            }}
          >
            {/* phone text */}
            <Box
              sx={{
                pr: { xs: 0, sm: 4 },
                pt: { xs: 4, sm: 0 },
                textAlign: { xs: "center", sm: "left" },
                flex: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "#1C274C",
                }}
              >
                Apple Watch Ultra
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "30px" },
                  fontWeight: 700,
                  lineHeight: "38px",
                  color: "#1C274C !important",
                  pt: "22px",
                  pb: "24px",
                }}
              >
                Up to 40% off
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22px",
                  color: "#000000",
                }}
              >
                The aerospace-grade titanium case strikes the perfect balance of
                everything.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#F27430",
                  color: "#FFFFFF",
                  mt: 3,
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
            <Box
              sx={{
                width: { xs: "180px", sm: "140px", md: "180px" },
                flexShrink: 0,
              }}
            >
              <Image
                src={Watch}
                alt="Smart Watch"
                layout="responsive"
                width={200}
                height={200}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
