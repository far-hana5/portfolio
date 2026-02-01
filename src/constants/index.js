const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
 
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Backend Engineer",
    imgPath: "/images/logos/backend.png", // server / database icon
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "API Development (Django / FastAPI)",
    imgPath: "/images/logos/api.png",
  },
  {
    name: "Machine Learning & RAG",
    imgPath: "/images/logos/ai.png",
  },
  {
    name: "DevOps & Cloud (Learning)",
    imgPath: "/images/logos/docker.png",
  },
];

const techStackIcons = [
  {
    name: "Backend Engineer",
    
    scale: 1.2,
    rotation: [0, Math.PI / 4, 0],
  },
  {
    name: "Python Developer",
   
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "API Development (Django / FastAPI)",
    
    scale: 1,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Machine Learning & RAG",
    
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "DevOps & Cloud (Learning)",
    
    scale: 0.9,
    rotation: [0, Math.PI / 6, 0],
  },
];

const expCards = [
  {
    review:
      "A Django-based collaborative note-sharing platform that enhances handwritten lecture notes, extracts text using AI OCR, and automatically generates lecture-wise PDFs.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Collaborative Notes System (Django Project)",
    date: "2024 - Present",
    technologies: ["Django", "Python", "PostgreSQL", "OpenCV", "Celery", "Redis", "Gemini API", "ReportLab"],
    responsibilities: [
      "Built multi-user note-sharing platform using Django and PostgreSQL/SQLite.",
      "Enhanced images using OpenCV (contrast, noise reduction, sharpening, perspective correction).",
      "Extracted text with AI-powered OCR (Gemini API) and structured it automatically.",
      "Automated lecture-wise PDF generation using Celery, ReportLab, and Redis.",
      "Organized courses → sections → lectures and enabled downloadable PDFs/images for students.",
    ],
  },
  {
    review:
      "Tracks a single object across multiple videos in real-time, supports multiple tracker types, motion-based auto-initialization, and generates annotated videos and CSV tracking data.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Multi-Video Single-Object Tracker (Machine Learning)",
    date: "2024",
    technologies: ["Python", "OpenCV", "NumPy", "Jupyter Notebook", "Kalman Filter"],
    responsibilities: [
      "Batch-processed multiple videos with CSRT, KCF, and MOSSE trackers.",
      "Implemented manual ROI selection and auto-initialization using motion detection.",
      "Smoothed object trajectories using Kalman filters for accurate tracking.",
      "Generated annotated videos and per-frame CSV tracking data for analysis.",
      "Prepared datasets for ML modeling using Python and Jupyter Notebook.",
    ],
  },
  {
    review:
      "An automated form-filling system where users upload forms and the system fills them automatically using AI and PDF manipulation.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Automated Form-Filling Platform (Python Project)",
    date: "2024",
    technologies: ["Python", "Fitz/PyMuPDF", "Gemini API", "AI Automation"],
    responsibilities: [
      "Built a system to extract user information and auto-populate PDF forms using Fitz/PyMuPDF and Gemini API.",
      "Handled structured and unstructured data for multiple form types.",
      "Focused on reliability and ease of use for repetitive data entry tasks.",
      "Implemented upload, processing, and automatic saving of completed forms.",
    ],
  },
  {
    review:
      "A fully functional restaurant management system with user authentication, online menu, order management, and admin panel for restaurant owners.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Restaurant Management System (React + Firebase Project)",
    date: "2024",
    technologies: ["React", "Firebase", "Tailwind CSS", "React Query", "DaisyUI", "React Router", "SweetAlert2"],
    responsibilities: [
      "Built a full-stack restaurant management platform using React, Firebase, and Tailwind CSS.",
      "Implemented secure user authentication and authorization for owners and customers.",
      "Developed interactive menu, order placement, and real-time order tracking.",
      "Created admin panel for restaurant owners to manage menu, view orders, and handle customer feedback.",
      "Used React Query for data fetching, state management, and optimized frontend performance.",
      "Enhanced UI/UX with parallax, carousels, ratings, and responsive design using Tailwind & DaisyUI.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
