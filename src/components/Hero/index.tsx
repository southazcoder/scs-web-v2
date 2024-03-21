import { Svg1, Svg2 } from "../Svg/index";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight">
                  StarCom Systems LLC is an independent software solutions
                  company
                </h2>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  StarCom Systems LLC is an independent software solutions
                  company which creates software for on-premise, cloud-platform,
                  and mobile applications. Using the latest in development
                  tools, we can create more advanced applications with less
                  overhead costs.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Upper right corner */}
        <Svg1 />
        {/* Lower left corner */}
        <Svg2 />
      </section>
    </>
  );
};

export default Hero;
