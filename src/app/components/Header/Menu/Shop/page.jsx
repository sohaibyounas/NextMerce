"use client";

import Footer from "@/app/components/Footer/page";
import Header from "../../page";
import ShopWithSidebar from "@/app/components/Shop-with-Sidebar/page";

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
