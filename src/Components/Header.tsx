import React from "react";
import { HeaderProps } from "../Helpers/Model";

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <>
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="#" className="text-2xl font-bold text-primary">
                BR.F
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="hover:text-primary">
                  Women
                </a>
                <a href="#" className="hover:text-primary">
                  Men
                </a>
                <a href="#" className="hover:text-primary">
                  Kids
                </a>
                <a href="#" className="hover:text-primary">
                  Sports
                </a>
                <a href="#" className="hover:text-primary">
                  Brands
                </a>
                <a href="#" className="hover:text-primary">
                  New
                </a>
                <a href="#" className="text-red-500">
                  Sale
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block w-64">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg
                  className="w-5 h-5 absolute right-3 top-2.5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                className="relative cursor-pointer"
                onClick={onCartClick}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-xs flex items-center justify-center text-white">
                  2
                </span>
              </button>

              <button>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* <!-- Profile image in header --> */}
              <button className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
