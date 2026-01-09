"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import { toast } from "react-toastify";

export default function SignOut() {
  const { data: session } = useSession();

  // handle sign out
  const handleSignOut = () => {
    signOut();
    toast.success("Sign out successfully");
  };

  return (
    <>
      {/* header */}
      <Header />

      {/* breadcrumb */}
      <Breadcrumb title="My Account" />

      {/* sign out details */}
      <Box
        sx={{
          bgcolor: "#F9FAFB",
          py: 8,
          minHeight: "60vh",
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
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Avatar */}
            <Avatar
              src={session?.user?.image}
              alt={session?.user?.name}
              sx={{
                width: 100,
                height: 100,
                mb: 1,
                border: "4px solid #F3F4F6",
              }}
            />

            {/* Welcome Text */}
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: "#1C274C", mb: 1 }}
              >
                Welcome back!
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#1C274C", fontWeight: 600 }}
              >
                {session?.user?.name}
              </Typography>
              <Typography sx={{ color: "#606882", mt: 0.5 }}>
                {session?.user?.email}
              </Typography>
            </Box>

            {/* Actions */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "100%",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button
                fullWidth
                variant="outlined"
                onClick={handleSignOut}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#EF4444",
                  borderColor: "#EF4444",
                  "&:hover": {
                    borderColor: "#DC2626",
                    bgcolor: "#FEF2F2",
                  },
                }}
              >
                Sign Out
              </Button>

              <Link
                href="/shop"
                style={{ width: "100%", textDecoration: "none" }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    bgcolor: "#1C274C",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#111827",
                      boxShadow: "none",
                    },
                  }}
                >
                  Continue Shopping
                </Button>
              </Link>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
