"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardContent,
  Icon,
  Tooltip,
  Typography,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

export default function Seller({ data = [] }) {
  const router = useRouter();
  const safeData = Array.isArray(data) ? data : [];
  return (
    <Box>
      {/* title and view button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          pr: 1,
        }}
      >
        <Box
          sx={{
            pt: { xs: 8, md: 10 },
            pb: { xs: 3, md: 6 },
            pl: 1,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              lineHeight: "40px",
              fontWeight: 700,
              color: "#1C274C",
              cursor: "pointer",
            }}
          >
            Best Seller
          </Typography>
        </Box>

        {/* view details button */}
        <Button
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "20px",
            textTransform: "none",
            p: "5px 20px",
            "&:hover": {
              background: "#1c274c",
              color: "#fff",
            },
          }}
          onClick={() => router.push("/shop-without-sidebar")}
        >
          View All
        </Button>
      </Box>

      {/* Product Details */}
      <Grid container spacing={3}>
        {safeData.map((card) => (
          <Grid key={card.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{
                width: "100%",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                borderRadius: "15px",
                backgroundColor: "#F6F7FB",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent
                className="cartcontent"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  p: 2,
                  "&:last-child": {
                    paddingBottom: 2,
                  },
                }}
              >
                {/* card details */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mt: 2,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#1C274C",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#3C50E0",
                      }}
                    >
                      {card.price}
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#8C92A4",
                      }}
                    >
                      {card.priceCut}
                    </Typography>
                  </Box>
                </Box>
                {/* card image */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    p: 2,
                    minHeight: "200px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "160px",
                      height: "160px",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt="product image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>

                {/* cart details */}
                <Box
                  className="cardbutton"
                  sx={{
                    width: "fit-content",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Tooltip
                    title="Quick View"
                    enterDelay={100}
                    leaveDelay={200}
                    placement="left-start"
                    slotProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "#fff",
                          color: "#000",
                          borderRadius: "8px",
                          fontSize: "10px",
                          fontWeight: 500,
                        },
                      },
                    }}
                  >
                    <Icon
                      className="hiddenbutton"
                      sx={{
                        mr: 2,
                        cursor: "pointer",
                        boxShadow: 1,
                        borderRadius: "50%",
                        p: "4px",
                        color: "#000",
                        "&:hover": {
                          background: "#5C5CFF",
                        },
                      }}
                    >
                      <CiHeart size={15} />
                    </Icon>
                  </Tooltip>
                  <Tooltip
                    title="Add to Cart"
                    enterDelay={100}
                    leaveDelay={200}
                    placement="left-start"
                    slotProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "#fff",
                          color: "#000",
                          borderRadius: "8px",
                          fontSize: "10px",
                          fontWeight: 500,
                        },
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        mr: 2,
                        cursor: "pointer",
                        boxShadow: 1,
                        borderRadius: "50%",
                        p: "6px 4px",
                        color: "#000",
                        "&:hover": {
                          background: "#5C5CFF",
                        },
                      }}
                    >
                      <IoCartOutline size={15} />
                    </Icon>
                  </Tooltip>
                  <Tooltip
                    title="Add to Wishlist"
                    enterDelay={100}
                    leaveDelay={200}
                    placement="left-start"
                    slotProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "#fff",
                          color: "#000",
                          borderRadius: "8px",
                          fontSize: "10px",
                          fontWeight: 500,
                        },
                      },
                    }}
                  >
                    <Icon
                      className="hiddenbutton"
                      sx={{
                        cursor: "pointer",
                        boxShadow: 1,
                        borderRadius: "50%",
                        p: "4px",
                        color: "#000",
                        "&:hover": {
                          background: "#5C5CFF",
                        },
                      }}
                    >
                      <FiEye size={15} />
                    </Icon>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
