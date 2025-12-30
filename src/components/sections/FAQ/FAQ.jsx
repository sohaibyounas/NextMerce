"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Subscription from "../Subscription/subscription";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { MdExpandMore, MdQuestionAnswer, MdHelpOutline } from "react-icons/md";

const faqData = [
  {
    id: "panel1",
    question: "What are your shipping rates and delivery times?",
    answer:
      "We offer free standard shipping on all orders over $100. For orders below $100, a flat rate of $9.99 applies. Standard delivery typically takes 3-5 business days. We also offer express shipping for an additional fee, which takes 1-2 business days.",
  },
  {
    id: "panel2",
    question: "Which payment methods do you accept?",
    answer:
      "NextMerce accepts all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are encrypted and secured for your safety.",
  },
  {
    id: "panel3",
    question: "How can I return or exchange an item?",
    answer:
      "We have a 30-day hassle-free return policy. If you're not satisfied with your purchase, you can initiate a return through our self-service portal in your account. The item must be unused, in its original packaging, and with all tags attached.",
  },
  {
    id: "panel4",
    question: "Are your products 100% authentic?",
    answer:
      "Yes, authenticity is our top priority. We source our products directly from authorized distributors and verified brands. Every item undergoes a quality check before being listed on our platform.",
  },
  {
    id: "panel5",
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also track your order status directly from the 'My Orders' section in your account dashboard.",
  },
  {
    id: "panel6",
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location and are calculated at checkout. Please note that customs duties and taxes may apply depending on your country's regulations.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Header />
      <Breadcrumb title="Frequently Asked Questions" />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "sticky", top: 100 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  p: 1.5,
                  borderRadius: 3,
                  bgcolor: "rgba(60, 80, 224, 0.1)",
                  color: "#3C50E0",
                  mb: 3,
                }}
              >
                <MdHelpOutline size={30} />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1,
                  mb: 3,
                  color: "#1C274C",
                }}
              >
                Need Help? <br />
                <span style={{ color: "#3C50E0" }}>Find Answers</span> Here
              </Typography>
              <Typography
                sx={{
                  color: "#606882",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: 450,
                }}
              >
                Whether you have questions about shipping, payments, returns, or
                product authenticity, we've compiled the most common inquiries
                to help you shop with confidence.
              </Typography>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1, color: "#1C274C" }}
                >
                  Still have questions?
                </Typography>
                <Typography sx={{ color: "#606882", mb: 2 }}>
                  Can't find what you're looking for? Our support team is here
                  to help 24/7.
                </Typography>
                <Typography
                  sx={{
                    color: "#3C50E0",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  <MdQuestionAnswer /> Contact Support
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ mt: { xs: 4, md: 0 } }}>
              {faqData.map((faq, index) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.id}
                  onChange={handleChange(faq.id)}
                  sx={{
                    mb: 2,
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    borderRadius: "16px !important",
                    "&:before": { display: "none" },
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&.Mui-expanded": {
                      borderColor: "#3C50E0",
                      boxShadow: "0 10px 30px rgba(60, 80, 224, 0.08)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdExpandMore
                        style={{
                          color: expanded === faq.id ? "#3C50E0" : "#1C274C",
                          fontSize: 24,
                        }}
                      />
                    }
                    sx={{
                      px: 3,
                      py: 1,
                      "& .MuiAccordionSummary-content": {
                        margin: "16px 0",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        color: expanded === faq.id ? "#3C50E0" : "#1C274C",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Typography
                      sx={{
                        color: "#606882",
                        lineHeight: 1.8,
                        fontSize: "1.05rem",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Subscription />
      <Footer />
    </Box>
  );
}
