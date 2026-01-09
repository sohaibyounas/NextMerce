"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import NextLogo from "@/assets/next-logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    // Simulate sign up or implement logic
    toast.success("Account created successfully!");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Left Side - Form */}
      <Box
        sx={{
          flex: { xs: 1, md: "0 0 50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", sm: "center" },
          alignItems: "center",
          bgcolor: "white",
          p: { xs: 2.5, sm: 4, md: 6 },
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, py: { xs: 2, sm: 0 } }}>
          {/* Logo Section */}
          <Box
            sx={{
              mb: { xs: 3, sm: 4 },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Using the project's logo asset */}
            <Box
              sx={{
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                bgcolor: "#1C274C",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {/* Optional: replace with actual NextLogo if it renders well, or a stylized icon */}
              <Image
                src={NextLogo}
                alt="Logo"
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
              />
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1C274C",
              mb: 1,
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
            }}
          >
            Get Started
          </Typography>
          <Typography
            sx={{
              color: "#606882",
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Welcome to NextMerce - Let's create your account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSignUp}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 2.5 },
            }}
          >
            {/* Email Field */}
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1C274C",
                  mb: 1,
                }}
              >
                Email
              </Typography>
              <TextField
                fullWidth
                placeholder="hi@example.com"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "white",
                    "& fieldset": {
                      borderColor: "#E5E7EB",
                      borderWidth: "1.5px",
                    },
                    "&:hover fieldset": { borderColor: "#9CA3AF" },
                    "&.Mui-focused fieldset": { borderColor: "#1C274C" },
                    "& input": { p: 1.5 },
                  },
                }}
              />
            </Box>

            {/* Password Field */}
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1C274C",
                  }}
                >
                  Password
                </Typography>
                <Link
                  href="/forgot-password"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#1C274C",
                      opacity: 0.8,
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    Forgot?
                  </Typography>
                </Link>
              </Stack>
              <TextField
                fullWidth
                placeholder="Enter your password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "white",
                    "& fieldset": {
                      borderColor: "#E5E7EB",
                      borderWidth: "1.5px",
                    },
                    "&:hover fieldset": { borderColor: "#9CA3AF" },
                    "&.Mui-focused fieldset": { borderColor: "#1C274C" },
                    "& input": { p: 1.5 },
                  },
                }}
              />
            </Box>

            {/* Sign Up Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "#1C274C",
                color: "white",
                py: { xs: 1.5, sm: 1.8 },
                mt: { xs: 0.5, sm: 1 },
                borderRadius: 2,
                textTransform: "none",
                fontSize: { xs: "15px", sm: "16px" },
                fontWeight: 600,
                boxShadow: "0px 4px 12px rgba(28, 39, 76, 0.2)",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "#111827",
                  boxShadow: "0px 6px 16px rgba(28, 39, 76, 0.3)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Sign up
            </Button>

            {/* Login Link */}
            <Box sx={{ textAlign: "center", mt: { xs: 1, sm: 2 } }}>
              <Typography sx={{ fontSize: "14px", color: "#606882" }}>
                Already have an account?{" "}
                <Link href="/signin" style={{ textDecoration: "none" }}>
                  <Typography
                    component="span"
                    sx={{
                      color: "#1C274C",
                      fontWeight: 700,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Log in
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Visual / Hero */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          bgcolor: "#1C274C", // Project Primary Color
          backgroundImage:
            "radial-gradient(circle at 10% 20%, #2a3b75 0%, #1C274C 90%)",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          color: "white",
          p: 6,
          overflow: "hidden",
        }}
      >
        {/* Abstract Background Shapes */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)",
            filter: "blur(40px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -50,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
            filter: "blur(60px)",
          }}
        />

        <Box sx={{ zIndex: 2, maxWidth: 500, width: "100%" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.15,
              mb: 8,
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5rem",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            Enter the Future of{" "}
            <Box component="span" sx={{ color: "#a5b4fc" }}>
              Shopping,{" "}
            </Box>
            Today
          </Typography>

          {/* Floating Card Mockup - Replicating the image details */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 340,
              ml: "auto",
              mr: 4,
            }}
          >
            {/* Main Card */}
            <Box
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.95)",
                borderRadius: 4,
                p: 3,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                color: "#1C274C",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#1C274C",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Tiny logo on card */}
                  <Image
                    src={NextLogo}
                    alt="Logo"
                    width={16}
                    height={16}
                    style={{ filter: "invert(1)" }}
                  />
                </Box>
              </Stack>

              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                $12,347.23
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#606882", mb: 4, fontSize: "13px" }}
              >
                Combined balance
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#606882", display: "block", mb: 0.5 }}
                  >
                    Primary Card
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    3495 **** **** 6917
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", fontStyle: "italic", opacity: 0.5 }}
                >
                  VISA
                </Typography>
              </Stack>

              {/* View All Button Pill */}
              <Box sx={{ position: "absolute", bottom: 20, right: 20 }}>
                <Box
                  sx={{
                    bgcolor: "#E5E7EB",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 10,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "#4B5563" }}
                  >
                    View All
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Vertical Sidebar Mockup elements (to match image) */}
            <Box
              sx={{
                position: "absolute",
                left: -70,
                bottom: 10,
                width: 50,
                height: 240,
                bgcolor: "rgba(255,255,255,0.9)",
                borderRadius: 3,
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                pb: 2,
                gap: 2,
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#1C274C",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={NextLogo}
                  alt="Logo"
                  width={18}
                  height={18}
                  style={{ filter: "invert(1)" }}
                />
              </Box>
            </Box>
            {/* Small element above the sidebar */}
            <Box
              sx={{
                position: "absolute",
                left: -15,
                bottom: 25, // aligned with sidebar
                transform: "translateX(-50%)",
                width: 50,
                height: 180,
                bgcolor: "rgba(240, 243, 255, 0.9)",
                borderRadius: 3,
                zIndex: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
