import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function Subscription() {
  return (
    <>
      <Box
        className="bg-gradient-to-r from-[#1d3f72] via-[#1753cb] to-[#7a82e4] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] transition-all duration-500"
        sx={{
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
                    "& .MuiInputBase-input": {
                      background: "white",
                      padding: "8px 15px",
                      borderRadius: "20px",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                      background: "white",
                      "& fieldset": { border: "none" },
                    },
                    "& .dark & .MuiInputBase-input": {
                      background: "#1e293b",
                      color: "white",
                    },
                  }}
                />
              </Box>

              <Box>
                <Button
                  className="bg-[#3C50E0] dark:bg-blue-600 hover:bg-[#1c3fb7] dark:hover:bg-blue-700 transition-colors duration-300"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    textTransform: "none",
                    p: "5px 20px",
                    borderRadius: "20px",
                    color: "#fff",
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
