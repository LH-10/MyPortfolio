import Link from "next/link"
import { LINKS } from "@/misc/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { faEnvelope, faHome, faHouse } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <header className="bg-gray-50 backdrop-blur-md sticky top-0 z-50 border-b border-none animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden min-[776px]:flex justify-between items-center">
          {/* Logo */}
          <a
            href={LINKS.home}
            className="text-xl font-bold text-gray-900 relative group transition-all px-3 duration-300 origin-left hover:scale-105 hover:bg-purple-600 hover:text-white"
          >
            LH10
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></span>
          </a>

          <nav className="flex items-center space-x-16">
            <a
              href={LINKS.home}
              className="text-gray-600 relative group px-2 py-1 transition-all duration-300 hover:text-gray-900"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
            
            <a
              href={LINKS.projects}
              className="text-gray-600 relative group px-2 py-1 transition-all duration-300 hover:text-gray-900"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={LINKS.resume}
              target="_blank"
              className="bg-gray-100 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
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

        {/* Mobile Layout */}
        <div className="flex min-[776px]:hidden justify-between items-center">
          {/* Logo */}
          <a
            href={LINKS.home}
            className="text-xl font-bold text-gray-900 relative group transition-all px-3 duration-300 origin-left hover:scale-105 hover:bg-purple-600 hover:text-white"
          >
            LH10
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></span>
          </a>

          {/* Mobile Menu Toggle */}
          <div className="relative group">
            <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
            <label 
              htmlFor="mobile-menu-toggle"
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
            >
              <div className="relative w-6 h-6">
                <span className="absolute left-0 top-1 w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:top-3 peer-checked:rotate-45"></span>
                <span className="absolute left-0 top-3 w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:opacity-0"></span>
                <span className="absolute left-0 top-5 w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out peer-checked:top-3 peer-checked:-rotate-45"></span>
              </div>
            </label>

            {/* Mobile Menu Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible transition-all duration-300 transform scale-95 peer-checked:scale-100">
              <nav className="p-4 space-y-2">
                <a
                  href={LINKS.home}
                  className="block text-gray-700 text-center hover:text-violet-600 hover:bg-gray-50 transition-colors duration-200 py-3 px-3 rounded-lg"
                >
                  Home
                </a>
                <a
                  href={LINKS.projects}
                  className="block text-gray-700 text-center hover:text-violet-600 hover:bg-gray-50 transition-colors duration-200 py-3 px-3 rounded-lg"
                >
                 Projects
                </a>
                <a
                  href={LINKS.resume}
                  target="_blank"
                  className=" text-gray-700 hover:text-violet-600 text-center justify-center hover:bg-gray-50 transition-colors duration-200 py-3 px-3 rounded-lg flex items-center "
                >
                  <svg className="w-4 h-4 mr-1 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="">Download CV</span>
                </a>
                <a
                  href={LINKS.contact}
                  className="block bg-white text-violet-600 font-semibold hover:bg-slate-100 text-center py-3 px-4 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mt-4"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mx-1"/>Contact Me
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}