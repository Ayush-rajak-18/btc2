import React from "react";
import { Link } from "react-router-dom";
import { LuggageIcon } from "lucide-react";

const NavigationLinks = () => {
  return (
    <ul className="flex gap-x-6 text-gray-600 [&>*]:cursor-pointer">
      <li>Home</li>
      <li>Discover</li>
      <li>Activities</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full py-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1 font-medium md:gap-2">
          <div className="rounded-full text-blue-500">
            <LuggageIcon className="mx-auto" />
          </div>
          <div>Bharat Travel</div>
        </div>
        <div className="hidden items-center md:flex">
          <NavigationLinks />
        </div>
        <div className="flex gap-x-2.5 md:gap-x-2">
          <button className="rounded-md border-[1px] border-blue-500 px-2.5 py-1.5 text-blue-500"
           onClick={() => window.location.href='/Register'}
           >
            Register

          </button>
          
            <button className="rounded-md bg-blue-500 px-2.5 py-1.5 text-white hover:bg-blue-600"
              onClick={() => window.location.href='/signin'}
            >
              Sign In
            </button>
       
        </div>
      </div>
      <div className="my-2 flex items-center justify-center md:hidden">
        <div className="overflow-x-scroll">
          <NavigationLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
