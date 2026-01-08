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

export default function SignIn() {
  const { data: session } = useSession();

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
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 6 },
              borderRadius: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              bgcolor: "white",
            }}
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
              >
                Sign In to Your Account
              </Typography>
              <Typography sx={{ color: "#606882", fontSize: "15px" }}>
                Enter your detail below
              </Typography>
            </Box>

            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
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
                >
                  Email
                </Typography>
                <TextField
                  fullWidth
                  placeholder="example@gmail.com"
                  type="email"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "#F9FAFB",
                      "& fieldset": { borderColor: "#E5E7EB" },
                      "&:hover fieldset": { borderColor: "#D1D5DB" },
                      "&.Mui-focused fieldset": { borderColor: "#1C274C" },
                    },
                  }}
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
                >
                  Password
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your password"
                  type="password"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      bgcolor: "#F9FAFB",
                      "& fieldset": { borderColor: "#E5E7EB" },
                      "&:hover fieldset": { borderColor: "#D1D5DB" },
                      "&.Mui-focused fieldset": { borderColor: "#1C274C" },
                    },
                  }}
                />
              </Box>

              {/* sign in buttons */}
              <Button
                fullWidth
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
                onClick={() => signIn("google")}
              >
                Sign In with Google
              </Button>

              {/* sign in with github */}
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FaGithub size={20} color="black" />}
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
                onClick={() => signIn("github")}
              >
                Sign In with Github
              </Button>

              {/* sign up  */}
              <Box sx={{ textAlign: "center", mt: 1 }}>
                <Typography sx={{ fontSize: "14px", color: "#606882" }}>
                  Don't have an account?{" "}
                  <Link href="/signup" style={{ textDecoration: "none" }}>
                    <Typography
                      component="span"
                      sx={{
                        color: "#1C274C",
                        fontWeight: 600,
                        "&:hover": { textDecoration: "underline" },
                      }}
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
