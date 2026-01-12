"use client";

import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import NextLogo from "@/assets/next-logo.svg"; // ← same logo as forgot password
import Link from "next/link";
import SignOut from "../SignOut/SignOut";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  if (session) {
    return <SignOut />;
  }

  // email validation
  const validate = () => {
    const temp = { email: "", password: "" };
    temp.email = /\S+@\S+\.\S+/.test(form.email) ? "" : "Invalid email format";
    temp.password = form.password.length >= 6 ? "" : "Min 6 characters";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (res?.error) {
        toast.error(
          res.error === "CredentialsSignin" ? "Invalid credentials" : res.error
        );
      } else if (res?.ok) {
        toast.success("Signed in successfully!");
        router.push(res.url || "/");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = (provider) => {
    signIn(provider, { callbackUrl: "/" });
    toast.success("Redirecting...");
  };

  return (
    <Box sx={{ display: "flex", height: "100dvh", overflow: "hidden" }}>
      {/* ── Left Side - Form ── */}
      <Box
        sx={{
          flex: { xs: 1, md: "0 0 50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white",
          p: { xs: 2.5, sm: 4, md: 6 },
          overflowY: "auto",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 420, my: "auto" }}>
          {/* Logo + Back */}
          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#1C274C",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={NextLogo}
                  alt="Logo"
                  width={26}
                  height={26}
                  style={{ filter: "invert(1)" }}
                  href="/"
                />
              </Box>
            </Box>

            <Link href="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#606882",
                  mb: 3,
                  "&:hover": { color: "#1C274C" },
                }}
              >
                <IoArrowBack size={18} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  Back to Home
                </Typography>
              </Box>
            </Link>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#1C274C",
                mb: 1,
                fontSize: { xs: "26px", sm: "32px" },
              }}
            >
              Welcome back
            </Typography>
            <Typography sx={{ color: "#606882", mb: 4 }}>
              Sign in to your account
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              {/* Email */}
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  error={!!errors.email}
                  helperText={errors.email}
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
                    },
                  }}
                />
              </Box>

              {/* Password */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1C274C",
                    mb: 1,
                  }}
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  placeholder="••••••••"
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  error={!!errors.password}
                  helperText={errors.password}
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
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: -1 }}>
                <Link
                  href="/forgot-password"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#1C274C",
                      fontWeight: 500,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Forgot password?
                  </Typography>
                </Link>
              </Box>

              <Button
                fullWidth
                type="submit"
                disabled={loading}
                variant="contained"
                sx={{
                  bgcolor: "#1C274C",
                  py: 1.6,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "15.5px",
                  boxShadow: "0px 4px 12px rgba(28,39,76,0.2)",
                  "&:hover": {
                    bgcolor: "#111827",
                    boxShadow: "0px 8px 20px rgba(28,39,76,0.3)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>

              <Divider sx={{ my: 2, color: "#9CA3AF" }}>or</Divider>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<FcGoogle size={20} />}
                onClick={() => handleSocialSignIn("google")}
                sx={{
                  py: 1.4,
                  borderColor: "#E5E7EB",
                  color: "#1F2937",
                  fontWeight: 500,
                  "&:hover": { borderColor: "#1C274C", bgcolor: "#F9FAFB" },
                }}
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<FaGithub size={20} />}
                onClick={() => handleSocialSignIn("github")}
                sx={{
                  py: 1.4,
                  borderColor: "#E5E7EB",
                  color: "#1F2937",
                  fontWeight: 500,
                  "&:hover": { borderColor: "#1C274C", bgcolor: "#F9FAFB" },
                }}
              >
                Continue with GitHub
              </Button>

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography sx={{ color: "#606882", fontSize: "14px" }}>
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    style={{
                      color: "#1C274C",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Hero / Visual (md+ only) */}
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
          p: 8,
          overflow: "hidden",
        }}
      >
        {/* Decorative blurred circles */}
        <Box
          sx={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <Box sx={{ zIndex: 2, maxWidth: 520 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 4,
              fontSize: { md: "3.2rem", lg: "3.8rem" },
            }}
          >
            Welcome to
            <Box component="span" sx={{ color: "#a5b4fc", display: "block" }}>
              NextMerce
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#c7d2fe", mb: 5, maxWidth: 420 }}
          >
            Sign in to access your dashboard, manage products, orders and grow
            your business.
          </Typography>

          {/* Small security card */}
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.95)",
              borderRadius: 3,
              p: 3,
              color: "#1C274C",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)",
              maxWidth: 360,
              ml: "auto",
            }}
          >
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Secure Authentication
            </Typography>
            <Typography variant="body2" sx={{ color: "#4B5563", mb: 2 }}>
              Protected with industry-standard encryption & modern auth
              providers
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {["OAuth2", "JWT", "2FA Ready"].map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    bgcolor: "#F3F4F6",
                    px: 1.8,
                    py: 0.6,
                    borderRadius: 10,
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
