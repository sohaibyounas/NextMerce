"use client";
import { usePathname } from "next/navigation";

export const useBreadcrumbs = () => {
  const pathname = usePathname();

  const pathArray = pathname.split("/").filter((path) => path !== "");

  const breadcrumbs = pathArray.map((path, index) => {
    const href = "/" + pathArray.slice(0, index + 1).join("/");
    return {
      label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " "),
      href,
    };
  });

  return [{ label: "Home", href: "/" }, ...breadcrumbs];
};
