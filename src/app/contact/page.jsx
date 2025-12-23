<<<<<<< HEAD
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
=======
import ContactComponent from "@/components/layout/Header/Menu/Contact/Contact";

export default function Contact() {
  return <ContactComponent />;
>>>>>>> 1b347ab60638d37a18c5b61e28ff633ac7b6f577
}
