"use client"

import Footer from "@/components/Footer"
import FadeInSection from "@/components/FadeInSection"
import Image from "next/image"
import Link from "next/link"
import { PROJECTS } from "@/misc/data"
import { motion } from "framer-motion"


export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <main className="container mx-auto px-6 py-12">
        <motion.div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of projects I've worked on, showcasing my skills in full-stack development, and
              problem-solving.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROJECTS.map((project, index) => (
            <FadeInSection key={project.id} className={`delay-${index * 100}`}>
              <Link
                href={`/projects/${project.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Screenshot of ${project.title}`}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : project.status === "in-progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.status.replace("-", " ")}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{project.shortDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech.name} className={`${tech.color} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="capitalize">{project.category}</span>
                    <span>{new Date(project.startDate).getFullYear()}</span>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
          <div className="text-center bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a
              href="#contact"
              className="inline-block bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-300 font-semibold px-8 py-3 rounded-lg"
            >
              Get In Touch
            </a>
          </div>
        </FadeInSection>
      </main>

      <Footer />
    </div>
  )
}
