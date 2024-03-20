// import NewsLatterBox from "./NewsLatterBox";

import Svg2 from "../Svg/svg-3";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-8 md:py-10 lg:py-14">
      <div className="border-2 border-black">
        <div className="mx-auto w-1/2 p-4 text-center lg:w-7/12 xl:w-8/12">
          <div
            className="rounded-lg border-2 border-fuchsia-600 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Need Help or have a question? Drop us a message.
            </h2>
            <p className="mb-12 text-base font-medium text-body-color">
              Our support team will get back to you ASAP via email.
            </p>
            <ContactForm />
          </div>
        </div>
        <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
          <div className="to-yellow-500 h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 p-1">
            <div className="back flex h-full w-full items-center justify-center bg-gray-800">
              <h1 className="text-2xl font-black text-white">
                the quick brown fox jumps over the lazy dog
              </h1>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
      </div>
    </section>
  );
};

export default Contact;
