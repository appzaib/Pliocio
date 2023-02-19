import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="lg:max-h-screen text-center">
        <img
          src="feature.jpg"
          className="lg:h-[80vh] w-full object-cover"
          alt=""
        />
      </div>
      <div className="py-8">
        <div className="container mx-auto px-4 text-gray-600">
          <h1 className="text-3xl font-semibold mb-5 text-center text-gray-900">
            Introducing Our Public Relations Firm
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-5">
            At Fixedam, we provide top-notch public relations services to help
            clients navigate the complex and ever-changing media landscape. Our
            team of experienced PR professionals has a proven track record of
            delivering results for a wide range of industries and organizations.
          </p>
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Why Choose Us?
          </h2>
          <div className="text-center md:text-start items-center px-4 text-gray-600">
            <div className="flex flex-col md:flex-row py-12 items-center">
              <img
                src="result-driven.webp"
                alt="result-driven"
                className="w-full md:hidden"
              />
              <div className="w-full md:w-2/4">
                <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                  Results-Driven Approach
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  We focus on delivering measurable results for our clients and
                  use data-driven strategies to drive impact.We continually
                  analyze and optimize our strategies to ensure our clients
                  achieve their desired outcomes and stay ahead of their
                  competition.Our team of experts is dedicated to staying
                  up-to-date with the latest industry trends and technologies,
                  so we can provide our clients with the most effective
                  solutions for their unique needs.
                </p>
              </div>
              <img
                src="result-driven.webp"
                alt="result"
                className="hidden md:block w-full md:w-2/4 md:pl-12"
              />
            </div>

            <div className="flex flex-col md:flex-row py-12 items-center">
              <img
                src="solution.webp"
                alt="customized-solution"
                className="w-full md:w-2/4 md:pr-12 h-80"
              />
              <div className="w-full md:w-2/4">
                <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                  Customized Solutions
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                  Every client is unique and so are their PR needs. We take the
                  time to understand your goals and develop a customized PR plan
                  tailored to your specific needs.Our approach ensures that our
                  clients receive personalized attention and solutions that
                  address their specific challenges, rather than a
                  one-size-fits-all approach. Our customized PR solutions help
                  our clients stand out in their industry and achieve their
                  desired outcomes.
                </p>
              </div>
            </div>
          </div>
          <p className="text-base md:text-lg leading-relaxed">
            Our team is passionate about helping clients tell their story and
            building their brand. Let us put our expertise to work for you.
            Contact us today to learn more about our services and how we can
            help you achieve your PR goals.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
