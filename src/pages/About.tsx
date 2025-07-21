import { Coffee, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
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

          <article className="md:w-1/2 bg-white/90 shadow-lg rounded-lg p-6 text-[#333]">
            <p className="text-lg">
              At Kahve, we believe coffee is more than just a beverage —
              it&apos;s a lifestyle rooted in mindfulness, wellness, and
              community. Born from a passion for both the art of coffee and the
              science of self-care, our mission is to create a space where every
              sip feels intentional. From ethically-sourced beans and clean
              ingredients to a serene café experience, we&apos;re redefining
              coffee culture for the conscious consumer — one cup at a time
            </p>
          </article>
        </div>
      </section>
      <section className="bg-[#f4ebe8] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#6f4e37] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-[#333] mb-6">
            To elevate the coffee experience through ethical sourcing, artisan
            roasting, and wellness-focused café culture.
          </p>
          <h2 className="text-3xl font-bold text-[#6f4e37] mb-4">Our Vision</h2>
          <p className="text-lg text-[#333]">
            To build a conscious coffee lifestyle brand rooted in health,
            connection, and sustainability — from Nairobi to the world.
          </p>
        </div>
      </section>
      <section className="bg-[#f9f5f3] py-12">
        <h2 className="text-3xl font-bold text-center text-[#6f4e37] mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-center">
          <div>
            <Coffee className="mx-auto mb-3 text-[#6f4e37]" size={36} />
            <h3 className="font-semibold text-lg mb-2">Quality</h3>
            <p>Handpicked, roasted to perfection, and brewed with love.</p>
          </div>
          <div>
            <Leaf className="mx-auto mb-3 text-[#6f4e37]" size={36} />
            <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
            <p>
              We care for the planet by sourcing ethically and reducing waste.
            </p>
          </div>
          <div>
            <Users className="mx-auto mb-3 text-[#6f4e37]" size={36} />
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p>
              From local farmers to loyal customers — you are part of our
              journey.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#6f4e37] text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Taste the Experience?
          </h2>
          <p className="mb-6">
            Browse our handpicked selection of ethically-sourced coffee and
            lifestyle products.
          </p>
          <Button
            variant="secondary"
            onClick={() => navigate("/shop")}
            className="bg-white text-[#6f4e37] hover:bg-[#f4ebe8]"
          >
            Explore Products
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
