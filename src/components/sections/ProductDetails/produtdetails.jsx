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
  MdCheckCircleOutline,
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
import {
  ScrollAnimatedSection,
  FadeInStagger,
  StaggerItem,
} from "@/components/shared/ScrollAnimations";

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
  name: "Apple AirPods Max",
  price: 450,
  originalPrice: 500,
  rating: 4,
  reviews: 1,
  inStock: true,
  colors: ["#A7C7E7", "#4B5563"], // Light blue, Dark gray
  tests: ["Test1", "Test2"],
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
  const [selectedTest, setSelectedTest] = useState(0);
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
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <ScrollAnimatedSection>
          <Grid container spacing={6}>
            {/* Product Images */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                {/* Main Image */}
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 300, sm: 500 },
                    bgcolor: "#F9FAFB",
                    borderRadius: 4,
                    mb: 4,
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
                    style={{ objectFit: "contain", padding: "2rem" }}
                  />
                  <IconButton
                    onClick={() => setIsLightboxOpen(true)}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "white",
                      boxShadow: 1,
                      "&:hover": {
                        bgcolor: "#f5f5f5",
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
                        bgcolor: "#F9FAFB",
                        borderRadius: 2,
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
                        style={{ objectFit: "contain", padding: "8px" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Product Info */}
            <Grid size={{ xs: 12, md: 6 }}>
              <FadeInStagger>
                <StaggerItem>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "24px", md: "32px" },
                        fontWeight: 700,
                        color: "#1C274C",
                        mb: 1,
                      }}
                    >
                      {productData.name}
                    </Typography>
                    <Chip
                      label="30% OFF"
                      color="primary"
                      size="small"
                      sx={{
                        bgcolor: "#3C50E0",
                        fontWeight: 600,
                        borderRadius: "20px",
                        px: 1,
                      }}
                    />
                  </Box>
                </StaggerItem>

                <StaggerItem>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Rating value={productData.rating} readOnly size="small" />
                    <Typography sx={{ color: "#606882", fontSize: "14px" }}>
                      ({productData.reviews} customer reviews)
                    </Typography>
                    {productData.inStock && (
                      <Typography
                        sx={{
                          color: "#10B981",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <MdCheckCircleOutline /> In Stock
                      </Typography>
                    )}
                  </Box>
                </StaggerItem>

                <StaggerItem>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#1C274C",
                      }}
                    >
                      Price:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#9CA3AF",
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
                </StaggerItem>

                <StaggerItem>
                  <Box
                    sx={{
                      mb: 4,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#4B5563",
                        fontSize: "15px",
                      }}
                    >
                      <MdCheckCircleOutline className="text-blue-600" /> Free
                      delivery available
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#4B5563",
                        fontSize: "15px",
                      }}
                    >
                      <MdCheckCircleOutline className="text-blue-600" /> Sales
                      30% Off Use Code: PROMO30
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#4B5563",
                        fontSize: "15px",
                      }}
                    >
                      <MdCheckCircleOutline className="text-blue-600" /> other
                      ofers
                    </Typography>
                  </Box>
                </StaggerItem>

                <Box sx={{ my: 3, borderTop: "1px solid #E5E7EB" }} />

                <StaggerItem>
                  <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    sx={{ mb: 3 }}
                  >
                    <Grid size={{ xs: 3, md: 2 }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#1C274C",
                        }}
                      >
                        Color:
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 9, md: 10 }}>
                      <Box sx={{ display: "flex", gap: 1.5 }}>
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
                              border: "2px solid white",
                              boxShadow:
                                selectedColor === index
                                  ? `0 0 0 2px ${color}`
                                  : "0 0 0 1px #E5E7EB",
                              transition: "all 0.2s",
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 3, md: 2 }}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#1C274C",
                        }}
                      >
                        Test:
                      </Typography>
                    </Grid>

                    <Grid size={{ xs: 9, md: 10 }}>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        {productData.tests.map((test, index) => (
                          <Chip
                            key={index}
                            label={test}
                            onClick={() => setSelectedTest(index)}
                            variant={
                              selectedTest === index ? "filled" : "outlined"
                            }
                            sx={{
                              bgcolor:
                                selectedTest === index
                                  ? "white"
                                  : "transparent",
                              color:
                                selectedTest === index ? "#1C274C" : "#6B7280",
                              border: "1px solid",
                              borderColor:
                                selectedTest === index ? "#3C50E0" : "#E5E7EB",
                              color:
                                selectedTest === index ? "#3C50E0" : "#6B7280",
                              fontWeight: selectedTest === index ? 600 : 400,
                              "&:hover": {
                                bgcolor: "white",
                                borderColor: "#3C50E0",
                                color:
                                  selectedTest === index
                                    ? "#1C274C"
                                    : "#6B7280",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </StaggerItem>

                <Box sx={{ my: 3, borderTop: "1px solid #E5E7EB" }} />

                <StaggerItem>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      mb: 4,
                      alignItems: "center",
                    }}
                  >
                    {/* Quantity Selector */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #E5E7EB",
                        borderRadius: "50px",
                        px: 1,
                        bgcolor: "white",
                      }}
                    >
                      <IconButton
                        onClick={() => handleQuantityChange("decrement")}
                        size="small"
                      >
                        <MdRemove />
                      </IconButton>
                      <Typography
                        sx={{
                          px: 2,
                          minWidth: 30,
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
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
                      disableElevation
                      sx={{
                        bgcolor: "#3C50E0",
                        color: "#fff",
                        textTransform: "none",
                        px: 6,
                        py: 1.2,
                        borderRadius: "50px",
                        fontWeight: 600,
                        "&:hover": {
                          bgcolor: "#2A3EB1",
                        },
                      }}
                    >
                      Purchase Now
                    </Button>

                    {/* Add to Cart Button */}
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{
                        bgcolor: "#1C274C",
                        color: "#fff",
                        textTransform: "none",
                        px: 5,
                        py: 1.2,
                        borderRadius: "50px",
                        fontWeight: 600,
                        "&:hover": {
                          bgcolor: "#111827",
                        },
                      }}
                    >
                      Add to Cart
                    </Button>

                    {/* Wishlist Button */}
                    <IconButton
                      sx={{
                        border: "1px solid #E5E7EB",
                        p: 1.5,
                        "&:hover": {
                          borderColor: "#3C50E0",
                          color: "#3C50E0",
                        },
                      }}
                    >
                      <MdFavoriteBorder />
                    </IconButton>
                  </Box>
                </StaggerItem>
              </FadeInStagger>
            </Grid>
          </Grid>
        </ScrollAnimatedSection>

        {/* Tabs Section */}
        <ScrollAnimatedSection delay={0.2} className="mt-16">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              mb: 4,
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 500,
                color: "#606882",
                mr: 4,
                "&.Mui-selected": {
                  color: "#1C274C",
                  fontWeight: 600,
                },
              },
              "& .MuiTabs-indicator": {
                bgcolor: "#1C274C",
                height: 3,
              },
            }}
          >
            <Tab label="Description" />
            <Tab label="Additional Information" />
            <Tab label="Reviews" />
          </Tabs>

          {/* Tab Panels */}
          <Box sx={{ py: 2 }}>
            {/* Description Tab */}
            {tabValue === 0 && (
              <FadeInStagger>
                <StaggerItem>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "#1C274C",
                      mb: 2,
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
                </StaggerItem>
              </FadeInStagger>
            )}

            {/* Additional Information Tab */}
            {tabValue === 1 && (
              <FadeInStagger>
                <StaggerItem>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#1C274C",
                    }}
                  >
                    {productData.specifications}
                  </Typography>
                </StaggerItem>
              </FadeInStagger>
            )}

            {/* Reviews Tab */}
            {tabValue === 2 && (
              <Grid container spacing={6}>
                {/* Reviews List */}
                <Grid item xs={12} md={6}>
                  <FadeInStagger>
                    <StaggerItem>
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
                    </StaggerItem>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      {reviewsData.map((review) => (
                        <StaggerItem key={review.id}>
                          <Box
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
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{ fontSize: "14px", color: "#606882" }}
                                  >
                                    {review.role}
                                  </Typography>
                                  <Rating
                                    value={review.rating}
                                    readOnly
                                    size="small"
                                  />
                                </Box>
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                fontSize: "14px",
                                color: "#4B5563",
                                lineHeight: 1.6,
                              }}
                            >
                              {review.comment}
                            </Typography>
                          </Box>
                        </StaggerItem>
                      ))}
                    </Box>
                  </FadeInStagger>
                </Grid>

                {/* Add Review Form */}
                <Grid item xs={12} md={6}>
                  <ScrollAnimatedSection delay={0.2}>
                    <Box sx={{ bgcolor: "#F9FAFB", p: 4, borderRadius: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "20px",
                          fontWeight: 600,
                          color: "#1C274C",
                          mb: 1,
                        }}
                      >
                        Add a Review
                      </Typography>

                      <Typography
                        sx={{ fontSize: "14px", color: "#606882", mb: 3 }}
                      >
                        Your email address will not be published. Required
                        fields are marked{" "}
                        <span style={{ color: "#EF4444" }}>*</span>
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
                            Your Rating{" "}
                            <span style={{ color: "#EF4444" }}>*</span>
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
                              bgcolor: "white",
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 2,
                              },
                            }}
                          />
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
                                bgcolor: "white",
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
                                bgcolor: "white",
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
                          disableElevation
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
                    </Box>
                  </ScrollAnimatedSection>
                </Grid>
              </Grid>
            )}
          </Box>
        </ScrollAnimatedSection>
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
              color: "white",
            }}
          >
            <MdClose size={32} />
          </IconButton>

          {/* Nav Buttons */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 20,
              color: "white",
            }}
          >
            <MdArrowBack size={40} />
          </IconButton>

          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 20,
              color: "white",
            }}
          >
            <MdArrowForward size={40} />
          </IconButton>

          {/* Main Image */}
          <Box
            sx={{
              width: "90%",
              height: "80%",
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
        </Box>
      )}

      {/* footer */}
      <Footer />
    </>
  );
}
