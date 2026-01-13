"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Seller from "@/components/sections/BestSeller/BestSeller";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import { Box } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cardData } from "./shops";

export default function ShopWithoutSidebar() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted && theme === "dark";
	return (
		<>
			{/* header */}
			<Header />
			{/* shop-without-sidebar detail page */}
			<Box sx={{ flexGrow: 1 }}>
				<Breadcrumb title="Shop Without Sidebar" />
				<Box sx={{ backgroundColor: isDark ? "#111827" : "#F3F4F6", pt: 2 }}>
					<Seller data={cardData} showTitle={false} />
				</Box>
			</Box>
			{/* footer */}
			<Footer />
		</>
	);
}
