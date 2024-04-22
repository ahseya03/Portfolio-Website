import React from 'react';
import Link from 'next/link';

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
  const handleKeyPress = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Link href="/" passHref={true} legacyBehavior={true}>
        <a>Home</a>
      </Link>
      <h1>Things to Read</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <button
              onClick={() => handleKeyPress(link.url)} // Handle click
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleKeyPress(link.url); // Handle Enter key press
                }
              }}
              tabIndex={0} // Ensure button is focusable
            >
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ThingsToRead;

