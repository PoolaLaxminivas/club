// Mock data for CodeNova Coding Club

export const clubInfo = {
  name: "CodeNova",
  tagline: "Where Innovation Begins",
  mission: "CodeNova is a vibrant community of passionate developers, innovators, and tech enthusiasts dedicated to fostering creativity, collaboration, and continuous learning. We believe in the power of code to transform ideas into reality and empower students to become the next generation of tech leaders.",
  vision: "To create an inclusive environment where every coder can thrive, learn cutting-edge technologies, and build projects that make a real-world impact."
};

export const coreTeam = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Club President",
    github: "https://github.com/alexthompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Technical Lead",
    github: "https://github.com/sarahchen",
    linkedin: "https://linkedin.com/in/sarahchen",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "Events Coordinator",
    github: "https://github.com/marcusrodriguez",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Design Lead",
    github: "https://github.com/priyapatel",
    linkedin: "https://linkedin.com/in/priyapatel",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  }
];

export const members = [
  {
    id: 5,
    name: "David Kim",
    role: "Member",
    github: "https://github.com/davidkim",
    linkedin: "https://linkedin.com/in/davidkim",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Member",
    github: "https://github.com/emilyjohnson",
    linkedin: "https://linkedin.com/in/emilyjohnson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    id: 7,
    name: "Raj Sharma",
    role: "Member",
    github: "https://github.com/rajsharma",
    linkedin: "https://linkedin.com/in/rajsharma",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj"
  },
  {
    id: 8,
    name: "Lisa Anderson",
    role: "Member",
    github: "https://github.com/lisaanderson",
    linkedin: "https://linkedin.com/in/lisaanderson",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
  }
];

export const events = [
  {
    id: 1,
    title: "HackNova 2025",
    type: "Hackathons",
    date: "March 15-17, 2025",
    description: "48-hour hackathon bringing together 200+ coders to build innovative solutions for real-world problems.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "AI/ML Workshop Series",
    type: "Workshops",
    date: "Every Saturday, 2-5 PM",
    description: "Hands-on workshops covering machine learning fundamentals, neural networks, and practical AI applications.",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Code Combat Challenge",
    type: "Coding Challenges",
    date: "February 28, 2025",
    description: "Competitive programming challenge featuring algorithmic problems and data structures.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Tech Talk: Future of Web3",
    type: "Talks",
    date: "January 20, 2025",
    description: "Industry expert discussion on blockchain technology, decentralized applications, and the future of web development.",
    status: "past",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Full Stack Development Bootcamp",
    type: "Workshops",
    date: "December 5-15, 2024",
    description: "Intensive 10-day bootcamp covering React, Node.js, MongoDB, and modern web development practices.",
    status: "past",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Open Source Contribution Drive",
    type: "Hackathons",
    date: "November 10-12, 2024",
    description: "Weekend event focused on contributing to open source projects and learning collaborative development.",
    status: "past",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  }
];

export const projects = [
  {
    id: 1,
    title: "EduAI Platform",
    description: "AI-powered learning platform that personalizes educational content based on student performance and learning patterns.",
    technologies: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "https://github.com/codenova/eduai",
    team: "Alex Thompson, Sarah Chen, David Kim",
    status: "active"
  },
  {
    id: 2,
    title: "CampusConnect",
    description: "Social networking app designed specifically for university students to collaborate on projects and share resources.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/codenova/campusconnect",
    team: "Marcus Rodriguez, Priya Patel, Emily Johnson",
    status: "active"
  },
  {
    id: 3,
    title: "CodeMentor Bot",
    description: "Discord bot that helps students learn programming through interactive challenges and instant code reviews.",
    technologies: ["Python", "Discord.py", "OpenAI API"],
    github: "https://github.com/codenova/codementor-bot",
    team: "Raj Sharma, Lisa Anderson",
    status: "completed"
  },
  {
    id: 4,
    title: "GreenTrack",
    description: "Sustainability tracker that helps users monitor their carbon footprint and suggests eco-friendly alternatives.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    github: "https://github.com/codenova/greentrack",
    team: "Sarah Chen, David Kim, Emily Johnson",
    status: "active"
  }
];

export const socialLinks = {
  github: "https://github.com/codenova-club",
  linkedin: "https://linkedin.com/company/codenova",
  twitter: "https://twitter.com/codenovaclub",
  discord: "https://discord.gg/codenova",
  email: "contact@codenova.club"
};
