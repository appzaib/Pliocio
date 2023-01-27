import Head from 'next/head'
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { FaMarker } from "react-icons/fa"
import { TiMessages } from "react-icons/ti"
import { MdSocialDistance } from "react-icons/md"
import { SiWebflow } from "react-icons/si"
import { GiPencilBrush } from "react-icons/gi"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pliocio</title>
        <meta name="description" content="Your Next Firm" />
      </Head>
      <div className="section text-center mb-5">
        <img src="featured.jpeg" className='w-full h-auto' alt="" />
        <h2 className='text-3xl px-3 py-1 tracking-wide text-slate-700'>We position companies for market success and create awareness among their high‑value audiences.
        </h2>
      </div>
      <div className='text-center bg-slate-50'>
        <h2 className='lg:text-5xl pt-3'>Our Services</h2>
        <div className="container px-6 py-14 mx-auto">
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
                  <h2 className='text-xl font-semibold text-zinc-700'>Brand Communications</h2>
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
    </>
  )
}
