import { Github, Linkedin, Mail, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import Timeline from "@/components/timeline"
import TechStack from "@/components/tech-stack"
import ContactCard from "@/components/contact-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Muhammad Rizal</h1>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Experience
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Staff Software Engineer
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Experienced frontend engineer specializing in React, TypeScript, and modern web technologies. Passionate
                about building scalable applications and optimizing developer experience.
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zalcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhzal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="mailto:muhzal94@gmail.com"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://zal.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image src="/profile.png" alt="Muhammad Rizal" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Professional Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Technical Skills</h2>
          <TechStack />
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Education</h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Informatics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Universitas Jenderal Soedirman, Purwokerto, Indonesia
              </p>
              <p className="text-gray-500 dark:text-gray-400">September 2012 - September 2016</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Get In Touch</h2>
          <ContactCard />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Muhammad Rizal. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
