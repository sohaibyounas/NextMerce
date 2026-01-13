"use client";
import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useBreadcrumbs } from "./useBreadcrumbs";

export default function Breadcrumb({ title }) {
  const breadcrumbs = useBreadcrumbs();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 2 },
        backgroundColor: isDark ? "#1C274C" : "#fff",
        color: isDark ? "#fff" : "#1C274C",
        gap: { xs: 1, sm: 0 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontWeight: 700,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {title}
      </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{
        // Target the separator (/)
        '& .MuiBreadcrumbs-separator': {
          color: isDark ? '#ffffff' : '#1C274C',
        }
      }}>
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;

          return isLast ? (
            <Typography
              key={crumb.href}
              color={isDark ? "#ffffff" : "#1C274C"}
            >
              {crumb.label}
            </Typography>
          ) : (
            <MuiLink
              key={crumb.href}
              component={Link}
              href={crumb.href}
              underline="hover"
              color={isDark ? "#ffffff" : "#1C274C"}
            >
              {crumb.label}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
