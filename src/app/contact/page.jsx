import { Box } from "@mui/material";
import Footer from "../components/Footer/page";
import ContactComponent from "../components/Header/Menu/Contact/page";
import Header from "../components/Header/page";
import Breadcumb from "../components/Breadcumb/Breadcumb";

export default function Contact() {
  return (
    <>
      {/* header */}
      <Header />

      {/* contact */}
      <Box sx={{ flexGrow: 1, backgroundColor: "#F3F4F6" }}>
        <Breadcumb title="Contact us" />
        <ContactComponent />
      </Box>

      {/* footer */}
      <Footer />
    </>
  );
}
