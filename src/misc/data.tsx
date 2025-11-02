

// Centralized links and data management
export const LINKS = {
  // Personal Links
  email: "lalit1652h@gmail.com",
  github: "https://github.com/LH-10",
  linkedin: "https://www.linkedin.com/in/lalith10",
  resume: "https://drive.google.com/file/d/1PyxQKoxG51qAXGwU1mYNwCitD5EPMbUn/view",

  // Navigation
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: "#contact",
} as const

// Project data structure
export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  technologies: Array<{
    name: string
    color: string
  }>
  features: string[]
  challenges?: string[]
  solutions?: string[]
  liveUrl?: string
  Installer?:string
  githubUrl?: string
  category: "Web" | "Mobile" | "Desktop" | "API"
  status: "Completed" | "in-progress" | "planned" | "ongoing"
 
}

export const PROJECTS: Project[] = [
   {
    id: "1",
    slug: "electron-timer-project",
    title: "Its Time (Electron Project)",
    shortDescription:
      "A clean, minimal desktop Timer & Stopwatch app (inspired by Microsoft Clock). Built with Electron Forge (webpack) and React + Tailwind. ",
    fullDescription:
      "ItsTime is a sleek and minimal desktop application designed to manage timers and stopwatches. Inspired by Microsoft Clock, this app offers essential time-tracking functionality with modern features. Built using Electron Forge (webpack), React, and Tailwind CSS, ItsTime ensures a seamless user experience on both desktop and mobile. Timers persist locally in SQLite for reliable data storage, and the app offers text-to-speech notifications when timers finish. Perfect for anyone needing a simple yet powerful time management tool.",
    image: "/project-assets/project3.png",
    technologies: [
      { name: "Electron Js", color: "bg-orange-100 text-orange-800" },
      { name: "React", color: "bg-sky-100 text-sky-800" },
      { name: "Typescript", color: "bg-pink-100 text-pink-800" },
      { name: "Tailwind CSS", color: "bg-gray-100 text-blue-800" },
      { name: "TTS", color: "bg-grey-100 text-blue-800" },
      { name: "SQLite", color: "bg-cyan-100 text-cyan-800" },
    ],
    features: [
      "Manage multiple timers with full control over their settings.",
      "Optionally set a message that will be spoken aloud when a timer finishes",
      "Plays a default ringtone when any timer finishes, ensuring you're notified even without TTS.",
      "Includes Stopwatch with features like Start, Pause, Reset, and Lap marking for detailed time tracking during activities.",
      "Timers and settings are stored securely in a local SQLite database, ensuring data is retained between sessions.",
      "Uses contextBridge.exposeInMainWorld for secure communication between the renderer and main process, preventing direct access to ipcRenderer.",
      "Strongly typed with TypeScript, and uses Node ESM for a modern, modular approach in the main process.",
    ],
    githubUrl: "https://github.com/LH-10/ItsTime-ElectronProject",
    Installer:"https://www.dropbox.com/scl/fo/1xivcnjs2hthqoxzkb4cj/AHclfj1Fazitk_-QtR1BMyw?rlkey=umfpeisswopzv1c89aj0ykqd8&st=017q3cnq&dl=1",
    category: "Desktop",
    status:"Completed",
  
  },
  {
    id: "2",
    slug: "bookstore-management-app",
    title: "Book Store Management App",
    shortDescription:
      "Built a full-stack Book Management System with Golang backend ,MYSQL  with GORM and React frontend.",
    fullDescription:
      ("Developed a full-stack Book Management System with a Golang backend using the GORM ORM and a MySQL database. "
        +"The frontend is built with React and Vite, offering a responsive and user-friendly interface. The application includes secure user authentication with Argon2id password hashing and JWT-based session handling. "+
      "Users can perform full CRUD operations on books, including adding, updating, viewing, and deleting entries. The system follows RESTful API principles and leverages environment variables for configuration management and security."+
      "\nThe project is containerized using Docker-compatible tools (Podman and Compose), enabling isolated services for the database and API. Environment variables are managed via .env files to support secure and flexible configuration."),
    image: "/project-assets/project2.1.png",
    technologies: [
      { name: "React", color: "bg-violet-100 text-violet-800" },
      { name: "MYSQL", color: "bg-red-100 text-red-800" },
      { name: "GO", color: "bg-grey-100 text-blue-800" },
      { name: "Docker", color: "" },
      { name: "GORM", color: "" },
    ],
    features: [
      "Secure signup and login using Argon2id password hashing and JWT for session management.",
      "Environment variables managed via .env files for enhanced security.",
      "CRUD Operations: Add, view, update, and delete books.",
      "Retrieve books by ID or list all available books.",
      "Fully responsive design compatible with desktops, tablets, and mobile devices.",
      "Used GORM (ORM for Golang) to interact with the MySQL database through structured models.",
      "Containerized using Docker-compatible tools (Podman and Compose) for consistent, isolated development environments.",
    ],
    githubUrl: "https://github.com/LH-10/Book-Management-System-in-Golang-/",
    category: "Web",
    status: "Completed",
  
  },
  
   {id: "3",
    slug: "hotel-room-booking-system",
    title: "Hotel Room Booking System",
    shortDescription:
      "This is a hotel room booking system built using the technologies like React.js, Node.js, Express.js, Tailwind CSS and MySQL database. ",
    fullDescription:
      ("This Hotel Room Booking System is a full-stack web application designed to streamline the process of booking and managing hotel accommodations. It offers both customer-facing and administrative functionalities, ensuring a seamless experience for users and hotel staff alike."+
        "On the customer side, users can explore and choose from three distinct room categories, fill out a simple booking form, and instantly receive a confirmation email with their booking details. This ensures transparency and convenience throughout the reservation process."+
        "On the admin side, a secure dashboard provides hotel staff with powerful tools to manage room availability, update the status of bookings (such as marking them as paid or checked out), and add or remove rooms as needed. This enables efficient hotel operations and helps maintain up-to-date records."+
      ""),
    image: "/project-assets/project1.png",
    technologies: [
      { name: "React", color: "bg-violet-100 text-violet-800" },
      { name: "Tailwind CSS", color: "bg-violet-100 text-violet-800" },
      { name: "Docker", color: "bg-emerald-100 text-emerald-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MySQL", color: "bg-emerald-100 text-emerald-800" },
      { name: "Express.js", color: "bg-gray-100 text-gray-800" },
    ],
    features: [
      "Users can book a room by filling out a booking form.",
      "Upon submission, the user receives an email with their booking details.",
      "Users can choose from three different categories of rooms.",
      "Admin can add or remove rooms from the room list.",
      "Admin can mark the checkout status of any customer.",
      "Admin can mark bookings as paid.",
      "Responsive design for all devices",
      "Email notifications for booking",
    ],
   
    githubUrl: "https://github.com/LH-10/Hotel_Room_Booking_System",
    category: "Web",
    status: "Completed",

  },
]

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS.find((project) => project.slug === slug)
}

export const getProjectsByCategory = (category: Project["category"]): Project[] => {
  return PROJECTS.filter((project) => project.category === category)
}

export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return PROJECTS.filter((project) => project.status === status)
}
