"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Icon,
  MenuItem,
  Paper,
  Select,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import { FiChevronDown, FiGrid, FiList, FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import { useAppTheme } from "@/hooks/useAppTheme";

export default function ShopWithSidebar() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("latest");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 999]);
  const { mounted, isDark } = useAppTheme();

  if (!mounted) return null;

  // saved calculated value
  const products = useMemo(
    () => [
      {
        id: 1,
        title: "Portable Electric Grinder Maker",
        category: "Home Appliances",
        sizes: ["XL"],
        colors: ["#000000"],
        price: 777,
        oldPrice: 888,
        image: Juicer,
      },
      {
        id: 2,
        title: "Indoor Steel Adjustable Silent Treadmill",
        category: "Health & Sports",
        sizes: ["XXL"],
        colors: ["#6B7280"],
        price: 888,
        oldPrice: 999,
        image: Fitness,
      },
      {
        id: 3,
        title: "Rangs 43 Inch Frameless FHD",
        category: "Televisions",
        sizes: ["XM"],
        colors: ["#111827"],
        price: 700,
        oldPrice: 800,
        image: Monitor,
      },
      {
        id: 4,
        title: "iPhone 16 Pro Max",
        category: "Mobile & Tablets",
        sizes: ["SM"],
        colors: ["#2563EB"],
        price: 899,
        oldPrice: 930,
        image: Iphone,
      },
      {
        id: 5,
        title: "Apple AirPods Max",
        category: "Laptop & PC",
        sizes: ["XL"],
        colors: ["#9CA3AF"],
        price: 450,
        oldPrice: 500,
        image: GrayLCD,
      },
      {
        id: 6,
        title: "LCD Screen",
        category: "Games & Videos",
        sizes: ["XXL"],
        colors: ["#EF4444"],
        price: 89,
        oldPrice: 99,
        image: Screen,
      },
    ],
    []
  );

  const categoryCounts = useMemo(() => {
    const counts = new Map();
    for (const p of products) {
      counts.set(p.category, (counts.get(p.category) || 0) + 1);
    }
    return counts;
  }, [products]);

  const allCategories = useMemo(
    () =>
      Array.from(categoryCounts.entries()).map(([label, count]) => ({
        label,
        count,
      })),
    [categoryCounts]
  );

  const sizes = ["XL", "XXL", "SM", "XM"];
  const colors = [
    "#000000",
    "#FFFFFF",
    "#16A34A",
    "#2563EB",
    "#6B7280",
    "#9CA3AF",
    "#EF4444",
    "#F9A8D4",
  ];

  const filteredProducts = useMemo(() => {
    const matchesFilters = (p) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(p.category);
      const inSizes =
        selectedSizes.length === 0 ||
        p.sizes.some((s) => selectedSizes.includes(s));
      const inColors =
        selectedColors.length === 0 ||
        p.colors.some((c) => selectedColors.includes(c));
      const inPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return inCategory && inSizes && inColors && inPrice;
    };

    const list = products.filter(matchesFilters);

    if (sort === "priceLow") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceHigh")
      return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [
    priceRange,
    products,
    selectedCategories,
    selectedColors,
    selectedSizes,
    sort,
  ]);

  const onToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const onToggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const onToggleColor = (hex) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex]
    );
  };

  const onClearAll = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 999]);
    setSort("latest");
    setView("grid");
  };

  // menuitem styles
  const menuItemSx = (isDark) => ({
    color: isDark ? "#f1f5f9" : "#111827",

    "&:hover": {
      backgroundColor: isDark ? "#334155" : "#f3f4f6",
    },

    "&.Mui-selected": {
      backgroundColor: isDark ? "#475569" : "#e5e7eb",
    },

    "&.Mui-selected:hover": {
      backgroundColor: isDark ? "#64748b" : "#d1d5db",
    },
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* breadcrumb */}
        <Breadcrumb title="Explore All Products" />

        {/* shop details  */}
        <Box
          sx={{
            py: 3,
            backgroundColor: isDark ? "#1E293B" : "#F3F4F6",
            overflow: "hidden",
          }}
        >
          {/* sidebar  + products view */}
          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "320px 1fr" },
              gap: 3,
              alignItems: "start",
            }}
          >
            {/* sidebar filters */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* filters */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#fff" : "#111827",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Filters:</Typography>
                <Button
                  onClick={onClearAll}
                  variant="text"
                  sx={{
                    textTransform: "none",
                    color: isDark ? "#fff" : "#111827",
                    ...(isDark && {
                      "&:hover": {
                        border: "1px solid #fff",
                      },
                    }),
                  }}
                >
                  Clean All
                </Button>
              </Paper>

              {/* category */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  background: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#fff" : "#111827",
                }}
              >
                <Accordion
                  defaultExpanded
                  elevation={0}
                  disableGutters
                  sx={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    "& .MuiAccordionSummary-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "& .MuiAccordionDetails-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        color: "inherit",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Category</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                      }}
                    >
                      {allCategories.map((c) => (
                        <Box
                          key={c.label}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedCategories.includes(c.label)}
                                onChange={() => onToggleCategory(c.label)}
                                sx={{
                                  color: isDark ? "#fff" : "#111827",
                                  "&.Mui-checked": {
                                    color: isDark ? "#fff" : "#111827",
                                  },
                                }}
                              />
                            }
                            label={c.label}
                          />
                          <Box
                            sx={{
                              minWidth: 22,
                              height: 18,
                              px: 1,
                              borderRadius: "40%",
                              backgroundColor: isDark ? "#F3F4F6" : "#1C274C",
                              color: isDark ? "#111827" : "#FFFFFF",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 12,
                            }}
                          >
                            {c.count}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>

              {/* size */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  background: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#fff" : "#111827",
                }}
              >
                <Accordion
                  defaultExpanded
                  elevation={0}
                  disableGutters
                  sx={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    "& .MuiAccordionSummary-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "& .MuiAccordionDetails-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        color: "inherit",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Size</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {sizes.map((s) => {
                        const selected = selectedSizes.includes(s);
                        return (
                          <Chip
                            key={s}
                            label={s}
                            clickable
                            onClick={() => onToggleSize(s)}
                            sx={{
                              borderRadius: 999,
                              backgroundColor: selected ? "#1C274C" : "#F3F4F6",
                              color: selected ? "#FFFFFF" : "#111827",
                              fontWeight: 600,
                              "&:hover": { color: "#fff" },
                            }}
                          />
                        );
                      })}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>

              {/* color */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  background: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#fff" : "#111827",
                }}
              >
                <Accordion
                  defaultExpanded
                  elevation={0}
                  disableGutters
                  sx={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    "& .MuiAccordionSummary-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "& .MuiAccordionDetails-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        color: "inherit",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Colors</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {colors.map((hex) => {
                        const selected = selectedColors.includes(hex);
                        return (
                          <Box
                            key={hex}
                            onClick={() => onToggleColor(hex)}
                            sx={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              backgroundColor: hex,
                              border: selected
                                ? "2px solid #1C274C"
                                : hex === "#FFFFFF"
                                ? "1px solid #D1D5DB"
                                : "1px solid transparent",
                              cursor: "pointer",
                            }}
                          />
                        );
                      })}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>

              {/* price */}
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  background: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#fff" : "#111827",
                }}
              >
                <Accordion
                  defaultExpanded
                  elevation={0}
                  disableGutters
                  sx={{
                    backgroundColor: "transparent",
                    color: "inherit",
                    "& .MuiAccordionSummary-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "& .MuiAccordionDetails-root": {
                      backgroundColor: "transparent",
                      color: "inherit",
                    },
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<FiChevronDown />}
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        color: "inherit",
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Price</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Slider
                      value={priceRange}
                      onChange={(_, v) => setPriceRange(v)}
                      valueLabelDisplay="auto"
                      min={0}
                      max={999}
                      sx={{ color: isDark ? "#fff" : "1C274C" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #E5E7EB",
                          borderRadius: 1,
                          px: 1,
                          py: 0.5,
                          fontSize: 12,
                          color: isDark ? "#fff" : "#111827",
                        }}
                      >
                        $ {priceRange[0]}
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid #E5E7EB",
                          borderRadius: 1,
                          px: 1,
                          py: 0.5,
                          fontSize: 12,
                          color: isDark ? "#fff" : "#111827",
                        }}
                      >
                        $ {priceRange[1]}
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Box>

            {/* products view grid/ full */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* products */}
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                  background: isDark ? "#1E293B" : "#F3F4F6",
                  color: isDark ? "#fff" : "1C274C",
                }}
              >
                {/* right side header, dropdown */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    flexWrap: "wrap",
                    color: "inherit",
                  }}
                >
                  <FormControl
                    size="small"
                    sx={{
                      minWidth: 180,
                      backgroundColor: isDark ? "#1C274C" : "#ffffff",
                      "& .MuiOutlinedInput-root": {
                        padding: 0,
                      },
                    }}
                  >
                    <Select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            backgroundColor: isDark ? "#1E293B" : "#ffffff",
                            borderRadius: 1,
                            mt: 0.5,
                          },
                        },
                        // remove extra space
                        MenuListProps: {
                          sx: {
                            padding: 0,
                          },
                        },
                      }}
                      sx={{
                        backgroundColor: isDark ? "#334155" : "#ffffff",
                        color: isDark ? "#f1f5f9" : "#111827",
                        borderRadius: 1,

                        "& .MuiSelect-select": {
                          padding: "8px 32px 8px 12px",
                          display: "flex",
                          alignItems: "center",
                        },

                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: isDark ? "#475569" : "#D1D5DB",
                        },

                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: isDark ? "#60a5fa" : "#3b82f6",
                          borderWidth: "2px",
                        },

                        "& .MuiSvgIcon-root": {
                          color: isDark ? "#94a3b8" : "#6b7280",
                        },
                      }}
                    >
                      <MenuItem value="latest" sx={menuItemSx(isDark)}>
                        Latest Products
                      </MenuItem>

                      <MenuItem value="priceLow" sx={menuItemSx(isDark)}>
                        Price: Low to High
                      </MenuItem>

                      <MenuItem value="priceHigh" sx={menuItemSx(isDark)}>
                        Price: High to Low
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <Typography
                    sx={{
                      color: "inherit",
                      fontWeight: 500,
                    }}
                  >
                    Showing {filteredProducts.length} of {products.length}{" "}
                    Products
                  </Typography>
                </Box>

                {/* list & detail view */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Tooltip title="Grid View" arrow>
                    <Box
                      onClick={() => setView("grid")}
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        border: "1px solid #E5E7EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundColor: view === "grid" ? "#1C274C" : "#fff",
                        color: view === "grid" ? "#FFFFFF" : "#111827",

                        "&:hover": {
                          backgroundColor:
                            view === "grid" ? "#1C274C" : "#F3F4F6",
                        },
                      }}
                    >
                      <FiGrid />
                    </Box>
                  </Tooltip>

                  <Tooltip title="List View" arrow>
                    <Box
                      onClick={() => setView("list")}
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        border: "1px solid #E5E7EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        backgroundColor: view === "list" ? "#1C274C" : "#fff",
                        color: view === "list" ? "#FFFFFF" : "#111827",

                        "&:hover": {
                          backgroundColor:
                            view === "list" ? "#1C274C" : "#F3F4F6",
                        },
                      }}
                    >
                      <FiList />
                    </Box>
                  </Tooltip>
                </Box>
              </Paper>

              {view === "grid" ? (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "1fr 1fr",
                      lg: "1fr 1fr 1fr",
                    },
                    gap: 2,
                  }}
                >
                  {filteredProducts.map((p) => (
                    <Card
                      key={p.id}
                      className="cartcontent"
                      elevation={0}
                      sx={{
                        borderRadius: 2,
                        border: "1px solid #E5E7EB",
                        overflow: "visible",
                        backgroundColor: isDark ? "#1E293B" : "#FFFFFF",
                        color: isDark ? "#fff" : "#FFFFFF",
                        position: "relative",
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 0,
                          "&:last-child": {
                            paddingBottom: 0,
                          },
                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: 2,
                            minHeight: 220,
                          }}
                        >
                          <Image
                            src={p.image}
                            alt={p.title}
                            style={{
                              width: "180px",
                              height: "180px",
                              objectFit: "contain",
                            }}
                          />
                        </Box>

                        {/* product title, price */}
                        <Box sx={{ p: 2 }}>
                          <Typography
                            sx={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: isDark ? "#fff" : "#1C274C",
                              mb: 1,
                            }}
                          >
                            {p.title}
                          </Typography>

                          {/* old, new price */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {/* old price */}
                            <Typography
                              sx={{
                                textDecoration: "line-through",
                                color: isDark ? "#fff" : "#8C92A4",
                                fontWeight: 600,
                                fontSize: 14,
                              }}
                            >
                              ${p.oldPrice}
                            </Typography>

                            {/* new price */}
                            <Typography
                              sx={{
                                color: isDark ? "#fff" : "#1C274C",
                                fontWeight: 800,
                                fontSize: 14,
                              }}
                            >
                              ${p.price}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Cart Options */}
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
                          {/* Wishlist */}
                          <Tooltip
                            title="Add to Wishlist"
                            enterDelay={100}
                            leaveDelay={200}
                            placement="left-start"
                            slotProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: isDark ? "#334155" : "#fff",
                                  color: isDark ? "#fff" : "#000",
                                  borderRadius: "8px",
                                  fontSize: "10px",
                                  fontWeight: 500,
                                },
                              },
                            }}
                          >
                            <Icon
                              sx={{
                                cursor: "pointer",
                                boxShadow: 1,
                                borderRadius: "50%",
                                p: "4px",
                                color: "#000",
                                backgroundColor: "#fff",
                                "&:hover": {
                                  background: "#5C5CFF",
                                  color: "#fff",
                                },
                              }}
                            >
                              <CiHeart size={15} />
                            </Icon>
                          </Tooltip>

                          {/* Add to Cart */}
                          <Tooltip
                            title="Add to Cart"
                            enterDelay={100}
                            leaveDelay={200}
                            placement="left-start"
                            slotProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: isDark ? "#334155" : "#fff",
                                  color: isDark ? "#fff" : "#000",
                                  borderRadius: "8px",
                                  fontSize: "10px",
                                  fontWeight: 500,
                                },
                              },
                            }}
                          >
                            <Icon
                              sx={{
                                cursor: "pointer",
                                boxShadow: 1,
                                borderRadius: "50%",
                                p: "6px 4px",
                                color: "#000",
                                backgroundColor: "#fff",
                                "&:hover": {
                                  background: "#5C5CFF",
                                  color: "#fff",
                                },
                              }}
                            >
                              <IoCartOutline size={15} />
                            </Icon>
                          </Tooltip>

                          {/* Quick View */}
                          <Tooltip
                            title="Quick View"
                            enterDelay={100}
                            leaveDelay={200}
                            placement="left-start"
                            slotProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: isDark ? "#334155" : "#fff",
                                  color: isDark ? "#fff" : "#000",
                                  borderRadius: "8px",
                                  fontSize: "10px",
                                  fontWeight: 500,
                                },
                              },
                            }}
                          >
                            <Icon
                              sx={{
                                cursor: "pointer",
                                boxShadow: 1,
                                borderRadius: "50%",
                                p: "4px",
                                color: "#000",
                                backgroundColor: "#fff",
                                "&:hover": {
                                  background: "#5C5CFF",
                                  color: "#fff",
                                },
                              }}
                            >
                              <FiEye size={15} />
                            </Icon>
                          </Tooltip>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ) : (
                // detial view
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {filteredProducts.map((p) => (
                    <Paper
                      key={p.id}
                      elevation={0}
                      sx={{
                        borderRadius: 2,
                        border: "1px solid #E5E7EB",
                        p: 2,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        backgroundColor: isDark ? "#1E293B" : "#FFFFFF",
                        color: isDark ? "#fff" : "#1C274C",
                      }}
                    >
                      {/* image */}
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: 2,
                          border: "1px solid #E5E7EB",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={p.image}
                          alt={p.title}
                          style={{
                            width: "90px",
                            height: "90px",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      {/* title, price */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: isDark ? "#fff" : "#1C274C",
                          }}
                        >
                          {p.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 13,
                            color: isDark ? "#fff" : "#6B7280",
                            mt: 0.5,
                          }}
                        >
                          {p.category}
                        </Typography>

                        {/* old, new price */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mt: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: isDark ? "#fff" : "#8C92A4",
                              fontWeight: 600,
                              fontSize: 14,
                            }}
                          >
                            ${p.oldPrice}
                          </Typography>
                          <Typography
                            sx={{
                              color: isDark ? "#fff" : "#1C274C",
                              fontWeight: 800,
                              fontSize: 14,
                            }}
                          >
                            ${p.price}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
