import { coffeeProducts } from "@/Data";
import type { CoffeeProduct } from "@/types";
import CoffeeCard from "@/components/CoffeeCard";

const Shop = () => {
  return (
    <div className="bg-white p-4 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {coffeeProducts.map((product) => (
          <CoffeeCard key={product.id} product={product as CoffeeProduct} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
