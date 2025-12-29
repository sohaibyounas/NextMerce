"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Subscription from "../Subscription/subscription";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  MdRocketLaunch,
  MdGroups,
  MdSecurity,
  MdSupportAgent,
  MdArrowForward,
  MdPlayCircleOutline,
} from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

// Sample Data
const stats = [
  { number: "15k+", label: "Happy Customers" },
  { number: "150+", label: "Total Products" },
  { number: "12+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const features = [
  {
    icon: <MdRocketLaunch size={40} />,
    title: "Fast Delivery",
    desc: "We ensure your products arrive safe and on time, every time.",
  },
  {
    icon: <MdSecurity size={40} />,
    title: "Secure Payment",
    desc: "Your transactions are protected with top-tier security standards.",
  },
  {
    icon: <MdSupportAgent size={40} />,
    title: "24/7 Support",
    desc: "Our dedicated team is here to assist you round the clock.",
  },
];

const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Jane Smith",
    role: "Head of Design",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Mike Johnson",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    name: "Sarah Williams",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/300?img=9",
  },
];

// Animation Hook
const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [options]);

  return [elementRef, isVisible];
};

const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Header />
      <Breadcrumb title="About Us" />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <FadeInSection>
              <Typography
                variant="h6"
                sx={{
                  color: "#3C50E0",
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  mb: 3,
                  background:
                    "linear-gradient(45deg, #1C274C 30%, #3C50E0 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Innovating the Future of Shopping
              </Typography>
              <Typography
                sx={{
                  color: "#606882",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                At NextMerce, we believe shopping should be simple, enjoyable,
                and tailored to you. What started as a small idea has grown into
                a vibrant platform dedicated to bringing quality products and
                exceptional experiences to customers around the world. Our
                mission is to make premium items accessible to everyone —
                without the hassle. Every day, we work with passion and purpose
                to innovate, inspire, and deliver excellence. Join us as we
                reimagine the future of online shopping.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<MdArrowForward />}
                  sx={{
                    bgcolor: "#3C50E0",
                    borderRadius: "50px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": { bgcolor: "#2A3EB1" },
                  }}
                >
                  Learn More
                </Button>
                <IconButton
                  sx={{
                    color: "#3C50E0",
                    border: "2px solid #3C50E0",
                    p: 1.5,
                    "&:hover": { bgcolor: "#EFF2FF" },
                  }}
                >
                  <MdPlayCircleOutline size={28} />
                </IconButton>
              </Stack>
            </FadeInSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <FadeInSection delay={0.2}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, md: 500 },
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(60, 80, 224, 0.15)",
                }}
              >
                {/* Abstract Background Shapes */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    bgcolor: "rgba(60, 80, 224, 0.1)",
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -30,
                    left: -30,
                    width: 150,
                    height: 150,
                    bgcolor: "rgba(28, 39, 76, 0.05)",
                    borderRadius: "50%",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                  alt="Our Office"
                  fill
                  style={{ objectFit: "cover", zIndex: 1 }}
                />
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: "#F9FAFB", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} item xs={6} md={3}>
                <FadeInSection delay={index * 0.1}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: 4,
                      bgcolor: "white",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "translateY(-10px)" },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: 800, color: "#3C50E0", mb: 1 }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography sx={{ color: "#606882", fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </FadeInSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <FadeInSection>
          <Box sx={{ textAlign: "center", mb: 8, maxWidth: 600, mx: "auto" }}>
            <Typography
              variant="h6"
              sx={{
                color: "#3C50E0",
                fontWeight: 600,
                mb: 2,
                letterSpacing: 1,
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: "#1C274C", mb: 2 }}
            >
              We Provide The Best Service For You
            </Typography>
          </Box>
        </FadeInSection>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} item xs={12} md={4}>
              <FadeInSection delay={index * 0.15}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 4,
                    borderRadius: 4,
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#3C50E0",
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 30px rgba(60, 80, 224, 0.1)",
                      "& .icon-box": {
                        bgcolor: "#3C50E0",
                        color: "white",
                      },
                    },
                  }}
                >
                  <Box
                    className="icon-box"
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: "50%",
                      bgcolor: "#EFF2FF",
                      color: "#3C50E0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2, color: "#1C274C" }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography sx={{ color: "#606882", lineHeight: 1.6 }}>
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: "#F9FAFB", py: 10 }}>
        <Container maxWidth="lg">
          <FadeInSection>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, color: "#1C274C", mb: 2 }}
              >
                Meet Our Expert Team
              </Typography>
              <Typography sx={{ color: "#606882", maxWidth: 600, mx: "auto" }}>
                The talented people behind our success and your satisfaction.
              </Typography>
            </Box>
          </FadeInSection>

          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <FadeInSection delay={index * 0.1}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      borderRadius: 4,
                      p: 3,
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                        "& .social-links": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      },
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        overflow: "hidden",
                        mx: "auto",
                        mb: 3,
                        border: "4px solid #EFF2FF",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: "#1C274C" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#3C50E0",
                        fontSize: "0.9rem",
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      {member.role}
                    </Typography>

                    {/* Social Links Overlay */}
                    <Stack
                      className="social-links"
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      sx={{
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                        (Icon, i) => (
                          <IconButton
                            key={i}
                            size="small"
                            sx={{
                              bgcolor: "#EFF2FF",
                              color: "#3C50E0",
                              "&:hover": { bgcolor: "#3C50E0", color: "white" },
                            }}
                          >
                            <Icon size={14} />
                          </IconButton>
                        )
                      )}
                    </Stack>
                  </Box>
                </FadeInSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Subscription Section */}
      <Subscription />
      <Footer />
    </Box>
  );
}
