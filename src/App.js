import React, { useState } from "react";
import { Linkedin, Mail, Phone, Moon, Sun } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}>
      {/* Navbar */}
      <header className={darkMode ? "bg-gray-800 text-white" : "bg-blue-900 text-white"}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Keerthana Veeramreddy</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#skills" className="hover:text-yellow-300">Skills</a>
            <a href="#experience" className="hover:text-yellow-300">Experience</a>
            <a href="#projects" className="hover:text-yellow-300">Projects</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">Aspiring Data Engineer</h2>
        <p className="mt-4 text-lg">SQL Optimization | Azure Data Factory & Databricks | Microsoft Certified</p>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="leading-relaxed">
          I am an enthusiastic and detail-oriented Data Engineer with hands-on experience in SQL, Azure Data Factory, and Databricks.
          Currently working at Datarise Solutions, I optimize data pipelines, improve database performance, and build scalable cloud-based solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-200 py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            <span className="bg-white p-4 rounded-xl shadow">SQL Optimization</span>
            <span className="bg-white p-4 rounded-xl shadow">Azure Data Factory</span>
            <span className="bg-white p-4 rounded-xl shadow">Azure Databricks</span>
            <span className="bg-white p-4 rounded-xl shadow">Python</span>
            <span className="bg-white p-4 rounded-xl shadow">Web Development</span>
            <span className="bg-white p-4 rounded-xl shadow">Data Engineering</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-6">Experience</h3>
        <div className="space-y-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="font-bold">Data Engineer – Datarise Solutions</h4>
            <p className="text-sm text-gray-600">Dec 2024 – Present</p>
            <p>Worked on SQL optimization, database performance tuning, and built data workflows with Azure Data Factory & Databricks.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="font-bold">Web Development Intern – BrightGeeks Technologies</h4>
            <p className="text-sm text-gray-600">Jul 2024 – Aug 2024</p>
            <p>Built and optimized user-friendly websites using HTML, CSS, and JavaScript, improving performance and UX.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-200 py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <h4 className="font-bold">ETL Pipeline Automation</h4>
              <p>Built scalable ETL pipelines using Azure Data Factory and Databricks, improving efficiency by 40%.</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h4 className="font-bold">Portfolio Website</h4>
              <p>Developed this personal portfolio using React and TailwindCSS with dark mode support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={darkMode ? "bg-gray-800 text-white py-16 px-6" : "bg-blue-900 text-white py-16 px-6"}>
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:kirthanaveeramreddy@gmail.com" className="flex items-center gap-2">
              <Mail /> Email
            </a>
            <a href="tel:8019559115" className="flex items-center gap-2">
              <Phone /> Call
            </a>
            <a href="https://www.linkedin.com/in/keerthanaveeramreddy" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        <p>© {new Date().getFullYear()} Keerthana Veeramreddy | Built with React & Tailwind</p>
      </footer>
    </div>
  );
}

export default App;