import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      router.push(path);
    }
  };
  

  return (
    <nav className="flex justify-between items-center py-4">
      <div>
        <Link href="/">
          <a
            className="text-blue-500 hover:underline"
            onKeyDown={(e) => handleKeyDown(e, '/')}
            tabIndex={0} // Ensure link is focusable
          >
            Home
          </a>
        </Link>
      </div>
      <div>
        <Link href="/ThingsToRead">
          <a
            className="text-blue-500 hover:underline"
            onKeyDown={(e) => handleKeyDown(e, '/ThingsToRead')}
            tabIndex={0} // Ensure link is focusable
          >
            Things to Read
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
