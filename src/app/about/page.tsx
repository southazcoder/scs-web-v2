import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for StarCom Systems, LLC",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        aria-label="About Page"
        pageName="About Page"
        description="Welcome to StarCom Systems LLC, where innovation meets excellence in software development. We are a dynamic team of tech enthusiasts dedicated to crafting cutting-edge solutions that empower businesses and individuals alike. 

        At StarCom Systems, we believe in the transformative power of technology. Whether it's designing intuitive user interfaces, developing robust backend systems, or implementing groundbreaking AI algorithms, our goal is to create software that not only meets but exceeds expectations.
        
        Our journey began with a simple yet ambitious vision: to revolutionize the digital landscape by delivering tailor-made software solutions that address real-world challenges. Since our inception, we've stayed true to this vision, leveraging the latest tools and technologies to stay ahead of the curve.
        
        But what truly sets us apart is our commitment to customer satisfaction. We understand that every project is unique, which is why we take the time to listen, understand, and collaborate closely with our clients to ensure their needs are not just met, but exceeded.
        
        From startups to enterprises, we've had the privilege of working with a diverse range of clients across various industries. Our portfolio speaks for itself, showcasing the diversity and depth of our expertise.
        
        But our journey is far from over. As technology continues to evolve, so do we. With each new challenge, we see an opportunity to innovate and push the boundaries of what's possible.
        
        So whether you're looking to streamline your business processes, enhance your digital presence, or embark on a new venture altogether, we're here to help you turn your vision into reality.
        
        Thank you for considering StarCom Systems for your software needs. We look forward to the opportunity to work with you and make great things happen together."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
