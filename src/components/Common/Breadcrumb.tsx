import Link from "next/link";
import { Triangles } from "../Svg";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap ">
            {/* Breadcrumb */}
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-end">
                <ul className="flex  md:justify-start">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
            {/* Page Name & Description */}
            <div className="items-center px-4 pt-28 md:w-10/12 lg:w-9/12 lg:pt-[50px]">
              <div className="mb-8 md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Triangles />
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
