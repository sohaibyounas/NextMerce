"use client";
import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import { useBreadcrumbs } from "./useBreadcrumbs";

export default function Breadcrumb({ title }) {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 2 },
        backgroundColor: "#F3F4F6",
        gap: { xs: 1, sm: 0 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "32px" },
          fontWeight: 700,
          color: "#1C274C",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {title}
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
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
  );
}
