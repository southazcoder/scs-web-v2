import React from "react";

import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductsPage from "@/components/Products";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Producst offered by StarCom Systems, LLC",
  // other metadata
};

const Products = () => {
  return (
    <>
      <Breadcrumb
        aria-label="Products Page"
        pageName="Products Page"
        description=""
      />
      <ProductsPage />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default Products;
