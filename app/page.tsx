/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import Header from "../components/headers";
import Button from "../components/button";
const copy = {
  heading: "Simple & Fast Figma to React Component",
  subHeading:
    "The faster way to create production quality code from beautiful designs in Figma.",
  button: {
    rating: "5* Rating",
    usage: "Used by over 11k+"
  },
  description:
    "If you are a frontend developer, you must know that generating code from the design is a long and tiresome work. DevBeans will offer a tool to convert the figma design into react+tailwind code easily. This tool can save tons of hours for frontend developers!",
  features: {
    heading: "The Ultimate Figma to React+Tailwind Code Converter",
    keyFeatures: [
      {
        heading: "Static Position and Flex Layout",
        description:
          " Our code generation tool ensures that the React components are created with static position and flex layout, providing a solid foundation for your designs. This enables you to achieve the desired layout and positioning for elements effortlessly."
      },
      {
        heading: "Clean and Reusable Code",
        description:
          " DevBeans generates clean and organized code that follows best practices, making it easy to read, understand, and maintain. The reusable components help streamline your development process and promote code consistency throughout your project."
      },
      {
        heading: "Image, Icon, and Font Integration",
        description:
          "DevBeans seamlessly integrates images, icons, and fonts from your Figma design into the generated React code. Whether it's adding images, Icons, or implementing custom fonts, our tool handles it all effortlessly."
      }
    ]
  },
  cta: {
    badge: "Just copy and past",
    title: "Write UI code faster !"
  }
};

export default function Home() {
  return (
    <main className="px-4 md:px-12 lg:px-20 py-6 lg:py-8 bg-white opacity-90">
      {/* NavBar */}
      <Header />
      {/* Header */}
      <header className="flex flex-col pt-32 gap-8 mx-auto items-center justify-center">
        <div className="font-black text-3xl md:text-5xl lg:text-7xl w-8/12 text-center  font-sans  leading-snug tracking-normal lg:leading-snug lg:tracking-normal">
          {copy.heading}
        </div>
        <div className="font-normal text-gray-600 text-base w-8/12 text-center  font-sans  leading-snug tracking-normal">
          {copy.subHeading}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center mx-auto gap-8 ">
            <Button />
          </div>
          <p className="text-gray-600 font-normal texts-sm pt-4 font-sans">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFD700"
                stroke="#FFD700"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                className="w-8 h-8 inline-block stroke-[]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </span>{" "}
            <span className="inline-block">{copy.button.usage}</span>
          </p>
        </div>
      </header>
      {/* About */}

      <section className="text-gray-600 body-font pt-40">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4 font-sans">
              {copy.features.heading}
            </h1>

            <div className="flex mt-6 justify-center"></div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {copy.features.keyFeatures.map((data) => {
              return (
                <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-bold mb-3 font-sans text-left">
                      {data.heading}
                    </h2>
                    <p className="leading-relaxed text-base font-sans text-left">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}

      {/* About */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-40 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg font-sans">
              I am buiding this product for frontend developer, you must know
              that generating code from the design is a long and tiresome work.
              DevBeans will offer a tool to convert the figma design into
              react+tailwind code easily. This tool can save tons of hours for
              frontend developers!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm font-sans">
              --Sumit Kumar
            </h2>
            <p className="text-gray-500 font-sans">Founder, DevBeans</p>
          </div>
        </div>
      </section>

      <div className="bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <p className="mb-4 font-semibold text-yellow-500 md:mb-6 md:text-base xl:text-xl font-sans">
              {copy.cta.badge}
            </p>

            <h1 className="text-black-800 mb-8 text-2xl lg:text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl font-sans">
              {copy.cta.title}
            </h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row items-center sm:justify-center">
              <div className="flex flex-row gap-8 items-center justify-center">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </main>
  );
}
