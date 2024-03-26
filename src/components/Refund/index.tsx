import React from "react";
import { Checkmark } from "../Svg";

const checkIcon = <Checkmark width={14} height={13} />;

const RefundPage = () => {
  // TODO: Make this a reusable control with option to change the checkmark to numbers
  // TODO: Add ability to stylize text
  const List = ({ text }) => (
    <p className="text-md mb-5 flex items-center font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="refund"
      className="overflow-hidden py-8 text-lg md:py-10 lg:py-14"
    >
      <div className="border-2 border-black">
        <div className="mx-auto w-1/2 p-4 lg:w-6/12 xl:w-7/12">
          <div
            className="first-letter: rounded-lg border-2 border-blue-900 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <div className="text-center">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Refund Policy
              </h2>
              <p className="mb-12 text-justify font-medium text-body-color">
                This outlines our refund policy which covers most of our
                products. Each product may have additional or different
                conditions that are available for reviewing by selecting the
                product name in the dropdown control below.
              </p>
            </div>
            <div className="text-justify">
              <p className="mb-4 font-medium text-body-color">
                We at StarCom Systems, LLC are committed to ensuring your
                satisfaction with our software products. If you are not entirely
                satisfied with your purchase, we&apos;re here to help.
              </p>
            </div>
            <div className="text-justify">
              <h2>Refund Eligibility</h2>
              <p className="mb-4 font-medium text-body-color">
                To be eligible for a refund, you must meet the following
                criteria:
              </p>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-full px-9 lg:w-full ">
                    <List text="Within the Refund Period: Refund requests must be submitted within 90 days from the date of purchase." />
                    <List text="Unused License: The software license must not have been activated or used." />
                    <List text="Technical Issues: Refunds may be issued for technical issues that cannot be resolved within a reasonable timeframe." />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-justify">
              <h2>Refund Process</h2>
              <p className="mb-4 font-medium text-body-color">
                To request a refund, please contact our customer support team at
                license@starcomsys.net with the following information:
              </p>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-full px-9 lg:w-full ">
                    <List text="Your name and email address associated with the purchase." />
                    <List text="The date of purchase and order number." />
                    <List text="Reason for the refund request." />
                  </div>
                </div>
              </div>
              <p className="mb-4 font-medium text-body-color">
                Our customer support team will review your request and respond
                to you within 10 business days.
              </p>
            </div>
            <div className="text-justify">
              <h2>Refund Exceptions</h2>
              <p className="mb-4 font-medium text-body-color">
                Please note that certain circumstances may not be eligible for a
                refund, including but not limited to:
              </p>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-full px-9 lg:w-full ">
                    <List text="Change of mind or personal preference." />
                    <List text="Activation or use of the software license. (If applicable)" />
                    <List text="Failure to meet system requirements or compatibility issues." />
                    <List text="Refund requests made outside of the Refund Period." />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-justify">
              <h2>Refund Method</h2>
              <p className="mb-4 font-medium text-body-color">
                If your refund request is approved, we will process the refund
                using the original payment method. Please allow [number of days]
                business days for the refund to be reflected in your account.
              </p>
            </div>
            <div className="text-justify">
              <h2>Contact Us</h2>
              <p className="mb-4 font-medium text-body-color">
                If you have any questions about this Privacy Policy, please
                contact us at [support@starcomsys.net]. <br />
                <br />
                Or use the contact form link --{" "}
                <a
                  className="text-body-color-dark"
                  href="https://starcomsys.net/contact"
                >
                  Click Here
                </a>
              </p>
            </div>
            <div className="text-justify">
              <h2>Last updated: March 22, 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPage;
