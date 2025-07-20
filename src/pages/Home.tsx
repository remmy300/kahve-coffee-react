import Hero from "@/components/Hero";
import CoffeeCard from "@/components/CoffeeCard";
import { Link } from "react-router-dom";

import TestimonialCarousel from "@/components/TestimonialCarousel";

import { coffeeProducts } from "@/Data";
import type { CoffeeProduct } from "@/types";

const Home = () => {
  // Get featured products with fallback
  const getFeaturedProducts = () => {
    const featured = coffeeProducts.filter((product) => product.isFeatured);

    // If less than 3 featured, add non-featured products
    if (featured.length < 3) {
      const nonFeatured = coffeeProducts
        .filter((product) => !product.isFeatured)
        .slice(0, 3 - featured.length);
      return [...featured, ...nonFeatured];
    }

    return featured.slice(0, 3);
  };

  const featuredProducts = getFeaturedProducts();

  // Verify uniqueness in development
  if (process.env.NODE_ENV === "development") {
    const ids = featuredProducts.map((p) => p.id);
    if (new Set(ids).size !== ids.length) {
      console.error("Duplicate IDs in featured products!");
    }
  }
  return (
    <div>
      <Hero />
      <section className="bg-amber-50 py-12">
        <h2 className="text-2xl font-semibold mt-3 text-center">
          Our Roasting Story
        </h2>
        <div className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 shadow rounded-lg overflow-hidden">
            <img
              src="/img/grinder.jpg"
              alt="Coffee roasting process"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2 text-gray-700 bg-white/90 shadow-lg p-8 rounded-lg">
            <h3 className="text-xl font-medium mb-4 ">
              Artisan Roasters Since 2010
            </h3>
            <p className="mb-4">
              We began with a 5kg roaster and a passion for perfecting the
              craft. Today, we operate state-of-the-art Probat roasters,
              meticulously developing profiles for each origin to highlight
              their unique characteristics.
            </p>
            <p className="mb-4">
              Our direct relationships with growers ensure ethical sourcing and
              premium quality green beans. We specialize in small-batch
              roasting, allowing precise control over each lot - whether it's a
              single-origin for specialty cafes or a consistent blend for
              wholesale partners.
            </p>
            <p className="mb-4">
              For retail customers, we offer freshly roasted bags with roast
              dates and brewing guides. Wholesale clients benefit from our
              flexible ordering systems, private labeling options, and barista
              training programs.
            </p>
            <p>
              Every batch is cupped by our Q-graded team, because we believe
              exceptional coffee should be both scientifically excellent and
              soulfully satisfying.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-amber-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">
            Featured Coffees
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Discover our premium selections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <CoffeeCard
                key={`featured-${product.id}`}
                product={product as CoffeeProduct}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              View All Coffees →
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hear from coffee lovers and wholesale partners
          </p>

          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
};

export default Home;
