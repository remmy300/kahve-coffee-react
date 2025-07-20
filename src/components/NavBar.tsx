import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <div
      className="
        scrolled bg-amber-50 backdrop-blur-sm
       flex justify-between items-center shadow rounded p-5 top-0 left-0 sticky z-10 transition-colors duration-300"
    >
      <h1 className="text-3xl font-bold italic">
        <span className="">Roaster</span>
        <span>Bros</span>
      </h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-around items-center space-x-8 w-full">
        {["Home", "About", "Shop", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="
        relative pb-1 text-lg font-medium
      
        hover:text-amber-600 transition-colors duration-200
        group
      "
          >
            {item}
            <span
              className="
        absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600
        transition-all duration-300 ease-out
        group-hover:w-full
      "
            />
          </Link>
        ))}
      </nav>

      {/* Mobile */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4 mt-5 text-xl font-semibold items-center">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default NavBar;
