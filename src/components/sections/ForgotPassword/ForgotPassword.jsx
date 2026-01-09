"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import NextLogo from "@/assets/next-logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoArrowBack } from "react-icons/io5";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    // Simulate password reset email
    setIsSubmitted(true);
    toast.success("Password reset link sent to your email!");
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
          overflowY: "auto",
          overflowX: "hidden",
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
              <Image
                src={NextLogo}
                alt="Logo"
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
              />
            </Box>
          </Box>

          {/* Back to Sign In Link */}
          <Link href="/signin" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: { xs: 2, sm: 3 },
                color: "#606882",
                transition: "color 0.2s",
                "&:hover": { color: "#1C274C" },
              }}
            >
              <IoArrowBack size={18} />
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                Back to Sign In
              </Typography>
            </Box>
          </Link>

          {!isSubmitted ? (
            <>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1C274C",
                  mb: 1,
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                }}
              >
                Forgot Password?
              </Typography>
              <Typography
                sx={{
                  color: "#606882",
                  mb: { xs: 3, sm: 4 },
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                No worries! Enter your email and we'll send you a reset link.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
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

                {/* Reset Password Button */}
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
                  Reset Password
                </Button>
              </Box>
            </>
          ) : (
            /* Success State */
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#E8F5E9",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  mb: 4,
                }}
              >
                <Typography sx={{ fontSize: "40px" }}>✉️</Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1C274C",
                  mb: 2,
                  fontSize: { xs: "24px", md: "28px" },
                }}
              >
                Check Your Email
              </Typography>
              <Typography sx={{ color: "#606882", mb: 4, fontSize: "16px" }}>
                We've sent a password reset link to <strong>{email}</strong>
              </Typography>
              <Button
                onClick={() => setIsSubmitted(false)}
                sx={{
                  color: "#1C274C",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Didn't receive the email? Try again
              </Button>
            </Box>
          )}

          {/* Sign Up Link */}
          <Box sx={{ textAlign: "center", mt: { xs: 2, sm: 3 } }}>
            <Typography sx={{ fontSize: "14px", color: "#606882" }}>
              Don't have an account?{" "}
              <Link href="/signup" style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  sx={{
                    color: "#1C274C",
                    fontWeight: 700,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Sign Up
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Visual / Hero */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          bgcolor: "#1C274C",
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
            Secure Your Account with{" "}
            <Box component="span" sx={{ color: "#a5b4fc" }}>
              NextMerce
            </Box>
          </Typography>

          {/* Security Illustration Card */}
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
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "#E8F5E9",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <Typography sx={{ fontSize: "32px" }}>🔐</Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Password Security
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#606882", mb: 3, fontSize: "14px" }}
              >
                We use industry-standard encryption to keep your account safe
                and secure.
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {["256-bit SSL", "2FA Ready", "Secure Reset"].map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      bgcolor: "#F3F4F6",
                      px: 2,
                      py: 0.75,
                      borderRadius: 10,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 600, color: "#4B5563" }}
                    >
                      {tag}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Vertical Sidebar Mockup */}
            <Box
              sx={{
                position: "absolute",
                left: -70,
                bottom: 10,
                width: 50,
                height: 200,
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
            {/* Background element */}
            <Box
              sx={{
                position: "absolute",
                left: -15,
                bottom: 25,
                transform: "translateX(-50%)",
                width: 50,
                height: 150,
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
