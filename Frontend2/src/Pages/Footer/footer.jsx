import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto" >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src="https://img.icons8.com/?size=100&id=nMSSSpYre8pz&format=png&color=000000" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">TickItNow</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">TickItNow™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
