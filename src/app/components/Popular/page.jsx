"use client";

import Seller from "../BestSeller/page";
import Header from "../Header/page";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import Footer from "../Footer/page";
import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PopularPage() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = [
    { href: "/", label: "Home" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      const label = decodeURIComponent(segment)
        .split("-")
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return { href, label };
    }),
  ];

  return (
    <>
      {/* header section */}
      <Header />

      {/* product details section */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#F3F4F6",
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 2, sm: 0 },
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "32px" },
              fontWeight: 700,
              color: "#1C274C",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Our Best Products
          </Typography>
          {/* dynamically route */}
          <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              if (isLast) {
                return (
                  <Typography key={crumb.href} color="text.primary">
                    {crumb.label}
                  </Typography>
                );
              }

              return (
                <MuiLink
                  key={crumb.href}
                  component={Link}
                  href={crumb.href}
                  underline="hover"
                  color="inherit"
                >
                  {crumb.label}
                </MuiLink>
              );
            })}
          </Breadcrumbs>
        </Box>

        <Seller data={cardData} />
      </Box>

      {/* footer section */}
      <Footer />
    </>
  );
}

const cardData = [
  {
    id: 1,
    image: Fitness,
    description: "This is the finess runner machine.",
    price: "$200",
    priceCut: "$150",
  },
  {
    id: 2,
    image: GrayLCD,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 3,
    image: Iphone,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 4,
    image: Juicer,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 5,
    image: Monitor,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 6,
    image: Screen,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
];
