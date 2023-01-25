import Head from 'next/head'
import { HiOutlineSpeakerphone } from "react-icons/hi"

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

    </>
  )
}
