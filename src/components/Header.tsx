import Link from "next/link"
import { LINKS } from "@/misc/data"

export default function Header() {
  return (
    <header className="bg-gray-50 backdrop-blur-md sticky top-0 z-50 border-b border-none animate-fade-in">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href={LINKS.home} 
          className="text-xl font-bold text-gray-900 relative group transition-all px-3 duration-300 origin-left hover:scale-105 hover:bg-purple-600 hover:text-white"
        >
          LH10
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></span>
        </Link>

        <nav className="hidden md:flex items-center space-x-16">
          <Link 
            href={LINKS.home} 
            className="text-gray-600 relative group px-2 py-1 transition-all duration-300 hover:text-gray-900"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
          </Link>
                   <Link 
            href={LINKS.projects} 
            className="text-gray-600 relative group px-2 py-1 transition-all duration-300 hover:text-gray-900"
          >
            <span className="relative z-10">Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            
            href={LINKS.resume}
            target="_blank"
            className="hidden sm:inline-block bg-gray-100 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-gray-200 group-hover:w-full transition-all duration-400 ease-out"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out delay-150"></span>
            <span className="relative z-10 group-hover:text-gray-800 transition-colors duration-300 flex items-center space-x-2">
              <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </span>
          </a>
          <a
            href={LINKS.contact}
            className="bg-white text-violet-600 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-700 via-purple-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-[1px] rounded-xl bg-white"></span>
            <span className="relative z-10 group-hover:text-violet-700 transition-colors duration-300">
              Contact Me
            </span>
            <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-700 via-purple-600 to-purple-500 blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></span>
          </a>
        </div>
      </div>
    </header>
  )
}