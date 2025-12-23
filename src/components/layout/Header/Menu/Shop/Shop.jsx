"use client";

import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import ShopWithSidebar from "@/components/sections/ShopWithSidebar/ShopWithSidebar";

export default function Shop() {
  return (
    <>
      {/* header section */}
      <Header />

      {/* shop with side bar */}
      <ShopWithSidebar />

      {/* footer section */}
      <Footer />
    </>
  );
}
