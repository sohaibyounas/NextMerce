"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import SignOut from "@/components/sections/SignOut/SignOut";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useState } from "react";

export default function SignIn() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // handle sign in google
  const handleSignIn = async () => {
    try {
      await signIn("google");
      toast.success("Sign in successfully");
    } catch (error) {
      toast.error("Error signing in");
      console.error("Error signing in:", error);
    }
  };

  // handle sign in github
  const handleSignInGithub = async () => {
    try {
      await signIn("github");
      toast.success("Sign in successfully");
    } catch (error) {
      toast.error("Error signing in");
      console.error("Error signing in:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      toast.success("Sign in successfully");
    } catch (error) {
      toast.error("Error signing in");
      console.error("Error signing in:", error);
    }
  };

  // session
  if (session) {
    return <SignOut />;
  }

  return (
    <>
      {/* header */}
      <Header />

      {/* breadcrumb */}
      <Breadcrumb title="Sign In" />

      {/* sign in details */}
      <Box
        sx={{
          bgcolor: "#F9FAFB",
          py: 8,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
        className="bg-gray-50 dark:bg-[#0B1120]"
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 6 },
              borderRadius: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              bgcolor: "white",
              transition: "all 0.3s ease",
            }}
            className="bg-white dark:bg-[#1E293B] dark:shadow-[0px_4px_20px_rgba(0,0,0,0.3)]"
          >
            {/* title */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1C274C",
                  mb: 1,
                  fontSize: { xs: "24px", sm: "28px" },
                }}
                className="text-[#1C274C] dark:text-white"
              >
                Sign In to Your Account
              </Typography>
              <Typography
                sx={{ color: "#606882", fontSize: "15px" }}
                className="text-[#606882] dark:text-gray-400"
              >
                Enter your detail below
              </Typography>
            </Box>

            {/* form fields */}
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              onSubmit={handleSubmit}
            >
              {/* email */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1C274C",
                    mb: 1,
                  }}
                  className="text-[#1C274C] dark:text-gray-200"
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  required
                  placeholder="example@gmail.com"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onBlur={handleEmailBlur}
                  error={setErrors}
                  helperText={setErrors}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "#F9FAFB",
                      "& fieldset": { borderColor: "#E5E7EB" },
                      "&:hover fieldset": { borderColor: "#D1D5DB" },
                      "&.Mui-focused fieldset": { borderColor: "#1C274C" },
                    },
                  }}
                  className="[&_.MuiOutlinedInput-root]:bg-gray-50 dark:[&_.MuiOutlinedInput-root]:bg-[#0B1120] [&_.MuiOutlinedInput-root]:border-gray-200 dark:[&_.MuiOutlinedInput-root]:border-gray-700 [&_input]:text-[#1C274C] dark:[&_input]:text-white [&_input::placeholder]:text-gray-400 dark:[&_input::placeholder]:text-gray-500 [&_fieldset]:border-gray-200 dark:[&_fieldset]:border-gray-700"
                />
              </Box>

              {/* password */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1C274C",
                    mb: 1,
                  }}
                  className="text-[#1C274C] dark:text-gray-200"
                >
                  Password
                </Typography>

                <TextField
                  fullWidth
                  required
                  placeholder="Enter your password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // onBlur={handlePasswordBlur}
                  error={setErrors}
                  helperText={setErrors}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "#F9FAFB",
                      "& fieldset": { borderColor: "#E5E7EB" },
                      "&:hover fieldset": { borderColor: "#D1D5DB" },
                      "&.Mui-focused fieldset": { borderColor: "#1C274C" },
                    },
                  }}
                  className="[&_.MuiOutlinedInput-root]:bg-gray-50 dark:[&_.MuiOutlinedInput-root]:bg-[#0B1120] [&_.MuiOutlinedInput-root]:border-gray-200 dark:[&_.MuiOutlinedInput-root]:border-gray-700 [&_input]:text-[#1C274C] dark:[&_input]:text-white [&_input::placeholder]:text-gray-400 dark:[&_input::placeholder]:text-gray-500 [&_fieldset]:border-gray-200 dark:[&_fieldset]:border-gray-700"
                />
              </Box>

              {/* sign in button */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#1C274C",
                  color: "white",
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#111827",
                    boxShadow: "none",
                  },
                }}
                onClick={handleSignIn}
                className="bg-[#1C274C] dark:bg-blue-600 hover:bg-[#111827] dark:hover:bg-blue-700"
              >
                Sign in
              </Button>

              {/* forgot password */}
              <Box sx={{ textAlign: "center" }}>
                <Link
                  href="/forgot-password"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#606882",
                      fontSize: "14px",
                      "&:hover": { color: "#1C274C" },
                    }}
                    className="text-[#606882] dark:text-gray-400 hover:text-[#1C274C] dark:hover:text-white"
                  >
                    Forgot your password?
                  </Typography>
                </Link>
              </Box>

              {/* divider */}
              <Divider
                sx={{
                  color: "#606882",
                  fontSize: "14px",
                  "&::before, &::after": { borderColor: "#E5E7EB" },
                }}
                className="text-[#606882] dark:text-gray-400 [&::before]:border-gray-200 dark:[&::before]:border-gray-700 [&::after]:border-gray-200 dark:[&::after]:border-gray-700"
              >
                Or
              </Divider>

              {/* sign in with google */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FcGoogle size={20} />}
                sx={{
                  borderColor: "#E5E7EB",
                  color: "#606882",
                  py: 1.5,
                  borderRadius: 10,
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  bgcolor: "#F9FAFB",
                  "&:hover": {
                    borderColor: "#D1D5DB",
                    bgcolor: "#F3F4F6",
                  },
                }}
                className="border-gray-200 dark:border-gray-700 text-[#606882] dark:text-gray-300 bg-gray-50 dark:bg-[#0B1120] hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={handleSignIn}
              >
                Sign In with Google
              </Button>

              {/* sign in with github */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={
                  <FaGithub size={20} className="text-black dark:text-white" />
                }
                sx={{
                  borderColor: "#E5E7EB",
                  color: "#606882",
                  py: 1.5,
                  borderRadius: 10,
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  bgcolor: "#F9FAFB",
                  "&:hover": {
                    borderColor: "#D1D5DB",
                    bgcolor: "#F3F4F6",
                  },
                }}
                className="border-gray-200 dark:border-gray-700 text-[#606882] dark:text-gray-300 bg-gray-50 dark:bg-[#0B1120] hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={handleSignInGithub}
              >
                Sign In with Github
              </Button>

              {/* sign up  */}
              <Box sx={{ textAlign: "center", mt: 1 }}>
                <Typography
                  sx={{ fontSize: "14px", color: "#606882" }}
                  className="text-[#606882] dark:text-gray-400"
                >
                  Don't have an account?{" "}
                  <Link href="/signup" style={{ textDecoration: "none" }}>
                    <Typography
                      component="span"
                      sx={{
                        color: "#1C274C",
                        fontWeight: 600,
                        "&:hover": { textDecoration: "underline" },
                      }}
                      className="text-[#1C274C] dark:text-blue-400"
                    >
                      Sign Up Now!
                    </Typography>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
