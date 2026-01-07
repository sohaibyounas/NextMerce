"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./subscription.css";

export default function Subscription() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-based animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      className={`subscription-container ${
        isVisible ? "animate-in" : ""
      } bg-gradient-to-r from-[#1d3f72] via-[#1753cb] to-[#7a82e4] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155]`}
      sx={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Animated Background Elements */}
      <Box className="floating-circle-1" />
      <Box className="floating-circle-2" />
      <Box className="floating-star" />
      <Box className="floating-dot" />
      <Box className="floating-dot" />
      <Box className="floating-dot" />
      <Box className="animated-line" />

      <Grid container spacing={2} sx={{ position: "relative", zIndex: 1 }}>
        <Grid size={{ xs: 12, md: 7 }} pl={{ xs: 3, md: 6 }}>
          <Box className={`text-content ${isVisible ? "animate-in" : ""}`}>
            {/* Animated heading with shimmer effect */}
            <Typography
              className="shimmer-text"
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                fontWeight: 700,
                lineHeight: { xs: "32px", md: "38px" },
                maxWidth: "400px",
                pt: { xs: "32px", md: "54px" },
                pb: "24px",
              }}
            >
              Don't Miss Out Latest Trends & Offers
            </Typography>

            {/* Subtext with fade-in */}
            <Typography
              className={`subtext ${isVisible ? "animate-in" : ""}`}
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255,255,255,0.9)",
                pb: { xs: "24px", md: "44px" },
                maxWidth: "350px",
              }}
            >
              Register to receive news about the latest offers & discount codes
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            className={`form-content ${isVisible ? "animate-in" : ""}`}
            pt={{ xs: 0, md: 8 }}
            pb={{ xs: 4, md: 0 }}
            px={{ xs: 3, md: 0 }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            {/* Animated input field */}
            <Box
              className="email-input-wrapper"
              sx={{ flex: 1, minWidth: { xs: "100%", sm: "200px" } }}
            >
              <TextField
                placeholder="Enter your email"
                fullWidth
                sx={{
                  "& .MuiInputBase-input": {
                    background: "white",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    transition: "all 0.3s ease",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                    background: "white",
                    transition: "all 0.3s ease",
                    "& fieldset": { border: "none" },
                  },
                  "& .dark & .MuiInputBase-input": {
                    background: "#1e293b",
                    color: "white",
                  },
                }}
              />
            </Box>

            {/* Animated subscribe button */}
            <Box className="subscribe-btn-wrapper">
              <Button
                className="subscribe-btn"
                sx={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  textTransform: "none",
                  p: "10px 28px",
                  borderRadius: "25px",
                  color: "#fff",
                  border: "none",
                }}
              >
                Subscribe ✨
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom animated border on hover */}
      <Box className="bottom-border" />
    </Box>
  );
}
