import { Metadata } from "next";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ScrollUp from "@/components/Common/ScrollUp";
// import NewsLetterBox from "@/components/Newsletter";
// import Video from "@/components/Video";

// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
// import NewsLetterBox from "@/components/Newsletter";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "StarCom Systems LLC",
  description: "StarCom Systems LLC Software and SaaS Services ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* Companies serviced */}
      <Brands />
      {/* Short Summaries */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
      {/* <NewsLetterBox /> */}
    </>
  );
}
