import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import Link from "next/link";
import { FaApple, FaGooglePlay, FaRegEnvelope } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Grid container spacing={2} pt={11} px={2}>
        {/* 1st grid */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography
              sx={{ fontSize: "22px", fontWeight: 500, lineHeight: "30px" }}
            >
              Help & Support
            </Typography>
          </Box>
          {/* help options */}
          <Box sx={{ pt: 3.6 }}>
            {/* 1st */}
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Box>
                <Icon>
                  <IoLocationOutline color="blue" />
                </Icon>
              </Box>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                      maxWidth: "300px",
                    }}
                  >
                    685 Market Street,Las Vegas, LA 95820,United States.
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* 2nd */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "10px",
              }}
            >
              <Box>
                <Icon>
                  <MdOutlineLocalPhone color="blue" />
                </Icon>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    maxWidth: "300px",
                  }}
                >
                  (+92) 343-546-5755
                </Typography>
              </Box>
            </Box>
            {/* 3rd */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "10px",
              }}
            >
              <Box>
                <Icon>
                  <FaRegEnvelope color="blue" />
                </Icon>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    maxWidth: "300px",
                  }}
                >
                  dummy@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* 2nd grid */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: 500,
              }}
            >
              Account
            </Typography>
          </Box>
          {/* links */}
          <Box
            sx={{
              pt: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box>
              <Link href="#" className="linkStyles">
                Login / Register
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                Cart
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                Wishlist
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                Shop
              </Link>
            </Box>
          </Box>
        </Grid>
        {/* 3rd grid */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: 500,
              }}
            >
              Quick Link
            </Typography>
          </Box>
          {/* links */}
          <Box
            sx={{
              pt: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box>
              <Link href="#" className="linkStyles">
                Privacy Policy
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                Refund Policy
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                Terms of Use
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                FAQ's
              </Link>
            </Box>
            <Box>
              <Link href="#" className="linkStyles">
                Contract
              </Link>
            </Box>
          </Box>
        </Grid>
        {/* 4th grid */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Box>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: 500,
              }}
            >
              Download App
            </Typography>
          </Box>
          {/* links */}
          <Box
            sx={{
              pt: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box>
              <Typography>Save $3 With App & New User only</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  background: "#1C274C",
                  color: "#fff",
                  borderRadius: "8px",
                  width: "150px",
                  py: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    pr: 2,
                  }}
                >
                  <Icon sx={{ width: "34px", height: "35px", p: 1 }}>
                    <FaApple color="white" />
                  </Icon>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "22px",
                      }}
                    >
                      Down on the
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      Apple Store
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  background: "#1C274C",
                  color: "#fff",
                  borderRadius: "8px",
                  width: "150px",
                  py: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    pr: 2,
                  }}
                >
                  <Icon sx={{ width: "34px", height: "35px", p: 1 }}>
                    <FaGooglePlay color="#fff" />
                  </Icon>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "22px",
                      }}
                    >
                      Get it on
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                      }}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
