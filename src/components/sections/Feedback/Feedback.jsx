"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
import Subscription from "../Subscription/subscription";

export default function Feedback() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
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
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {UserData.map((user, index) => (
                <SwiperSlide key={index}>
                  <Card
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>

      {/* Subcription */}
      <Subscription />
    </>
  );
}
