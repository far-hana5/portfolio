import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Collaborative Notes System",
    description:
      "A Django-based platform for students to upload handwritten notes, enhance images, extract text using AI OCR, and automatically generate lecture-wise PDFs.",
    img: "/images/project1.png",
    github: "https://github.com/far-hana5/NoteForge-24?tab=readme-ov-file",
    technologies: ["Django", "Python", "OpenCV", "Celery", "Redis", "Gemini API", "ReportLab", "PostgreSQL/SQLite", "Cloudinary"],
  },
  {
    title: "Multi-Video Single-Object Tracker",
    description:
      "Tracks a single object across multiple videos in real-time using OpenCV trackers and Kalman filters, exporting annotated videos and CSV tracking data.",
    img: "/images/project2.png",
    github: "https://github.com/far-hana5/motion-tracking-from-scratch?tab=readme-ov-file",
    technologies: ["Python", "OpenCV", "NumPy", "Jupyter Notebook", "Kalman Filter"],
  },
  {
    title: "Automated Form-Filling Platform",
    description:
      "Users upload forms and the system automatically fills them using AI and PDF manipulation for faster and reliable data entry.",
    img: "/images/project3.png",
    github: "https://github.com/far-hana5/-CSE-299-Junior-Design",
    technologies: ["Python", "Fitz/PyMuPDF", "Gemini API", "AI Automation"],
  },
  {
    title: "Restaurant Management System",
    description:
      "A full-stack React + Firebase system with user authentication, online menu, order management, and admin panel for restaurant owners.",
    img: "/images/project4.png",
    github: "https://github.com/far-hana5/Fully-Functional-Restaurant-Management-System",
    technologies: ["React", "Firebase", "Tailwind CSS", "React Query", "DaisyUI", "React Router", "SweetAlert2"],
  },

 
];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Fade in the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each project card
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={addToRefs}
            className="project-wrapper flex flex-col md:flex-row items-start gap-8 bg-[#0F1624] p-5 rounded-xl shadow-lg"
          >
            {/* Image */}
            <div className="image-wrapper w-full md:w-1/2 rounded-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-content flex-1 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-white-50 md:text-lg">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1F2A40] text-white-50 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-500"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppShowcase;
