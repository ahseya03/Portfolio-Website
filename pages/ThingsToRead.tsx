import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const ThingsToRead = () => {
  // Array of links to external websites
  const links = [
    // Add more links as needed
    { title: 'Harry Potter', url: 'https://www.pottermore.com/' },
    { title: 'Percy Jackson', url: 'https://www.readriordan.com/' },
    { title: 'The Hunger Games', url: 'https://www.scholastic.com/thehungergames/' },
    { title: 'The Lord of the Rings', url: 'https://www.lordoftherings.net/' },
    { title: 'To Kill a Mockingbird', url: 'https://www.harpercollins.com/9780061120084/to-kill-a-mockingbird/' },
    { title: '1984', url: 'https://www.planetebook.com/free-ebooks/1984.pdf' },
    { title: 'The Great Gatsby', url: 'https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567' },
    { title: 'The Catcher in the Rye', url: 'https://www.britannica.com/topic/The-Catcher-in-the-Rye' },
    { title: 'The Chronicles of Narnia', url: 'https://www.cslewis.com/narnia/' },
    { title: 'Game of Thrones', url: 'https://georgerrmartin.com/grrm_book/a-game-of-thrones-a-song-of-ice-and-fire-book-one/' },
  ];

  // Function to handle clicking and pressing Enter key
  const handleKeyPress = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4" style={{ backgroundColor: '#E6F2FF' }}> {/* Light blue background */}
      <div className="container mx-auto">
        <div className="flex justify-end items-center mb-4">
          <Link href="/" className="text-blue-500 hover:underline mr-4">Home</Link>
          <Link href="/ThingsToRead" className="text-blue-500 hover:underline mr-4">Things to Read</Link>
          <Link href="/PortfolioPage" className="text-blue-500 hover:underline">My Portfolio</Link>
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">My Reading List</h1>
        <ul className="list-disc list-inside">
          {links.map((link, index) => (
            <li key={index} className="my-2">
              <button
                onClick={() => handleKeyPress(link.url)} // Handle click
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleKeyPress(link.url); // Handle Enter key press
                  }
                }}
                tabIndex={0} // Ensure button is focusable
                className="text-blue-500 hover:underline"
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThingsToRead;


