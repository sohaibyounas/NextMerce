"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Subscription from "../Subscription/subscription";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Rating,
  Tab,
  Tabs,
  TextField,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import {
  MdAdd,
  MdRemove,
  MdFavoriteBorder,
  MdShoppingCart,
  MdFullscreen,
  MdClose,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";
import Image from "next/image";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import SamrtWatch from "@/assets/newarrivals/smartwatch.png";
import Tablet from "@/assets/newarrivals/tablet.png";

// images array
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
  {
    id: 7,
    image: SamrtWatch,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 8,
    image: Tablet,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
];

const productData = {
  id: 1,
  name: "Indoor Steel Adjustable Silent Treadmill Home Fitness",
  price: 488,
  originalPrice: 599,
  rating: 4,
  reviews: 26,
  inStock: true,
  colors: ["#000000", "#808080"],
  description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  specifications: "No additional information available!",
};

const reviewsData = [
  {
    id: 1,
    name: "Johurul Haque",
    role: "User",
    rating: 2,
    comment:
      "Don't buy it. You will feel motivated at first, but after a few days, this will be left around the house without you ever touching it. That's just how it is. Great product, but you won't use it.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Tate House",
    role: "User",
    rating: 5,
    comment:
      "Animi deserunt nesciunt do at adipisicing reprehenderit eaque et.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "sdsaff",
    role: "User",
    rating: 5,
    comment: "dasdasddd",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev + 1) % cardData.length);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log({
      rating: reviewRating,
      comment: reviewComment,
      name: reviewName,
      email: reviewEmail,
    });
    // Reset form
    setReviewRating(0);
    setReviewComment("");
    setReviewName("");
    setReviewEmail("");
  };

  return (
    <>
      {/* header */}
      <Header />

      {/* Shop Details */}
      <Breadcrumb title="Shop Details" />

      {/* Product Details */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Product Main Section */}
        <Grid container spacing={2}>
          {/* Product Images */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Main Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 400 },
                  bgcolor: "#f5f5f5",
                  borderRadius: 2,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={cardData[selectedImage]?.image}
                  alt={productData.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
                <IconButton
                  onClick={() => setIsLightboxOpen(true)}
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    bgcolor: "rgba(255,255,255,0.9)",
                    boxShadow: 1,
                    "&:hover": {
                      bgcolor: "#fff",
                    },
                  }}
                >
                  <MdFullscreen size={24} />
                </IconButton>
              </Box>

              {/* Thumbnail Images */}
              <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
                {cardData.map((item, index) => (
                  <Box
                    key={item.id}
                    onClick={() => setSelectedImage(index)}
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "#f5f5f5",
                      borderRadius: 1,
                      cursor: "pointer",
                      border:
                        selectedImage === index
                          ? "2px solid #3C50E0"
                          : "2px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      "&:hover": {
                        borderColor: "#3C50E0",
                      },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Product Name */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 600,
                  color: "#1C274C",
                  mb: 2,
                }}
              >
                {productData.name}
              </Typography>

              {/* Rating and Reviews */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Rating value={productData.rating} readOnly size="small" />
                <Typography sx={{ color: "#606882", fontSize: "14px" }}>
                  ({productData.reviews} Reviews)
                </Typography>
                {productData.inStock && (
                  <Chip
                    label="In Stock"
                    size="small"
                    sx={{
                      bgcolor: "#10B981",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                )}
              </Box>

              {/* Price */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#606882",
                  }}
                >
                  Price:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#EF4444",
                    textDecoration: "line-through",
                  }}
                >
                  ${productData.originalPrice}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#3C50E0",
                  }}
                >
                  ${productData.price}
                </Typography>
              </Box>

              {/* Color Selection */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1C274C",
                    mb: 1,
                  }}
                >
                  Color:
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {productData.colors.map((color, index) => (
                    <Box
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: color,
                        cursor: "pointer",
                        border:
                          selectedColor === index
                            ? "3px solid #3C50E0"
                            : "2px solid #E5E7EB",
                        "&:hover": {
                          borderColor: "#3C50E0",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Quantity and Actions */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mb: 3,
                }}
              >
                {/* Quantity Selector */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  <IconButton
                    onClick={() => handleQuantityChange("decrement")}
                    size="small"
                  >
                    <MdRemove />
                  </IconButton>
                  <Typography sx={{ px: 2, minWidth: 40, textAlign: "center" }}>
                    {quantity}
                  </Typography>
                  <IconButton
                    onClick={() => handleQuantityChange("increment")}
                    size="small"
                  >
                    <MdAdd />
                  </IconButton>
                </Box>

                {/* Purchase Now Button */}
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#3C50E0",
                    color: "#fff",
                    textTransform: "none",
                    px: 4,
                    borderRadius: "8px",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      bgcolor: "#2A3EB1",
                    },
                  }}
                >
                  Purchase Now
                </Button>

                {/* Add to Cart Button */}
                <Button
                  variant="outlined"
                  startIcon={<MdShoppingCart />}
                  sx={{
                    borderColor: "#1C274C",
                    color: "#1C274C",
                    textTransform: "none",
                    px: 3,
                    borderRadius: "8px",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      borderColor: "#3C50E0",
                      bgcolor: "#f5f7ff",
                    },
                  }}
                >
                  Add to Cart
                </Button>

                {/* Wishlist Button */}
                <IconButton
                  sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    width: { xs: "100%", sm: "auto" },
                    "&:hover": {
                      borderColor: "#3C50E0",
                      bgcolor: "#f5f7ff",
                    },
                  }}
                >
                  <MdFavoriteBorder />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Tabs Section */}
        <Box sx={{ mt: 6 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 500,
                color: "#606882",
                "&.Mui-selected": {
                  color: "#3C50E0",
                },
              },
              "& .MuiTabs-indicator": {
                bgcolor: "#3C50E0",
              },
            }}
          >
            <Tab label="Description" />
            <Tab label="Additional Information" />
            <Tab label="Reviews" />
          </Tabs>

          {/* Tab Panels */}
          <Box sx={{ py: 4 }}>
            {/* Description Tab */}
            {tabValue === 0 && (
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#1C274C",
                    mb: 3,
                  }}
                >
                  Specifications:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "#606882",
                  }}
                >
                  {productData.description}
                </Typography>
              </Box>
            )}

            {/* Additional Information Tab */}
            {tabValue === 1 && (
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1C274C",
                  }}
                >
                  {productData.specifications}
                </Typography>
              </Box>
            )}

            {/* Reviews Tab */}
            {tabValue === 2 && (
              <Grid container spacing={4}>
                {/* Reviews List */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1C274C",
                      mb: 3,
                    }}
                  >
                    {reviewsData.length} Reviews for this product
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {reviewsData.map((review) => (
                      <Box
                        key={review.id}
                        sx={{
                          p: 3,
                          border: "1px solid #E5E7EB",
                          borderRadius: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Avatar src={review.avatar} alt={review.name} />
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#1C274C",
                              }}
                            >
                              {review.name}
                            </Typography>
                            <Typography
                              sx={{ fontSize: "14px", color: "#606882" }}
                            >
                              {review.role}
                            </Typography>
                          </Box>
                          <Rating value={review.rating} readOnly size="small" />
                        </Box>
                        <Typography sx={{ fontSize: "14px", color: "#1C274C" }}>
                          {review.comment}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>

                {/* Add Review Form */}
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#1C274C",
                      mb: 2,
                    }}
                  >
                    Add a Review
                  </Typography>

                  <Typography
                    sx={{ fontSize: "14px", color: "#606882", mb: 3 }}
                  >
                    Your email address will not be published. Required fields
                    are marked <span style={{ color: "#EF4444" }}>*</span>
                  </Typography>

                  <Box component="form" onSubmit={handleSubmitReview}>
                    {/* Rating */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#1C274C",
                          mb: 1,
                        }}
                      >
                        Your Rating <span style={{ color: "#EF4444" }}>*</span>
                      </Typography>
                      <Rating
                        value={reviewRating}
                        onChange={(event, newValue) => {
                          setReviewRating(newValue);
                        }}
                        size="large"
                      />
                    </Box>

                    {/* Comment */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#1C274C",
                          mb: 1,
                        }}
                      >
                        Comment
                      </Typography>
                      <TextField
                        multiline
                        rows={4}
                        fullWidth
                        placeholder="Your review"
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#606882",
                          textAlign: "right",
                          mt: 0.5,
                        }}
                      >
                        0/250
                      </Typography>
                    </Box>

                    {/* Name and Email */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#1C274C",
                            mb: 1,
                          }}
                        >
                          Name <span style={{ color: "#EF4444" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          placeholder="Your name"
                          value={reviewName}
                          onChange={(e) => setReviewName(e.target.value)}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#1C274C",
                            mb: 1,
                          }}
                        >
                          Email <span style={{ color: "#EF4444" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          type="email"
                          placeholder="Your email"
                          value={reviewEmail}
                          onChange={(e) => setReviewEmail(e.target.value)}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#3C50E0",
                        color: "#fff",
                        textTransform: "none",
                        px: 4,
                        py: 1.5,
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: 500,
                        width: { xs: "100%", sm: "auto" },
                        "&:hover": {
                          bgcolor: "#2A3EB1",
                        },
                      }}
                    >
                      Submit Review
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>

      {/* subscription */}
      <Subscription />

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(5px)",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setIsLightboxOpen(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#fff",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <MdClose size={32} />
          </IconButton>

          {/* Previous Button */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 20,
              color: "#fff",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
              display: { xs: "none", md: "flex" },
            }}
          >
            <MdArrowBack size={48} />
          </IconButton>

          {/* Main Lightbox Image */}
          <Box
            sx={{
              width: { xs: "90%", md: "80%" },
              height: { xs: "60%", md: "80%" },
              position: "relative",
            }}
          >
            <Image
              src={cardData[selectedImage]?.image}
              alt={productData.name}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 20,
              color: "#fff",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
              display: { xs: "none", md: "flex" },
            }}
          >
            <MdArrowForward size={48} />
          </IconButton>

          {/* Mobile Navigation (Bottom) */}
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              display: { xs: "flex", md: "none" },
              gap: 4,
            }}
          >
            <IconButton onClick={handlePrevImage} sx={{ color: "#fff" }}>
              <MdArrowBack size={32} />
            </IconButton>
            <IconButton onClick={handleNextImage} sx={{ color: "#fff" }}>
              <MdArrowForward size={32} />
            </IconButton>
          </Box>
        </Box>
      )}

      {/* footer */}
      <Footer />
    </>
  );
}
