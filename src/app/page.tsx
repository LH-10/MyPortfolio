"use client"
import { motion, Variants } from "framer-motion"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { LINKS, PROJECTS } from "@/misc/data"

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3)

  const lineClampStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as const,
    WebkitLineClamp: 3,
  }

  // Animation variants
  const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const variantsRight = {
    hidden: { opacity: 0, x: 100 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <main className="container mx-auto px-6 py-12 md:py-20">
        <motion.section
          id="home"
          className="grid md:grid-cols-5  gap-12 items-center mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="md:col-span-5  p-2 items-center justify-center flex flex-col mx-auto">
            <motion.h1 className="text-4xl md:text-5xl font-bold  text-black-800 mb-4 leading-tight" animate="active" variants={fadeInUp}>
             Hi, I'm <span className="">

             Lalit Hinduja
             </span>
            </motion.h1>
            <motion.h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight" variants={fadeInUp}>
              Full-Stack Developer
            </motion.h1>
            <motion.p className="text-lg text-gray-600 mb-8 max-w-2xl text-justify" variants={fadeInUp}>
              {
                "I'm a full-stack developer with a focus on building efficient and maintainable web applications. I'm constantly learning and experimenting with new technologies to ensure the solutions I build are both efficient and effective."
              }
            </motion.p>
            <motion.p className="text-lg text-gray-600 mb-8 max-w-2xl text-justify" variants={fadeInUp}>
              {
                "Currently, I'm expanding my skill set to include desktop app development, aiming to diversify my expertise and take on more complex, cross-platform projects. My goal is to keep evolving as a developer and continue delivering applications that solve real problems in meaningful ways."
              }
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
              <a
                href="#projects"
                className="font-semibold px-6 py-3 rounded-lg text-white transition-colors duration-300 bg-violet-600 hover:bg-violet-700"
              >
                View My Work
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-300 font-semibold px-6 py-3 rounded-lg"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-4xl font-extrabold text-center text-gray-900 mb-4 tracking-tight"
            variants={fadeInUp}
          >
            My Work
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 font-medium"
            variants={fadeInUp}
          >
            Check out some of my recent work.
          </motion.p>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={variantsRight}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 block"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        project.image ||
                        "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=" ||
                        "/placeholder.svg"
                      }
                      alt={`Screenshot of ${project.title}`}
                      width={600}
                      height={400}
                      className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-violet-600">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={lineClampStyle}>
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech.name}
                          className={`bg-gray-50 text-xs font-semibold px-3 py-1 rounded-full shadow-sm transform hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-violet-600 hover:text-white`}
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:scale-110 hover:shadow-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12" variants={fadeInUp}>
            <Link
              href={LINKS.projects}
              className="inline-block font-semibold px-8 py-3 rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-violet-600 hover:bg-violet-700"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
