import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown, CheckCircle, Truck } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      id="hero"
      className='relative h-screen bg-[url("/img/coffee.jpg")] bg-cover  bg-center z-0'
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black/50 transition-all duration-700 hover:bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold italic mb-4  bg-gradient-to-r from-amber-400 to-amber-700 text-transparent bg-clip-text">
          Freshly Roasted Coffee
        </h1>

        <p className="text-lg md:text-3xl max-w-xl ">
          Artisan blends roasted to perfection.Discover the rich taste of our
          handcrafted coffee.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex -space-x-2">
            <img
              src="/img/arabica.jpg"
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <img
              src="/img/coffee4.jpg"
              className="w-9 h-9 rounded-full border-2 border-white"
            />
          </div>
          <span className="text-lg">Join 1,000+ happy customers</span>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-amber-400" />
            <span className="text-xl">100% Organic</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="text-amber-400" />
            <span className="text-xl">Free Shipping</span>
          </div>
        </div>
        <Button
          onClick={() => navigate("/shop")}
          className="mt-6 px-6 py-3 bg-white text-black  text-lg hover:bg-amber-500 transition-all transform hover:scale-105 shadow hover:shadow-xl"
        >
          Explore our menu
        </Button>
        <div className="absolute bottom-6  left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
