import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function Subscription() {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right bottom, #1d3f72, #1753cb, #5372d6, #6071c7, #7a82e4)",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={7} pl={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 700,
                  lineHeight: "38px",
                  maxWidth: "400px",
                  color: "#fff",
                  pt: "54px",
                  pb: "24px",
                }}
              >
                Don't Miss Out Latest Trends & Offers
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#fff",
                  pb: "44px",
                }}
              >
                Register to receive news about the latest offers & discount
                codes
              </Typography>
            </Box>
          </Grid>
          <Grid size={5}>
            <Box
              pt={8}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box>
                <TextField
                  placeholder="Enter your email"
                  fullWidth
                  sx={{
                    ".css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
                      background: "white",
                      outline: "none",
                      padding: "5px 7px",
                      borderRadius: "20px",
                      border: "none",
                    },
                    ".css-quhxjy-MuiInputBase-root-MuiOutlinedInput-root": {
                      borderRadius: "16px",
                      "&:hover": {
                        borderColor: "#1c274c",
                      },
                    },
                    ".css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                  }}
                />
              </Box>

              <Box>
                <Button
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    textTransform: "none",
                    p: "5px 10px",
                    border: "transparent",
                    borderRadius: "20px",
                    background: "#3C50E0",
                    color: "#fff",
                    "&:hover": {
                      background: "#1c3fb7",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
