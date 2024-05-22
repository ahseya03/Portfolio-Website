import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  const [interests, setInterests] = useState(['Learning AI', 'Frontend Programming', 'Baking']);

  const reorderInterests = () => {
    // Reorder the interests array
    const newInterests = [interests[1], interests[2], interests[0]];
    // Update the state with the reordered array
    setInterests(newInterests);
  };

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: '#E6F2FF' }}>
      {/* Top navigation */}
      <div className="flex justify-end p-4">
        <Link href="/" className="text-blue-500 hover:underline mr-4">Home</Link>
        <Link href="/ThingsToRead" className="text-blue-500 hover:underline mr-4">Things to Read</Link>
        <Link href="/PortfolioPage" className="text-blue-500 hover:underline">My Portfolio</Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6">Hi, Welcome to Ayesha&apos;s Website!</h1>

        <section className="text-center">
          <p>I am a senior Computer Science student with a passion for building websites and upskilling in AI domain.</p>
          <Image
            src="/baking.jpg"
            alt="Ayesha"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-center mb-4">Things That Interest Me</h2>
          <ul className="list-disc list-inside">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <button
              onClick={reorderInterests}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reorder List
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
