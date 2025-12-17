"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Link as MuiLink,
  MenuItem,
  Paper,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { FiChevronDown, FiGrid, FiList } from "react-icons/fi";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";

export default function ShopWithSidebar() {
  const pathname = usePathname();

  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("latest");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 999]);

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
    [],
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
    [categoryCounts],
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
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const inSizes =
        selectedSizes.length === 0 || p.sizes.some((s) => selectedSizes.includes(s));
      const inColors =
        selectedColors.length === 0 || p.colors.some((c) => selectedColors.includes(c));
      const inPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return inCategory && inSizes && inColors && inPrice;
    };

    const list = products.filter(matchesFilters);

    if (sort === "priceLow") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") return [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [priceRange, products, selectedCategories, selectedColors, selectedSizes, sort]);

  const onToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const onToggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const onToggleColor = (hex) => {
    setSelectedColors((prev) =>
      prev.includes(hex) ? prev.filter((c) => c !== hex) : [...prev, hex],
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

  return (
    <>
      <Box sx={{ backgroundColor: "#F3F4F6" }}>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2, md: 3 },
            py: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: "#1C274C",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "38px",
              }}
            >
              Explore All Products
            </Typography>

            <Breadcrumbs aria-label="breadcrumb" sx={{ mt: { xs: 0, md: 1 } }}>
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

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "320px 1fr" },
              gap: 3,
              alignItems: "start",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #E5E7EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#111827" }}>Filters:</Typography>
                <Button
                  onClick={onClearAll}
                  variant="text"
                  sx={{ textTransform: "none", color: "#3B82F6" }}
                >
                  Clean All
                </Button>
              </Paper>

              <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Accordion defaultExpanded elevation={0} disableGutters>
                  <AccordionSummary expandIcon={<FiChevronDown />}>
                    <Typography sx={{ fontWeight: 600 }}>Category</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
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
                              />
                            }
                            label={c.label}
                          />
                          <Box
                            sx={{
                              minWidth: 22,
                              height: 18,
                              px: 1,
                              borderRadius: 10,
                              backgroundColor: "#F3F4F6",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 12,
                              color: "#111827",
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

              <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Accordion defaultExpanded elevation={0} disableGutters>
                  <AccordionSummary expandIcon={<FiChevronDown />}>
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
                            }}
                          />
                        );
                      })}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>

              <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Accordion defaultExpanded elevation={0} disableGutters>
                  <AccordionSummary expandIcon={<FiChevronDown />}>
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

              <Paper elevation={0} sx={{ borderRadius: 2, border: "1px solid #E5E7EB" }}>
                <Accordion defaultExpanded elevation={0} disableGutters>
                  <AccordionSummary expandIcon={<FiChevronDown />}>
                    <Typography sx={{ fontWeight: 600 }}>Price</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Slider
                      value={priceRange}
                      onChange={(_, v) => setPriceRange(v)}
                      valueLabelDisplay="auto"
                      min={0}
                      max={999}
                      sx={{ color: "#1C274C" }}
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
                          color: "#111827",
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
                          color: "#111827",
                        }}
                      >
                        $ {priceRange[1]}
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>

              {/* side bar */}
              {/* paste the code you design here */}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                  <FormControl size="small" sx={{ minWidth: 180 }}>
                    <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                      <MenuItem value="latest">Latest Products</MenuItem>
                      <MenuItem value="priceLow">Price: Low to High</MenuItem>
                      <MenuItem value="priceHigh">Price: High to Low</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography sx={{ color: "#111827" }}>
                    Showing {filteredProducts.length} of {products.length} Products
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
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
                      backgroundColor: view === "grid" ? "#1C274C" : "transparent",
                      color: view === "grid" ? "#FFFFFF" : "#111827",
                    }}
                  >
                    <FiGrid />
                  </Box>
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
                      backgroundColor: view === "list" ? "#1C274C" : "transparent",
                      color: view === "list" ? "#FFFFFF" : "#111827",
                    }}
                  >
                    <FiList />
                  </Box>
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
                      elevation={0}
                      sx={{
                        borderRadius: 2,
                        border: "1px solid #E5E7EB",
                        overflow: "hidden",
                        backgroundColor: "#FFFFFF",
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
                          style={{ width: "180px", height: "180px", objectFit: "contain" }}
                        />
                      </Box>
                      <CardContent sx={{ p: 2 }}>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1C274C",
                            mb: 1,
                          }}
                        >
                          {p.title}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#8C92A4",
                              fontWeight: 600,
                              fontSize: 14,
                            }}
                          >
                            ${p.oldPrice}
                          </Typography>
                          <Typography sx={{ color: "#1C274C", fontWeight: 800, fontSize: 14 }}>
                            ${p.price}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ) : (
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
                        backgroundColor: "#FFFFFF",
                      }}
                    >
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
                          style={{ width: "90px", height: "90px", objectFit: "contain" }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#1C274C" }}>
                          {p.title}
                        </Typography>
                        <Typography sx={{ fontSize: 13, color: "#6B7280", mt: 0.5 }}>
                          {p.category}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#8C92A4",
                              fontWeight: 600,
                              fontSize: 14,
                            }}
                          >
                            ${p.oldPrice}
                          </Typography>
                          <Typography sx={{ color: "#1C274C", fontWeight: 800, fontSize: 14 }}>
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
