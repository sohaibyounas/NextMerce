import { Box } from "@mui/material";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import ContactComponent from "@/components/layout/Header/Menu/Contact/Contact";

export default function Contact() {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Breadcrumb title="Contact us" />
        <ContactComponent />
      </Box>
      <Footer />
    </>
  );
}
