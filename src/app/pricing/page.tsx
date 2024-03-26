import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "This describes the pricing tiers.",
  // other metadata
};

const PricingPage = () => {
  return <Pricing />;
};

export default PricingPage;
