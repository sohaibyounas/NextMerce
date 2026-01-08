"use client";

import { Box, Grid, Grid2, Icon, Typography } from "@mui/material";
import Link from "next/link";
import { FaApple, FaGooglePlay, FaRegEnvelope } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdOutlineDesignServices,
  MdOutlineLocalPhone,
  MdPrivacyTip,
  MdOutlineContactSupport,
} from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaClipboardList, FaQuestionCircle } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <Box
      sx={{
        borderTop: isDark ? "1px solid #374151" : "1px solid #F2F3F8",
        transition: "all 0.3s ease",
      }}
    >
      <Grid2 container spacing={2} pt={11} px={2}>
        {/* help & support */}
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 500,
              lineHeight: "30px",
              color: isDark ? "#fff" : "#1C274C",
            }}
          >
            Help & Support
          </Typography>

          {/* help options */}
          <Box sx={{ pt: 3.6 }}>
            {/* 1st */}
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                gap: "10px",
              }}
            >
              <Box>
                <Icon>
                  <IoLocationOutline color={isDark ? "white" : "#3b82f6"} />
                </Icon>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    maxWidth: "250px",
                    color: isDark ? "#D1D5DB" : "#1C274C",
                  }}
                >
                  685 Market Street,Las Vegas, LA 95820,United States.
                </Typography>
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
                  <MdOutlineLocalPhone color={isDark ? "white" : "#3b82f6"} />
                </Icon>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    maxWidth: "300px",
                    color: isDark ? "#D1D5DB" : "#1C274C",
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
                  <FaRegEnvelope color={isDark ? "white" : "#3b82f6"} />
                </Icon>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    maxWidth: "300px",
                    color: isDark ? "#D1D5DB" : "#1C274C",
                  }}
                >
                  dummy@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid2>

        {/* Account */}
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 500,
              color: isDark ? "#fff" : "#1C274C",
            }}
          >
            Account
          </Typography>

          {/* links */}
          <Box
            sx={{
              pt: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <IoMdLogIn color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="#" className="linkStyles">
                Login / Register
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <TiShoppingCart color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="#" className="linkStyles">
                Cart
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <FaClipboardList color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="#" className="linkStyles">
                Wishlist
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <CiShop color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="/Shop" className="linkStyles">
                Shop
              </Link>
            </Box>
          </Box>
        </Grid2>

        {/* Quick Link */}
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 500,
              color: isDark ? "#fff" : "#1C274C",
            }}
          >
            Quick Link
          </Typography>

          {/* links */}
          <Box
            sx={{
              pt: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <MdPrivacyTip color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="#" className="linkStyles">
                Privacy Policy
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <MdOutlineDesignServices color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="/services" className="linkStyles">
                Services
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <RiMoneyDollarCircleLine color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="#" className="linkStyles">
                Refund Policy
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <HiDocumentText color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="#" className="linkStyles">
                Terms of Use
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <FaQuestionCircle color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="/faq" className="linkStyles">
                FAQs
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                "&:hover": { color: "#3b82f6" },
                transition: "color 0.3s",
              }}
            >
              <span>
                <MdOutlineContactSupport color={isDark ? "white" : "#3b82f6"} />
              </span>
              <Link href="/contact" className="linkStyles">
                Contact Us
              </Link>
            </Box>
          </Box>
        </Grid2>

        {/* Download App */}
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "30px",
              fontWeight: 500,
              color: isDark ? "#fff" : "#1C274C",
            }}
          >
            Download App
          </Typography>

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
              <Typography sx={{ color: isDark ? "#D1D5DB" : "#1C274C" }}>
                Save $3 With App & New User only
              </Typography>
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
                  width: "200px",
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
                  background: "#3C50E0",
                  color: "#fff",
                  borderRadius: "8px",
                  width: "200px",
                  py: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    pr: 2,
                    width: "100%",
                  }}
                >
                  <Icon sx={{ width: "40px", height: "35px", p: 1 }}>
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
        </Grid2>
      </Grid2>
    </Box>
  );
}
