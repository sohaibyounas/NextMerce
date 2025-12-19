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
    spaceBetween: 2,
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
      <main className="pt-[60px] pb-[70px] border-b-1 border-[#F2F3F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-[28px] font-[600] text-[#1C274C] mb-8 text-start next_arrow">
            User Feedbacks
          </h2>
          <div className="relative">
            {/* custom arrow */}
            <div className="absolute right-[-10px] top-[-50px] flex gap-2">
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
            <Slider ref={sliderRef} {...settings}>
              {UserData.map((user, index) => (
                // card
                <Card
                  key={index}
                  className="slick-slide"
                  sx={{
                    minWidth: 275,
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
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
              ))}
            </Slider>
          </div>
        </div>
      </main>

      {/* Subcription */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right bottom, #1d3f72, #1753cb, #5372d6, #6071c7, #7a82e4)",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={7} pl={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 700,
                  lineHeight: "38px",
                  maxWidth: "400px",
                  color: "#fff",
                  pt: "54px",
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
                  pb: "44px",
                }}
              >
                Register to receive news about the latest offers & discount
                codes
              </Typography>
            </Box>
          </Grid>
          <Grid size={5}>
            <Box
              pt={8}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box>
                <TextField
                  placeholder="Enter your email"
                  fullWidth
                  sx={{
                    ".css-16wblaj-MuiInputBase-input-MuiOutlinedInput-input": {
                      background: "white",
                      outline: "none",
                      padding: "5px 7px",
                      borderRadius: "20px",
                      border: "none",
                    },
                    ".css-quhxjy-MuiInputBase-root-MuiOutlinedInput-root": {
                      borderRadius: "16px",
                      "&:hover": {
                        borderColor: "#1c274c",
                      },
                    },
                    ".css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                  }}
                />
              </Box>

              <Box>
                <Button
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    textTransform: "none",
                    p: "5px 10px",
                    border: "transparent",
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
