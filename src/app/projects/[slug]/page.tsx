import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug, PROJECTS } from "@/misc/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;

  const project =  getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title}` || "LH10 Project",
    description: project.shortDescription,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <main className="container mx-auto px-6 py-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

        {/* Project Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center  gap-5 md:justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900  mb-2">{project.title}</h1>
                  <p className="text-lg text-gray-600 text-justify">{project.shortDescription}</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-300 font-semibold px-6 py-3 rounded-lg"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white text-end min-w-40  flex justify-center items-center gap-2  text-md hover:bg-gray-900 transition-colors duration-300 font-semibold px-5 py-3 rounded-lg"
                    >
                      <span>
                        
                        <FontAwesomeIcon icon={faGithub} className="text-md "/>
                        </span>
                        View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech.name} className={`bg-gray-100 hover:bg-purple-600 hover:text-white duration-300 hover:scale-110 cursor-pointer text-sm font-medium px-3 py-1 rounded-full`}>
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Project status */}
              <div className="grid md:grid-cols-1 gap-2 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Category:</span> {project.category}
                </div>
                <div>
                  <span className="font-semibold">Status:</span> {project.status.replace("-", " ")}
                </div>
             
              </div>
            </div>
        

        {/* Project Details */}
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4 ">
              <div className="bg-white rounded-xl shadow-md px-8 pb-4 ">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed text-justify">{project.fullDescription}</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

         

            </div>
        {/* Explore Project */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore More Projects</h2>
            <Link
              href="/projects"
              className="inline-block bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-300 font-semibold px-8 py-3 rounded-lg"
            >
              View All Projects
            </Link>
          </div>
      </main>

    </div>
  )
}
