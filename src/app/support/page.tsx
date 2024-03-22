import React from "react";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Support Page",
  description: "This is the Product Support Page for StarCom Systems, LLC",
  // other metadata
};

const SupportPage = () => {
  return (
    <>
      <Breadcrumb
        aria-label="Support Page"
        pageName="Support Page"
        description="Welcome to our product support page! At StarCom Systems LLC, we're dedicated to ensuring that you get the most out of our products. Whether you have questions, need troubleshooting assistance, or want to learn more about our features, you've come to the right place.
        Our comprehensive support resources include FAQs, user guides, video tutorials, and troubleshooting tips to help you quickly find the answers you need. Can't find what you're looking for? Our friendly support team is standing by, ready to assist you via email, live chat, or phone.
        We understand that your time is valuable, which is why we're committed to providing prompt and personalized support to resolve your issues and keep you moving forward. Your success is our priority, and we're here to support you every step of the way.
        Explore our support resources now and experience the difference that exceptional support can make. Thank you for choosing StarCom Systems LLC!"
      />
    </>
  );
};

export default SupportPage;
