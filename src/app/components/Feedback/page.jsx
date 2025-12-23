"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import user2 from "@/assets/general/image.jpg";
import { FaStar } from "react-icons/fa6";
import "./syle.css";
import Image from "next/image";

export default function Feedback() {
  const sliderRef = useRef(null);
  // slider styles
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const UserData = [
    {
      id: 1,
      star: (
        <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FaStar color="yellow" /> <FaStar color="yellow" />
          <FaStar color="yellow" /> <FaStar color="yellow" />
        </span>
      ),
      Text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dui, nostra sagittis turpis platea donec sem vel, nascetur cras facilisi nibh sapien class placerat.",
      image: user2,
      name: "Sohaib Younas",
      field: "Front End",
    },
    {
      id: 2,
      star: (
        <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FaStar color="yellow" /> <FaStar color="yellow" />
          <FaStar color="yellow" /> <FaStar color="yellow" />
        </span>
      ),
      Text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dui, nostra sagittis turpis platea donec sem vel, nascetur cras facilisi nibh sapien class placerat.",
      image: user2,
      name: "Wilson Dias",
      field: "Backend Developer",
    },
    {
      id: 3,
      star: (
        <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FaStar color="yellow" /> <FaStar color="yellow" />
          <FaStar color="yellow" /> <FaStar color="yellow" />
        </span>
      ),
      Text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dui, nostra sagittis turpis platea donec sem vel, nascetur cras facilisi nibh sapien class placerat.",
      image: user2,
      name: "Dewis Dorwart",
      field: "Front End",
    },
    {
      id: 4,
      star: (
        <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FaStar color="yellow" /> <FaStar color="yellow" />
          <FaStar color="yellow" /> <FaStar color="yellow" />
        </span>
      ),
      Text: "Lorem ipsum dolor sit amet consectetur adipiscing elit dui, nostra sagittis turpis platea donec sem vel, nascetur cras facilisi nibh sapien class placerat.",
      image: user2,
      name: "Willson Dias",
      field: "Back End Developer",
    },
  ];

  return (
    <>
      <main className="pt-10 md:pt-20 pb-10 md:pb-20 border-b border-[#F2F3F8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C274C] text-center sm:text-start next_arrow">
              User Feedbacks
            </h2>
            {/* custom arrow */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="border border-[#E5E7EB] rounded-full cursor-pointer p-[7px] hover:bg-sky-700 delay-150 duration-300 ease-in-out"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={handleNext}
                className="border border-[#E5E7EB] rounded-full cursor-pointer p-[7px] hover:bg-sky-700 delay-150 duration-300 ease-in-out"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {UserData.map((user, index) => (
                // card
                <Box key={index} sx={{ px: 1 }}>
                  <Card
                    sx={{
                      minWidth: "100%",
                      boxShadow: "none",
                      border: "1px solid #E5E7EB",
                      borderRadius: "10px",
                    }}
                  >
                    <CardContent
                      sx={{
                        "&:last-child": {
                          paddingBottom: 2,
                        },
                      }}
                    >
                      <Typography sx={{ pb: "20px" }}>{user.star}</Typography>
                      <Typography
                        sx={{
                          color: "#1c274c",
                          fontSize: 14,
                          pb: "20px",
                          fontWeight: 400,
                        }}
                      >
                        {user.Text}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Image
                          src={user.image}
                          alt={user.name}
                          className="w-[40px] h-[40px] rounded-full"
                        />
                        <Box>
                          <Typography
                            sx={{
                              color: "#1c274c",
                              fontSize: 14,
                              fontWeight: 500,
                              lineHeight: "24px",
                            }}
                          >
                            {user.name}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#1c274c",
                              fontSize: 14,
                              fontWeight: 400,
                              lineHeight: "22px",
                            }}
                          >
                            {user.field}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </div>
        </div>
      </main>

      {/* Subscription */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right bottom, #1d3f72, #1753cb, #5372d6, #6071c7, #7a82e4)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { xs: 3, md: 6 }, pr: 3 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "30px" },
                  fontWeight: 700,
                  lineHeight: { xs: "32px", md: "38px" },
                  maxWidth: { xs: "100%", md: "400px" },
                  color: "#fff",
                  pt: { xs: 4, md: "54px" },
                  pb: "24px",
                }}
              >
                Don't Miss Out Latest Trends & Offers
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#fff",
                  pb: { xs: 2, md: "44px" },
                }}
              >
                Register to receive news about the latest offers & discount
                codes
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                pt: { xs: 2, md: 8 },
                pb: { xs: 5, md: 0 },
                px: { xs: 3, md: 0 },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: "20px",
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                <TextField
                  placeholder="Enter your email"
                  sx={{
                    width: { xs: "100%", sm: "300px" },
                    ".MuiInputBase-root": {
                      background: "white",
                      borderRadius: "20px",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>

              <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                <Button
                  fullWidth
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    textTransform: "none",
                    px: 4,
                    py: 1,
                    borderRadius: "20px",
                    background: "#3C50E0",
                    color: "#fff",
                    "&:hover": {
                      background: "#1c3fb7",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
