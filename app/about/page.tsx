export default function About() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="text-lg text-gray-600 mt-2">Building digital experiences with React & Next.js.</p>
        </section>
  
        {/* About Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Who Am I?</h2>
          <p className="text-gray-600 mt-2">
            I’m a passionate Frontend Developer specializing in React, Next.js, and Tailwind CSS. 
            I enjoy crafting clean, efficient, and visually appealing web applications.
          </p>
        </section>
  
        {/* Tech Stack */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Tech Stack</h2>
          <div className="flex flex-wrap gap-4 mt-3">
            <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">React</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">Next.js</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">Node.js</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">MongoDB</span>
          </div>
        </section>
  
        {/* Projects / Experience */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
          <ul className="mt-3 space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium">Raksa Aegis App</h3>
              <p className="text-gray-600 text-sm">A web-based insurance system for PT Asuransi Raksa Pratikara.</p>
            </li>
            <li className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-medium">Company Profile Ratu Seroja Nirwana</h3>
              <p className="text-gray-600 text-sm">A company profile website built using Next.js.</p>
            </li>
          </ul>
        </section>
  
        {/* Call to Action */}
        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Let's Connect</h2>
          <p className="text-gray-600 mt-2">Interested in working together? Feel free to reach out!</p>
          <a
            href="mailto:youremail@example.com"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </section>
      </div>
    );
  }
  