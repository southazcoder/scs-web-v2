import React from "react";
import { Checkmark } from "../Svg";

const checkIcon = <Checkmark />;

const TermsPage = () => {
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
      id="terms"
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
                Terms of Service
              </h2>
              <p className="mb-12 text-justify font-medium text-body-color">
                This outlines the terms of service offered for all of our
                products. Each product may have additional terms that are
                available for reviewing by selecting the product name in the
                dropdown control below.
              </p>
            </div>
            <div className="text-justify">
              <p className="mb-4 font-medium text-body-color">
                These Terms of Service (&quot;Terms&quot;) govern your use of
                StarCom Systems LLC&apos;s website [starcomsys.net] (the
                &quot;Site&quot;) and any software, products, or services
                offered by [StarCom Systems, LLC] (collectively, the
                &quot;Services&quot;). By accessing or using the Site or
                Services, you agree to be bound by these Terms. If you do not
                agree to these Terms, please do not use the Site or Services.
              </p>
            </div>
            <div className="text-justify">
              <h2>Use of Services</h2>
              <p className="mb-4 font-medium text-body-color">
                You may use the Services only for lawful purposes and in
                accordance with these Terms. You are responsible for maintaining
                the confidentiality of any account credentials and for all
                activities that occur under your account.
              </p>
            </div>
            <div className="text-justify">
              <h2>Intellectual Property</h2>
              <p className="mb-4 font-medium text-body-color">
                The Site and Services, including all content, software, and
                materials, are protected by copyright, trademark, and other
                laws. You may not modify, reproduce, distribute, or create
                derivative works based on the Site or Services without our prior
                written consent.
              </p>
            </div>
            <div className="text-justify">
              <h2>User Content</h2>
              <p className="mb-4 font-medium text-body-color">
                You may be able to submit content, such as comments or feedback,
                through the Site or Services (&quot;User Content&quot;). By
                submitting User Content, you grant us a worldwide,
                non-exclusive, royalty-free license to use, reproduce, modify,
                adapt, publish, and distribute the User Content in any form.
              </p>
            </div>
            <div className="text-justify">
              <h2>Limitation of Liability</h2>
              <p className="mb-4 font-medium text-body-color">
                To the fullest extent permitted by law, StarCom Systems LLC
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenue, arising out of or in connection with your use of the
                Site or Services.
              </p>
            </div>
            <div className="text-justify">
              <h2>Indemnification</h2>
              <p className="mb-4 font-medium text-body-color">
                You agree to indemnify, defend, and hold harmless StarCom
                Systems LLC, its affiliates, and their respective officers,
                directors, employees, and agents, from and against any and all
                claims, liabilities, damages, losses, costs, expenses, or fees
                (including reasonable attorneys&apos; fees) arising out of or in
                connection with your use of the Site or Services.
              </p>
            </div>
            <div className="text-justify">
              <h2>Modification of Terms</h2>
              <p className="mb-4 font-medium text-body-color">
                We reserve the right to modify these Terms at any time by
                posting the revised Terms on the Site. Your continued use of the
                Site or Services after the posting of any modified Terms
                constitutes your acceptance of the modified Terms.
              </p>
            </div>
            <div className="text-justify">
              <h2>Governing Law</h2>
              <p className="mb-4 font-medium text-body-color">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law principles.
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

export default TermsPage;
