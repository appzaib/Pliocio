import Head from 'next/head'
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { FaMarker } from "react-icons/fa"
import { TiMessages } from "react-icons/ti"
import { MdSocialDistance } from "react-icons/md"
import { SiWebflow } from "react-icons/si"
import { GiPencilBrush } from "react-icons/gi"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pliocio</title>
        <meta name="description" content="Your Next Firm" />
      </Head>
      <div className="section text-center mb-5">
        <img src="featured.jpeg" className='w-full h-auto' alt="" />
        <h2 className='lg:text-3xl px-3 pt-1 tracking-wide text-slate-700'>We position companies for market success and create awareness among their high‑value audiences.
        </h2>
      </div>
      <div className='text-center bg-slate-50'>
        <h2 className='lg:text-5xl pt-3'>Our Services</h2>
        <div className="container px-6 py-12 mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="h-full text-center">
                <HiOutlineSpeakerphone className="w-12 h-12 mb-5 object-cover object-center inline-block text-neutral-500" />
                <a href="">
                  <h2 className='text-xl font-semibold text-zinc-700'>Public Relations</h2>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="h-full text-center">
                <FaMarker className="w-12 h-12 mb-5 object-cover object-center inline-block text-neutral-500" />
                <a href="">
                  <h2 className='text-xl font-semibold text-zinc-700'>Content Marketing</h2>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="h-full text-center">
                <TiMessages className="w-12 h-12 mb-5 object-cover object-center inline-block text-neutral-500" />
                <a href="">
                  <h2 className='lg:text-xl font-semibold text-zinc-700'>Brand Communications</h2>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="h-full text-center">
                <MdSocialDistance className="w-12 h-12 mb-5 object-cover object-center inline-block text-neutral-500" />
                <a href="">
                  <h2 className='text-xl font-semibold text-zinc-700'>Social Media</h2>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="h-full text-center">
                <SiWebflow className="w-12 h-12 mb-5 object-cover object-center inline-block text-neutral-500" />
                <a href="">
                  <h2 className='text-xl font-semibold text-zinc-700'>Digital Marketing</h2>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="h-full text-center">
                <GiPencilBrush className="w-12 h-12 mb-5 object-cover object-center inline-block text-neutral-500" />
                <a href="">
                  <h2 className='text-xl font-semibold text-zinc-700'>Creative Services</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center container px-5 py-8 mx-auto'>
        <h2 className='lg:text-5xl texl-3xl py-3 font-semibold'>Our media placements will increase your credibility and bring you more prospects
        </h2>
        <div className="flex flex-wrap sm:-m-4 pt-6 -mb-10 md:space-y-0 space-y-6">
          <div className="p-4 lg:w-1/5 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-3xl inline-flex items-center justify-center text-green-500 mb-5">
              <IoMdCheckmarkCircleOutline />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-base font-medium">Dramatically boost your authority and market leadership in your industry with prospects and peers
              </h2>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-3xl inline-flex items-center justify-center text-green-500 mb-5">
              <IoMdCheckmarkCircleOutline />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-base font-medium">Raise awareness on new products and services before prospects even know to search for them
              </h2>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-3xl inline-flex items-center justify-center text-green-500 mb-5">
              <IoMdCheckmarkCircleOutline />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-base font-medium">Increase social proof with excerpts from high profile publications
              </h2>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-3xl inline-flex items-center justify-center text-green-500 mb-5">
              <IoMdCheckmarkCircleOutline />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-base font-medium">Attract more visitors to your website when readers come across your story and within search engines
              </h2>
            </div>
          </div>
          <div className="p-4 lg:w-1/5 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-3xl inline-flex items-center justify-center text-green-500 mb-5">
              <IoMdCheckmarkCircleOutline />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-base font-medium">Improve your search engine rankings with article backlinks
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                <p className="leading-relaxed">“Having chemistry with your partners is key, and we’ve definitely found that as well as a very strategic mind—in our account team. We simply can’t envision our marketing mix without their content strategy and media relations savvy!”</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300" />
                <p className="leading-relaxed">“Plicio was engaged and helpful throughout the entire decision-making process, answering all of our questions and concerns. Once the Interdependence team came on board we saw almost instant results, with a steady flow of features and interest from media and influencers.”</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                <p className="leading-relaxed">“Having a partner that understands the intricacies of our industry has been an invaluable asset for our team. From standard releases to thought leadership and community activations, the Interdependence team has helped shape and promote our messaging with salient attention to brand position and values.”</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
