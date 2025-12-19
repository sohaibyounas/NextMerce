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
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          pr: 1,
        }}
      >
        <Box sx={{ pt: "90px", pb: "48px", pl: 1 }}>
          <Typography
            sx={{
              fontSize: "28px",
              lineHeight: "40px",
              fontWeight: 600,
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
            p: "0px 10px",
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
      <Grid container spacing={2}>
        {safeData.map((card) => (
          <Grid key={card.id} size={{ xs: 6, sm: 4 }}>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: 0,
                borderRadius: "10px",
                backgroundColor: "#F6F7FB",
              }}
            >
              <CardContent
                className="cartcontent"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  position: "relative",
                  p: 0,
                  "&:last-child": {
                    paddingBottom: 0,
                  },
                }}
              >
                {/* card details */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mt: 4,
                    p: "0px 5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1C274C",
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "28px",
                        color: "#1c274c",
                      }}
                    >
                      {card.price}
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: "28px",
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
                    p: 2,
                  }}
                >
                  <Image
                    src={card.image}
                    alt="image"
                    style={{ width: "200px", height: "200px" }}
                  />
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
