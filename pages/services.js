import Head from "next/head";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
      <div className="container mx-auto text-center md:text-start items-center px-4 text-gray-600">
        <h1 className="text-5xl font-medium my-9 text-center text-[#18206F]">
          Our Services
        </h1>

        <div className="flex flex-col md:flex-row py-12 items-center">
          <img src="PUBLIC.jpg" alt="media" className="w-full md:hidden" />
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-medium mt-2 md:mt-0 mb-3 text-[#18206F]">
              Media Relations
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Media relations is an essential component of public relations,
              enabling brands to develop fruitful relationships with journalists
              and media outlets to secure favorable coverage. Effective media
              relations requires a nuanced understanding of the media landscape,
              building strong relationships, and crafting engaging stories. In
              today's digital age, the scope of media relations has expanded to
              include engaging with bloggers, influencers, and social media
              platforms, enabling brands to expand their reach, establish
              credibility, and connect with a diverse audience.
            </p>
          </div>
          <img
            src="PUBLIC.jpg"
            alt="media"
            className="hidden md:block w-full md:w-5/12 md:pl-14"
          />
        </div>

        <div className="flex flex-col md:flex-row py-12 items-center">
          <img
            src="crisis.jpg"
            alt="crisis"
            className="w-full md:w-5/12 md:pr-14"
          />
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-medium mt-2 md:mt-0 mb-3 text-[#18206F]">
              Crisis Management
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Crisis management is the process of mitigating the impact of an
              unexpected and potentially disastrous event on a company's
              reputation and operations. It involves assessing the situation,
              developing a strategy, and executing a plan to contain the crisis
              and communicate effectively with stakeholders. Effective crisis
              management can help to preserve a brand's reputation, maintain
              customer trust, and minimize financial losses. It is a critical
              component of any comprehensive risk management plan.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-12 items-center">
          <img src="EVENT.jpg" alt="event" className="w-full md:hidden" />
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-medium mt-2 md:mt-0 mb-3 text-[#18206F]">
              Event Planning
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Event planning is a key aspect of public relations and marketing,
              as it provides an opportunity to build your brand, engage your
              target audience, and generate positive media coverage. Successful
              event planning requires a deep understanding of your target
              audience, a clear plan for executing the event, and the ability to
              manage all aspects of the event, from securing venues and vendors
              to coordinating logistics and executing the event itself. Whether
              you're planning a small, intimate gathering or a large-scale
              event, effective event planning is essential to ensuring the
              success of your event.
            </p>
          </div>
          <img
            src="EVENT.jpg"
            alt="event"
            className="hidden md:block w-full md:w-5/12 md:pl-14"
          />
        </div>

        <div className="flex flex-col md:flex-row py-12 items-center">
          <img
            src="content.jpg"
            alt="content-management"
            className="w-full md:w-5/12 md:pr-14"
          />
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-medium mt-2 md:mt-0 mb-3 text-[#18206F]">
              Content Creation
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Content creation is a key aspect of modern marketing and public
              relations, as it provides a way to engage your target audience and
              build your brand. Whether it's blog posts, video production, or
              social media content, effective content creation requires a deep
              understanding of your target audience, a clear understanding of
              your brand, and the ability to craft compelling stories that
              resonate with your target audience. Content creation is also about
              knowing where and how to distribute your content for maximum
              impact, as well as measuring its effectiveness to ensure you are
              reaching your goals.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row py-12 items-center">
          <img
            src="marketing.jpg"
            alt="marketing"
            className="w-full md:hidden"
          />
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-medium mt-2 md:mt-0 mb-3 text-[#18206F]">
              Influencer Marketing
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Influencer marketing is a modern marketing strategy that leverages
              the power of social media influencers to reach your target
              audience, increase brand awareness, and drive sales. Effective
              influencer marketing requires a deep understanding of the
              influencer landscape, a clear understanding of your target
              audience, and the ability to build strong relationships with
              influencers who align with your brand. Whether it's through
              product collaborations, sponsored content, or influencer events,
              influencer marketing provides an opportunity to reach a wider
              audience, build your brand, and ultimately drive sales.
            </p>
          </div>
          <img
            src="marketing.jpg"
            alt="marketing"
            className="hidden md:block w-full md:w-5/12 md:pl-14"
          />
        </div>

        <div className="flex flex-col md:flex-row py-12 items-center">
          <img
            src="SOCIAL-MEDIA.jpg"
            alt="social-media"
            className="w-full md:w-5/12 md:pr-14"
          />
          <div className="w-full md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-medium mt-2 md:mt-0 mb-3 text-[#18206F]">
              Social Media Management
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Social media management is an essential aspect of modern marketing
              and public relations. It involves creating and executing effective
              social media strategies, from content creation to community
              management, to build your brand and engage your target audience.
              Effective social media management requires a deep understanding of
              the social media landscape, a clear understanding of your target
              audience, and the ability to craft compelling stories that
              resonate with your target audience. It's also about knowing which
              platforms are best for your brand and executing your strategies
              effectively, as well as measuring the effectiveness of your
              efforts to ensure that you are reaching your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
