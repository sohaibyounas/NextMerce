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
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";
import {
  MdLocalShipping,
  MdSecurity,
  MdSupportAgent,
  MdAssignmentReturn,
  MdCardGiftcard,
  MdVerifiedUser,
  MdArrowForward,
} from "react-icons/md";
import Image from "next/image";

// Services Data for E-commerce
const services = [
  {
    id: 1,
    title: "Fast & Free Delivery",
    description:
      "Enjoy quick shipping on all orders. We ensure your package reaches you safe and on time.",
    icon: <MdLocalShipping size={40} />,
    color: "#3C50E0",
  },
  {
    id: 2,
    title: "Secure Payments",
    description:
      "Shop with confidence. Our payment gateways are encrypted and 100% secure.",
    icon: <MdSecurity size={40} />,
    color: "#10B981",
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description:
      "Have a question? Our support team is available round the clock to assist you.",
    icon: <MdSupportAgent size={40} />,
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Easy Returns",
    description:
      "Not satisfied? Return or exchange any item within 30 days with our hassle-free policy.",
    icon: <MdAssignmentReturn size={40} />,
    color: "#EF4444",
  },
  {
    id: 5,
    title: "Gift Wrapping",
    description:
      "Make it special. Add premium gift wrapping and a personalized note to your order.",
    icon: <MdCardGiftcard size={40} />,
    color: "#EC4899",
  },
  {
    id: 6,
    title: "Authenticity Guaranteed",
    description:
      "We strictly ensure every product sold is 100% original and sourced from verified brands.",
    icon: <MdVerifiedUser size={40} />,
    color: "#6366F1",
  },
];

// Shopping Process Data
const process = [
  {
    step: "01",
    title: "Browse & Select",
    description:
      "Explore our vast collection of premium products and add your favorites to the cart.",
  },
  {
    step: "02",
    title: "Secure Checkout",
    description:
      "Enter your shipping details and pay securely using our diverse payment options.",
  },
  {
    step: "03",
    title: "Fast Processing",
    description:
      "Our warehouse team quickly packs, checks for quality, and dispatches your order.",
  },
  {
    step: "04",
    title: "Doorstep Delivery",
    description:
      "Receive your package right at your door and enjoy your new purchase!",
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

const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case "left":
        return isVisible ? "translateX(0)" : "translateX(-30px)";
      case "right":
        return isVisible ? "translateX(0)" : "translateX(30px)";
      default:
        return isVisible ? "translateY(0)" : "translateY(30px)";
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};

export default function Services() {
  const theme = useTheme();

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Header />
      <Breadcrumb title="Our Services" />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10, lg: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <FadeInSection direction="left">
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#3C50E0",
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    display: "block",
                    mb: 2,
                  }}
                >
                  World Class Services
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.1,
                    mb: 3,
                    color: "#1C274C",
                  }}
                >
                  We Provide Best <br />
                  <span style={{ color: "#3C50E0" }}>Customer</span> Experiences
                </Typography>
                <Typography
                  sx={{
                    color: "#606882",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    mb: 4,
                  }}
                >
                  We go beyond just selling products. From seamless browsing and
                  secure payments to lightning-fast delivery and dedicated
                  support, we're committed to making your shopping journey
                  exceptional.
                </Typography>
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
                    boxShadow: "0 10px 20px rgba(60, 80, 224, 0.2)",
                    "&:hover": {
                      bgcolor: "#2A3EB1",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  Explore Services
                </Button>
              </Box>
            </FadeInSection>
          </Grid>

          {/* Image Content */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <FadeInSection direction="right" delay={0.2}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, sm: 400, md: 500 },
                  width: "100%",
                }}
              >
                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    right: "10%",
                    width: "80%",
                    height: "80%",
                    bgcolor: "rgba(60, 80, 224, 0.05)",
                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    zIndex: 0,
                    animation: "morph 8s ease-in-out infinite",
                    "@keyframes morph": {
                      "0%": {
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      },
                      "50%": {
                        borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
                      },
                      "100%": {
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      },
                    },
                  }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Online Shopping Experience"
                  fill
                  style={{
                    objectFit: "contain",
                    zIndex: 1,
                    filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.15))",
                  }}
                />
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>

      {/* Services Grid */}
      <Box sx={{ bgcolor: "#F9FAFB", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <FadeInSection>
            <Box
              sx={{
                textAlign: "center",
                mb: { xs: 6, md: 8 },
                maxWidth: 700,
                mx: "auto",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#3C50E0",
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
                }}
              >
                Our Promise
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#1C274C",
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "3rem" },
                }}
              >
                Service You Can Trust
              </Typography>
              <Typography
                sx={{
                  color: "#606882",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  px: { xs: 2, md: 0 },
                }}
              >
                We prioritize your satisfaction with top-tier services designed
                to make your online shopping convenient, secure, and worry-free.
              </Typography>
            </Box>
          </FadeInSection>

          <Grid container spacing={{ xs: 4, md: 4 }}>
            {services.map((service, index) => (
              <Grid key={service.id} item xs={12} sm={6} md={4}>
                <FadeInSection delay={index * 0.1}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      border: "none",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                      transition: "all 0.3s ease",
                      overflow: "visible",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 60px rgba(60, 80, 224, 0.1)",
                        "& .icon-wrapper": {
                          transform: "scale(1.1)",
                          bgcolor: service.color,
                          color: "white",
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box
                        className="icon-wrapper"
                        sx={{
                          width: { xs: 60, md: 70 },
                          height: { xs: 60, md: 70 },
                          borderRadius: 3,
                          bgcolor: `${service.color}15`,
                          color: service.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {React.cloneElement(service.icon, {
                          size: 30, // Default size for mobile if needed, though icon prop has size
                          style: { width: "50%", height: "50%" },
                        })}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          color: "#1C274C",
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#606882",
                          lineHeight: 1.7,
                          mb: 3,
                          fontSize: { xs: "0.95rem", md: "1rem" },
                        }}
                      >
                        {service.description}
                      </Typography>
                      <Button
                        endIcon={<MdArrowForward />}
                        sx={{
                          color: service.color,
                          textTransform: "none",
                          fontWeight: 600,
                          p: 0,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          "&:hover": { bgcolor: "transparent", opacity: 0.8 },
                        }}
                      >
                        Read more
                      </Button>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid
          container
          spacing={{ xs: 6, md: 6 }}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={5}>
            <FadeInSection direction="left">
              <Typography
                variant="h6"
                sx={{
                  color: "#3C50E0",
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: { xs: 1, md: 1.5 },
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                How It Works
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#1C274C",
                  mb: 3,
                  fontSize: { xs: "1.8rem", md: "3rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                From Click to Doorstep
              </Typography>
              <Typography
                sx={{
                  color: "#606882",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 4,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Experience a streamlined shopping process designed for
                simplicity. We handle the logistics so you can enjoy your
                products sooner.
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 300, sm: 350, md: 400 },
                  width: "100%",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Delivery Process"
                  fill
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </Box>
            </FadeInSection>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ pl: { md: 6 }, mt: { xs: 4, md: 0 } }}>
              {process.map((step, index) => (
                <FadeInSection
                  key={index}
                  delay={index * 0.15}
                  direction="right"
                >
                  <Box
                    sx={{
                      display: "flex",
                      mb: 4,
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      textAlign: { xs: "center", sm: "left" },
                      "&:last-child": { mb: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        mr: { xs: 0, sm: 3 },
                        mb: { xs: 1, sm: 0 },
                        position: "relative",
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 900,
                          color: "rgba(60, 80, 224, 0.1)",
                          lineHeight: 0.8,
                          fontSize: { xs: "3rem", md: "3.75rem" },
                        }}
                      >
                        {step.step}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "#1C274C",
                          mb: 1,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#606882",
                          lineHeight: 1.6,
                          fontSize: { xs: "0.95rem", md: "1rem" },
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </FadeInSection>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action - Subscription */}
      <Subscription />

      <Footer />
    </Box>
  );
}
