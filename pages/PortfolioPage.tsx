import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components';
import 'tailwindcss/tailwind.css';

const PortfolioPage = () => {
  return (
    <div>
      <h1>My portfolio page</h1>
      <div>
        <p>I enjoy programming in my free time. The languages I use consist of C++, Java, Python, HTML, & CSS </p>
      </div>
      <div className="bg-blue-500 text-white text-center p-4 w-20 h-20">
        This is a blue box with centered text and padding.
      </div>
    </div>
  );
};

export default PortfolioPage;
