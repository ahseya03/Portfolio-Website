import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [interests, setInterests] = useState(['Baking', 'Frontend Programming', 'Web Design']);

  // Function to reorder the interests list
  const reorderInterests = () => {
    setInterests([...interests].reverse());
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-6">Hi, Welcome to Ayesha's Website!</h1>
      <section className="my-8 text-center">
        <p>I am a senior Computer Science student with a passion for frontend programming and creating websites.</p>
        <Image
        src="/baking.jpg" // Add a leading slash here
        alt="Ayesha"
        width={150}
        height={150}
        className="rounded-full mx-auto"
        />

      </section>
      
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center">Things That Interest Me</h2>
        <ul className="list-disc list-inside my-4">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <div className="text-center">
          <button
            onClick={reorderInterests}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reorder List
          </button>
        </div>
      </section>
    </main>
  );
}
