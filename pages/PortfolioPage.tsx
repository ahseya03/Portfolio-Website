import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Project 1: AI College Counsellor',
      embed: (
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FKqVKZQ2B92NtH5W1wJB9oG%2FCollege-Admission-Counselor-AI%3Fm%3Ddev%26node-id%3D0%253A1"
          allowFullScreen
        ></iframe>
      ),
      description: 'AI college counsellor designed to help high schoolers.',
      link: 'https://www.figma.com/design/KqVKZQ2B92NtH5W1wJB9oG/College-Admission-Counselor-AI?node-id=0%3A1&t=bOIYZd8KtLGFDUxD-1',
    },
    {
      title: 'Project 2: Canvas AI',
      embed: (
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9AfksRrQydgWLr30InoVRb%2FCSS-480---Team-Pink%3Fm%3Ddev%26scaling%3Dscale-down%26page-id%3D0%253A1%26node-id%3D211-376%26starting-point-node-id%3D211%253A376%26show-proto-sidebar%3D1%26t%3DYpcZb3Z65raL6EZR-1"
          allowFullScreen
        ></iframe>
      ),
      description: 'AI Canvas Extension to Help Students with ADHD',
      link: 'https://www.figma.com/proto/9AfksRrQydgWLr30InoVRb/CSS-480---Team-Pink?node-id=211%3A376&t=YpcZb3Z65raL6EZR-1',
    },
    {
      title: 'Project 2: AI Smart Home',
      embed: (
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="1200"
          height="1000"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F172trRhZErcGZE6ElsyQ13%2FFigma-Prototype%3Fnode-id%3D1-10%26starting-point-node-id%3D1%253A7%26t%3DyDVYgrFFq9wvWJTk-1"
          allowFullScreen
          className="mb-2 rounded-md"
        ></iframe>
      ),
      description: 'Figma Prototype for Smart Home App.',
      link: 'https://www.figma.com/design/172trRhZErcGZE6ElsyQ13/Figma-Prototype?m=dev&node-id=0%3A12',
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto bg-[#E6F2FF] min-h-screen p-8">
      {/* Top Navigation Links */}
 
<div className="flex justify-end items-center space-x-4 mb-8">
  <Link href="/" className="text-blue-500 hover:underline">Home</Link>
  <Link href="/ThingsToRead" className="text-blue-500 hover:underline">Things to Read</Link>
  <Link href="/PortfolioPage" className="text-blue-500 hover:underline">My Portfolio</Link>
</div>


      {/* Hero Section */}
      <section className="text-center my-12">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My AI Projects Portfolio
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Exploring the cutting edge of artificial intelligence
        </motion.p>
        <Image src="/aboutme.jpeg" alt="AI" width={600} height={400} className="mx-auto rounded-md" />
      </section>

      {/* Projects Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="relative">
          <motion.div
            className="p-4 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2">{projects[currentSlide].title}</h3>
            {projects[currentSlide].image && (
              <Image src={projects[currentSlide].image} alt={projects[currentSlide].title} width={1200} height={900} className="mb-2 rounded-md" />
            )}
            {projects[currentSlide].embed && projects[currentSlide].embed}
            <p className="mb-2">{projects[currentSlide].description}</p>
            <Link href={projects[currentSlide].link}>
              <button className="text-white bg-gray-800 px-4 py-2 rounded-md">View Project</button>
            </Link>
          </motion.div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">Prev</button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">Next</button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="my-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">I have experience in frontend development using HTML, CSS, and TypeScript, along with frameworks like React and Next.js. Additionally, I am proficient in Python and have worked with libraries and frameworks such as TensorFlow for AI experimentation. My expertise also extends to design tools like Figma and conducting usability studies. I am constantly learning and experimenting with new technologies and frameworks to expand my skill set and push the boundaries of what is possible in AI</p>
        <Image src="/aboutme2.jpeg" alt="About Me" width={300} height={300} className="rounded-full mx-auto" />
      </section>

      {/* Skills Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            className="bg-gray-200 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold">Machine Learning</h3>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold">Deep Learning</h3>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold">Natural Language Processing</h3>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-4 rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold">Data Science</h3>
          </motion.div>
        </div>
      </section>
{/* Contact Me Section */}
<section className="my-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <form action="https://formspree.io/f/mdoqvebg" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="Your name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Your email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" name="message" placeholder="Your message" required></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PortfolioPage;
