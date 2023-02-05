import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="lg:max-h-screen text-center">
        <img
          src="featured.png"
          className="lg:h-[90vh] w-full object-cover"
          alt=""
        />
      </div>
      <div className="bg-sky-800">
        <div className="container mx-auto px-6 py-12 text-white">
          <h1 className="text-3xl font-medium mb-6">
            Introducing Our Public Relations Firm
          </h1>
          <p className="text-lg mb-6">
            At Fixedam, we provide top-notch public relations services to help
            clients navigate the complex and ever-changing media landscape. Our
            team of experienced PR professionals has a proven track record of
            delivering results for a wide range of industries and organizations.
          </p>
          <h2 className="text-2xl font-medium mb-6">Why Choose Us?</h2>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">
              Results-Driven Approach: We focus on delivering measurable results
              for our clients and use data-driven strategies to drive impact.
            </li>
            <li className="mb-2">
              Customized Solutions: Every client is unique and so are their PR
              needs. We take the time to understand your goals and develop a
              customized PR plan tailored to your specific needs.
            </li>
            <li className="mb-2">
              Media Relations Expertise: Our team has strong relationships with
              key media outlets and influencers, allowing us to secure
              high-impact coverage for our clients.
            </li>
            <li className="mb-2">
              Crisis Management: We have extensive experience handling crisis
              situations and can help you navigate the most challenging of
              circumstances with ease.
            </li>
            <li className="mb-2">
              Comprehensive Services: From media relations and influencer
              outreach to events and thought leadership, we offer a full suite
              of PR services to meet all of your needs.
            </li>
          </ul>
          <p className="text-lg mb-6">
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
