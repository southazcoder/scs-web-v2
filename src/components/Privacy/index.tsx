import React from "react";
import { Checkmark } from "../Svg";

const checkIcon = <Checkmark />;

const PrivacyPage = () => {
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
      id="privacy"
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
                Privacy Policy
              </h2>
              <p className="mb-12 text-justify font-medium text-body-color">
                This outlines the privacy which covers all of our products. Each
                product may have additional conditions that are available for
                reviewing by selecting the product name in the dropdown control
                below.
              </p>
            </div>
            <div className="text-justify">
              <p className="mb-4 font-medium text-body-color">
                StarCom Systems, LLC is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your personal information when you visit our website
                [starcomsys.net] (the &quot;Site&quot;) or use our services.
                Please read this Privacy Policy carefully. By accessing or using
                our Site or services, you agree to be bound by this Privacy
                Policy.
              </p>
            </div>
            <div className="text-justify">
              <h2>Collection of Information</h2>
              <p className="mb-4 font-medium text-body-color">
                We may collect personal information from you when you interact
                with our Site or services. This information may include:
              </p>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-full px-9 lg:w-full ">
                    <List text="Contact information such as your name, email address, and phone number" />
                    <List text="Information about your device and internet connection, including your IP address" />
                    <List text="Usage data such as pages visited, features used, and time spent on the Site" />
                    <List text="Any other information you provide to us voluntarily" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-justify">
              <h2>Use of Information</h2>
              <p className="mb-4 font-medium text-body-color">
                We may use the information we collect for various purposes,
                including:
              </p>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-full px-9 lg:w-full ">
                    <List text="Providing and improving our products and services" />
                    <List text="Personalizing your experience on the Site" />
                    <List text="Communicating with you about our products, services, and promotions" />
                    <List text="Analyzing usage trends and preferences" />
                    <List text="Protecting our rights and property" />
                    <List text="Complying with legal and regulatory requirements" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-justify">
              <h2>Disclosure of Information</h2>
              <p className="mb-4 font-medium text-body-color">
                We may share your personal information with third parties in the
                following circumstances:
              </p>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-full px-9 lg:w-full ">
                    <List text="With service providers who assist us in operating our business and providing our services" />
                    <List text="With third parties for marketing, advertising, or other purposes with your consent" />
                    <List text="As required by law or to protect our rights" />
                  </div>
                </div>
              </div>
              <div>
                ** We will not sell or rent your personal information to third
                parties without your consent. **
              </div>
            </div>
            <div className="text-justify">
              <h2>Security</h2>
              <p className="mb-4 font-medium text-body-color">
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. However, no method
                of transmission over the internet or electronic storage is 100%
                secure, so we cannot guarantee absolute security.
              </p>
            </div>
            <div className="text-justify">
              <h2>Your Choices</h2>
              <p className="mb-4 font-medium text-body-color">
                You may choose not to provide certain personal information, but
                this may limit your ability to use certain features of the Site
                or services.
              </p>
            </div>
            <div className="text-justify">
              <h2>Changes to this Privacy Policy</h2>
              <p className="mb-4 font-medium text-body-color">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes.
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

export default PrivacyPage;
