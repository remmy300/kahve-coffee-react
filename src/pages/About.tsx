const About = () => {
  return (
    <>
      <section className="bg-[url(/img/black-coffee.jpg)] h-screen bg-fixed bg-cover bg-center">
        <div className="flex flex-col justify-center items-center text-center px-6 h-full bg-black/60">
          <h2 className="text-white text-5xl font-bold mb-4">
            Crafting Exceptional Coffee since 2019
          </h2>
          <p className="text-white text-xl max-w-2xl mx-auto">
            We're obsessed with bringing you the world's finest single-origin
            and small-batch roasted coffee.
          </p>
        </div>
      </section>

      <section className="bg-[#f4ebe8] py-12">
        <h1 className="text-3xl font-bold text-center text-[#6f4e37] mb-10">
          Brewing Excellence, Cultivating Community
        </h1>

        <div className="flex flex-col md:flex-row gap-7 items-center mx-auto px-6 max-w-6xl">
          <div className="md:w-1/2 h-96 rounded-lg overflow-hidden shadow-md">
            <img
              src="/img/coffee4.jpg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 bg-white/90 shadow-lg rounded-lg p-6 text-[#333]">
            <h3 className="text-2xl font-semibold mb-4 text-[#4b3621]">
              Founder's Story
            </h3>
            <p className="mb-4">
              In 2019, after a decade immersed in the global coffee
              industry—from trading beans to mastering quality assurance and
              logistics—our founder set out to redefine the coffee experience in
              Nairobi and beyond. The Kahve Lifestyle was born from a simple
              belief: coffee should be more than a commodity; it&apos;s a
              catalyst for connection, health, and joy.
            </p>
            <p>
              Today, we blend artisanal coffee with fresh, local produce to
              create a lifestyle that nourishes both body and soul.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f4ebe8] py-12">
        <h1 className="text-2xl font bold text-center">Meet the founder</h1>
        <div className="flex flex-col md:flex-row items-center gap-7 max-w-6xl mx-auto">
          <div className="md:w-1/2 bg-white/90 shadow-lg p-6 text-[#333]">
            <p className="mb-4">
              Coffee taught me patience. Now, I want it to bring people
              happiness.
            </p>

            <ul className="mb-4">
              <li>10+ years in coffee trading, QA, and logistics.</li>
              <li>
                Advocate for ethical sourcing and farm-to-cup transparency.
              </li>
              <li>
                On a mission to merge coffee with Kenya&apos;s vibrant fresh
                produce for a healthier lifestyle.
              </li>
            </ul>

            <h1 className="text-center text-xl font-semibold">Why Coffee</h1>
            <p>
              My journey began when watching smallholder farmers hand-sort beans
              under the Kenyan sun .That&apos;s why every Kahve product is
              crafted to honor the craft, culture, and communities behind it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
