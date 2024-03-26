"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { DiagonalStripeLeft } from "../Svg";

const ProductsPage = () => {
  const [isSubscription, setIsSubscription] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="COMING SOON!"
          center
          width="665px"
        />

        {/* Price per month / year */}
        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsSubscription(true)}
              className={`${
                isSubscription
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Subscription
            </span>
            <div
              onClick={() => setIsSubscription(!isSubscription)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isSubscription ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsSubscription(false)}
              className={`${
                isSubscription
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Purchase
            </span>
          </div>
        </div> */}

        {/* TODO: Change this template to adjust per product */}
        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* <PricingBox
            packageName="Lite"
            price={isSubscription ? "40" : "2000"}
            duration={isSubscription ? "sub" : "pur"}
            subtitle="Learning Management System"
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isSubscription ? "399" : "789"}
            duration={isSubscription ? "sub" : "pur"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isSubscription ? "589" : "999"}
            duration={isSubscription ? "sub" : "pur"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" />
          </PricingBox> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <DiagonalStripeLeft />
      </div>
    </section>
  );
};

export default ProductsPage;
