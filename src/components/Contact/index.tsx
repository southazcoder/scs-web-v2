import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-8 md:py-10 lg:py-14">
      <div className="border-2 border-black">
        <div className="mx-auto w-1/2 p-4 lg:w-7/12 xl:w-8/12">
          <div
            className="first-letter: rounded-lg border-2 border-blue-900 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <div className="text-center ">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help or have a question? Drop us a message.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLetterBox />
          </div> */}
      </div>
    </section>
  );
};

export default Contact;
