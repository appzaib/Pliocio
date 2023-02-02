import Head from "next/head";
import {
  FaMicrophoneAlt,
  FaMedkit,
  FaCalendarAlt,
  FaFileAlt,
  FaUsers,
  FaTwitter,
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fixedam</title>
        <meta name="description" content="Your Next Firm" />
      </Head>
      <div className="lg:max-h-screen text-center">
        <img
          src="featured.png"
          className="lg:h-[75vh] w-full object-cover"
          alt=""
        />
        <h2 className="lg:w-3/4 mx-auto text-center lg:text-3xl text-xl py-1 tracking-wide text-slate-700 sm:text-2xl md:text-xl">
          We position companies for market success and create awareness among
          their high-value audiences.
        </h2>
      </div>

      <section class="py-4">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-6">Our Services</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white h-64 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex items-center justify-center h-12 w-12 mx-auto mb-2">
                  <FaMicrophoneAlt className="text-gray-600 text-3xl" />
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-4">
                  Media Relations
                </h3>
                <p class="text-gray-700 text-base">
                  We help clients establish and maintain strong relationships
                  with the media to ensure their messages are heard and their
                  stories are told.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white h-64 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex items-center justify-center h-12 w-12 mx-auto mb-2">
                  <FaMedkit className="text-gray-500 text-3xl" />
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-4">
                  Crisis Management
                </h3>
                <p class="text-gray-700 text-base">
                  We provide expert guidance and support to clients facing a
                  crisis, helping them to manage the situation and minimize
                  negative impact on their reputation.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white h-64 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex items-center justify-center h-12 w-12 mx-auto mb-2">
                  <FaCalendarAlt className="text-gray-500 text-3xl" />
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-4">
                  Event Planning
                </h3>
                <p class="text-gray-700 text-base">
                  We specialize in creating and executing events that captivate
                  and engage audiences, build brand awareness and drive results
                  for clients.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white h-64 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex items-center justify-center h-12 w-12 mx-auto mb-2">
                  <FaFileAlt className="text-gray-500 text-3xl" />
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-4">
                  Content Creation
                </h3>
                <p class="text-gray-700 text-base">
                  We develop high-quality, engaging content across various
                  formats and platforms to help clients communicate their
                  messages and build their brand.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white h-64 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex items-center justify-center h-12 w-12 mx-auto mb-2">
                  <FaUsers className="text-gray-500 text-3xl" />
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-4">
                  Influencer Marketing
                </h3>
                <p class="text-gray-700 text-base">
                  We help clients connect with relevant influencers and build
                  lasting relationships that increase their brand reach and
                  credibility.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-4 mb-8">
              <div class="bg-white h-64 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div class="flex items-center justify-center h-12 w-12 mx-auto mb-2">
                  <FaTwitter className="text-gray-500 text-3xl" />
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-4">
                  Social Media Management
                </h3>
                <p class="text-gray-700 text-base">
                  We help clients establish and grow their presence on social
                  media, creating and sharing content that resonates with their
                  audience and drives engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-500">
        <div className="text-center container px-5 py-6 mx-auto text-white">
          <h1 className="lg:w-1/2 lg:text-4xl text-2xl pb-2 font-semibold mx-auto">
            Our media placements will increase your credibility and bring you
            more prospects
          </h1>
          <div className="flex flex-wrap sm:-m-4 pt-8 -mb-8 md:space-y-0 space-y-6">
            <div className="p-8 w-full md:w-1/3 flex flex-col text-center items-center">
              <div className="text-3xl inline-flex items-center justify-center text-sky-200 mb-5">
                <IoMdCheckmarkCircleOutline />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-base font-medium">
                  Dramatically boost your authority and market leadership in
                  your industry with prospects and peers
                </h2>
              </div>
            </div>
            <div className="p-8 w-full md:w-1/3 flex flex-col text-center items-center">
              <div className="text-3xl inline-flex items-center justify-center text-sky-200 mb-5">
                <IoMdCheckmarkCircleOutline />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-base font-medium">
                  Raise awareness on new products and services before prospects
                  even know to search for them
                </h2>
              </div>
            </div>
            <div className="p-8 w-full md:w-1/3 flex flex-col text-center items-center">
              <div className="text-3xl inline-flex items-center justify-center text-sky-200 mb-5">
                <IoMdCheckmarkCircleOutline />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-base font-medium">
                  Increase social proof with excerpts from high profile
                  publications
                </h2>
              </div>
            </div>
            <div className="p-8 w-full md:w-1/3 flex flex-col text-center items-center">
              <div className="text-3xl inline-flex items-center justify-center text-sky-200 mb-5">
                <IoMdCheckmarkCircleOutline />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-base font-medium">
                  Attract more visitors to your website when readers come across
                  your story and within search engines
                </h2>
              </div>
            </div>
            <div className="p-8 w-full md:w-1/3 flex flex-col text-center items-center">
              <div className="text-3xl inline-flex items-center justify-center text-sky-200 mb-5">
                <IoMdCheckmarkCircleOutline />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-base font-medium">
                  Improve your search engine rankings with article backlinks
                </h2>
              </div>
            </div>
            <div className="p-8 w-full md:w-1/3 flex flex-col text-center items-center">
              <div className="text-3xl inline-flex items-center justify-center text-sky-200 mb-5">
                <IoMdCheckmarkCircleOutline />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-base font-medium">
                  Stand out from competitors, demonstrate expertise and thought
                  leadership.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-sky-600">
        <div className="container px-5 py-8 mx-auto">
          <h2 className="text-center text-3xl font-semibold py-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  “Having chemistry with your partners is key, and we’ve
                  definitely found that as well as a very strategic mind—in our
                  account team. We simply can’t envision our marketing mix
                  without their content strategy and media relations savvy!”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4"></span>
                <h2 className="text-violet-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-white">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  “Plicio was engaged and helpful throughout the entire
                  decision-making process, answering all of our questions and
                  concerns. Once the Interdependence team came on board we saw
                  almost instant results, with a steady flow of features and
                  interest from media and influencers.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4"></span>
                <h2 className="text-violet-900 font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-white">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed">
                  “Having a partner that understands the intricacies of our
                  industry has been an invaluable asset for our team. From
                  standard releases to thought leadership and community
                  activations, the Interdependence team has helped shape and
                  promote our messaging with salient attention to brand position
                  and values.”
                </p>
                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4"></span>
                <h2 className="text-violet-900 font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-white">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="text-white bg-cyan-800 relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-white">
              Interested in working with us? <br /> Drop us a line.
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-cyan-100 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-cyan-100 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-cyan-100 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Tell us how we can help.
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-cyan-500 focus:bg-cyan-100 focus:ring-2 focus:ring-cyan-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
