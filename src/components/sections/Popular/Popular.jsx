"use client";

import Seller from "@/components/sections/BestSeller/BestSeller";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Box } from "@mui/material";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import { useAppTheme } from "@/hooks/useAppTheme";

export default function PopularPage() {
  const { mounted, isDark } = useAppTheme();

  if (!mounted) return null;
  return (
    <>
      {/* header section */}
      <Header />

      {/* product details section */}
      <Box sx={{ flexGrow: 1 }}>
        <Breadcrumb title="Our Best Products" />

        {/* seller */}
        <Box sx={{ backgroundColor: isDark ? "#111827" : "#F3F4F6", pt: 2 }}>
          <Seller showTitle={false} />
        </Box>
      </Box>

      {/* footer section */}
      <Footer />
    </>
  );
}
