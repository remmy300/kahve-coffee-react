// components/CoffeeCard.tsx
import type { CoffeeProduct } from "@/types";

interface CoffeeCardProps {
  product: CoffeeProduct;
}

const CoffeeCard = ({ product }: CoffeeCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              product.roastLevel === "light"
                ? "bg-amber-300"
                : product.roastLevel === "medium"
                ? "bg-amber-500"
                : product.roastLevel === "medium-dark"
                ? "bg-amber-700"
                : "bg-amber-900"
            }`}
          ></span>
          <span className="text-sm text-gray-600 capitalize">
            {product.roastLevel} roast
          </span>
        </div>

        <div className="mt-3">
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.tastingNotes.map((note) => (
            <span key={note} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {note}
            </span>
          ))}
        </div>

        <button className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
