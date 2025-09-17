import { LINKS } from "@/misc/data"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      I am currently seeking new opportunities. If you have a position available or would like to connect, feel free to reach out!
        </p>
        <a
          href={`mailto:${LINKS.email}`}
          className="inline-block bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-300 font-semibold text-lg px-8 py-4 rounded-lg shadow-sm"
        >
          {LINKS.email}
        </a>

        <div className="flex justify-center space-x-6 mt-8">
          <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl bg-white text-blue-600" />
            </a>
            
      
        </div>

        <p className="text-sm text-gray-500 mt-12">&copy; {`${new Date().getFullYear()}`} Lalit Hinduja.</p>
      </div>
    </footer>
  )
}
