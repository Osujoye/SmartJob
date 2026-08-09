export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  category: string;
  description: string;
  requirements: string[];
  skills: string[];
  match: number;
  posted: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦400k - ₦650k",
    experience: "2 - 4 years",
    category: "Engineering",
    description:
      "We are looking for a talented Frontend Developer to build modern, scalable and accessible web applications.",
    requirements: [
      "2+ years frontend development experience",
      "Strong knowledge of React",
      "Experience with REST APIs",
      "Good understanding of responsive design",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Git", "REST API"],
    match: 94,
    posted: "2 days ago",
  },

  {
    id: 2,
    title: "Cybersecurity Analyst",
    company: "SecureNet Africa",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦450k - ₦750k",
    experience: "2 - 5 years",
    category: "Cybersecurity",
    description:
      "Join our security team to monitor, investigate and respond to cybersecurity threats across enterprise infrastructure.",
    requirements: [
      "Experience with SIEM platforms",
      "Knowledge of networking and security concepts",
      "Incident response experience",
      "Security monitoring experience",
    ],
    skills: ["SIEM", "Linux", "Networking", "Wireshark", "Incident Response"],
    match: 89,
    posted: "1 day ago",
  },

  {
    id: 3,
    title: "Backend Developer",
    company: "CloudWorks",
    location: "Remote",
    type: "Full-time",
    salary: "₦500k - ₦850k",
    experience: "2 - 5 years",
    category: "Engineering",
    description:
      "Build reliable APIs and backend services that power our next generation of cloud products.",
    requirements: [
      "Strong programming fundamentals",
      "Experience building REST APIs",
      "Database experience",
      "Knowledge of cloud platforms",
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "AWS", "Docker"],
    match: 82,
    posted: "3 days ago",
  },

  {
    id: 4,
    title: "Data Analyst",
    company: "Insight Labs",
    location: "Abuja, Nigeria",
    type: "Full-time",
    salary: "₦350k - ₦550k",
    experience: "1 - 3 years",
    category: "Data",
    description:
      "Turn business data into actionable insights that help teams make better decisions.",
    requirements: [
      "Strong analytical skills",
      "SQL experience",
      "Data visualization experience",
      "Excellent communication skills",
    ],
    skills: ["SQL", "Excel", "Power BI", "Python", "Statistics"],
    match: 76,
    posted: "4 days ago",
  },

  {
    id: 5,
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    salary: "₦300k - ₦550k",
    experience: "2 - 4 years",
    category: "Design",
    description:
      "Design beautiful and intuitive digital experiences for web and mobile products.",
    requirements: [
      "Strong portfolio",
      "Experience with Figma",
      "Understanding of UX principles",
      "Strong visual design skills",
    ],
    skills: ["Figma", "UX Research", "Wireframing", "Prototyping", "UI Design"],
    match: 72,
    posted: "5 days ago",
  },

  {
    id: 6,
    title: "Cloud Security Engineer",
    company: "CloudShield",
    location: "Remote",
    type: "Full-time",
    salary: "₦700k - ₦1.2m",
    experience: "3 - 6 years",
    category: "Cybersecurity",
    description:
      "Help secure cloud infrastructure and develop security controls for large-scale environments.",
    requirements: [
      "AWS security experience",
      "IAM knowledge",
      "Cloud security architecture",
      "Infrastructure as Code knowledge",
    ],
    skills: ["AWS", "IAM", "Terraform", "CloudTrail", "Security"],
    match: 91,
    posted: "1 week ago",
  },
];