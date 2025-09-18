"use client"
import { motion, Variants } from "framer-motion"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { LINKS, PROJECTS } from "@/misc/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3Alt, faDocker, faGithub, faHtml5, faJava } from "@fortawesome/free-brands-svg-icons"
import { faCode, faTools } from "@fortawesome/free-solid-svg-icons"
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs"
import { faGitAlt } from "@fortawesome/free-brands-svg-icons/faGitAlt"
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import Head from "next/head"

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3)


  const skills = [
  { name: "HTML", icon: faHtml5, color: "text-orange-600" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-600" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "Go", imageSrc:"/go-gopher.svg", color: "text-blue-500" },
  { name: "Java", icon: faJava, color: "text-yellow-600" },
  { name: "Python", icon: faPython, color: "text-yellow-400" },
  { name: "TypeScript", imageSrc:"/typescript.svg", color: "text-blue-700" },
  { name: "React", icon: faReact, color: "text-cyan-500" },
  { name: "Node.js", icon: faNodeJs, color: "text-green-600" },
  { name: "Express.js", imageSrc:"/Express.svg", color: "text-green-600" },
  { name: "Tailwind", imageSrc:"/tailwindcss.svg", color: "text-green-600 my-2" },
  { name: "Git", icon: faGitAlt, color: "text-orange-500" },
  { name: "MongoDB", imageSrc: "/mongodb.svg", color: "text-green-700" },
  { name: "MySQL", imageSrc: "/mysql1.svg", color: "text-green-700" },
  { name: "Electron", imageSrc:"/electron.svg", color: "text-cyan-500" },
  { name: "Github", icon: faGithub, color: "text-black" },
  { name: "Docker", icon: faDocker, color: "text-blue-600" },

]

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

  const animateRight = {
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
  <>
        <Head>
        <title>Lalit Hinduja | Portfolio</title>
        <meta name="description" content="Lalit Hinduja is a full-stack web developer I'm currently expanding into desktop app devlopment . Explore projects, resume in my portfolio." />
        <meta name="keywords" content="lalit hinduja,Lalit,Hinduja,portfolio, web developer, frontend developer, fullstack,lalit portfolio," />
        <meta name="author" content="Lalit Hinduja" />
        <link rel="canonical" href="https://lalit-hinduja-portfolio.vercel.app/" />
      </Head>
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
          <div className="md:col-span-5  p-4 items-center justify-center flex flex-col mx-auto">
            <motion.h2 className="text-5xl md:text-[52px] font-bold  text-black-800 mb-12 leading-tight" animate="active" variants={fadeInUp}>
             {"Hi, I'm"} <span className="">

             {"Lalit Hinduja"}
             </span>
            </motion.h2>
           
            <motion.p className=" text-2xl text-gray-600 mb-12  md:text-center text-justify" variants={fadeInUp}>
{"              I'm a"} 
             <motion.b>
                 {" full-stack developer "}
                </motion.b>
{"                 continuously learning new technologies, I'm currently expanding into desktop app development to tackle more complex, cross-platform projects and deliver impactful solutions."}              
            </motion.p>
            {/* <motion.p className="text-lg text-gray-600 mb-8 max-w-2xl text-justify" variants={fadeInUp}>
              {
                "Currently, I'm expanding my skill set to include desktop app development, aiming to diversify my expertise and take on more complex, cross-platform projects. My goal is to keep evolving as a developer and continue delivering applications that solve real problems in meaningful ways."
                }
                </motion.p> */}
            <motion.div className="flex flex-wrap gap-4 my-5" variants={fadeInUp}>
              <a
                href="#projects"
                className="font-semibold px-5 py-3 text-center rounded-lg text-white transition-colors duration-300 bg-violet-600 hover:bg-violet-700"
                >
                <FontAwesomeIcon icon={faCode} className="text-md mx-1"/>
                View My Work
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-center text-white hover:bg-gray-900 transition-colors duration-300 font-semibold px-5 py-3 rounded-lg"
                >
            <FontAwesomeIcon icon={faGithub} className="text-xl mx-1" />
                GitHub
              </a>
            </motion.div>
          </div>
           
        </motion.section>
        <motion.section
          id="about"
          className="grid md:grid-cols-5  gap-12 items-center mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp} >
            <motion.div className="md:col-span-5  p-2 items-center  justify-center flex flex-col mx-auto">
            <motion.h2 className="text-4xl font-bold my-12">About Me</motion.h2>
          
            
            <motion.p className="text-xl text-gray-700 mb-4 max-w-7xl text-justify" variants={fadeInUp}>
              {
                "I’m a full-stack developer with a focus on building efficient and maintainable web applications. I thrive on turning ideas into scalable solutions by making use modern frameworks , tools and programming languages  . With experience in building intuitive user experience and robust backend systems, "+
                "I aim to deliver applications that not only perform well but also provide a seamless user experience."
              }
            </motion.p>
            <motion.p className="text-xl text-gray-700 mb-4 max-w-7xl text-justify " variants={fadeInUp}>
              {
                "Currently, I’m expanding my skill set to include desktop app development, aiming to diversify my expertise and take on more complex, cross-platform projects."+
                " My recent work with Electron.js, SQLite, and TypeScript has allowed me to explore building desktop applications with modular and secure structures, further strengthening my ability to deliver versatile solutions."
              }
            </motion.p>
            <motion.p className="text-xl text-gray-700 mb-4 max-w-7xl text-justify" variants={fadeInUp}>
{     " My goal is to keep evolving as a developer and continue delivering applications that solve real-world problems in meaningful ways."}        
      {" I’m passionate about pushing the boundaries of what I can build whether it's web, desktop, or beyond. I’m excited to take on projects that challenge me to grow and innovate. "}   
            </motion.p>
              </motion.div>
           <motion.div className="md:col-span-5 overflow-hidden">
          <motion.h2
            className="text-4xl font-extrabold text-center text-foreground mb-12 tracking-tight"
            variants={fadeInUp}
            >
            My Toolkit <FontAwesomeIcon icon={faTools} className="ml-2 text-gray-500" />
          </motion.h2>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto"
            variants={animateRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            >
            {skills.map((skill) => (
              <motion.div
              key={skill.name}
              className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg  transition-all duration-300 hover:bg-muted/50 group"
              
              whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center space-y-2">
                  {skill.imageSrc ? (
                    <Image
                    src={skill.imageSrc || "/placeholder.svg"}
                    alt={skill.name}
                    width={30}
                    height={30}
                    
                    className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  ) : (
                    <FontAwesomeIcon
                    //@ts-expect-error non-issue
                    icon={skill.icon}
                    className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />)}
                  <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </motion.section>
        <motion.section
          id="projects"
          className="mb-24 md:mb-32 overflow-hidden"
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
    <motion.div key={project.id} variants={animateRight}>
      <Link
        href={`/projects/${project.slug}`}
        className="relative bg-white rounded-2xl  shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border border-gray-100 block"
        >
        {/* Option 1: Aspect ratio container (recommended) */}
        <div className="relative overflow-hidden  aspect-video">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain  transition-transform duration-500 ease-out bg-gray-50"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500"></div>
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
    </>
  )
}
