import azureFundamentals from "@/assets/certificate-microsoft-azure-fundamentals.jpg.asset.json";
import aimlDataScience from "@/assets/certificate-aiml-data-science-iit-roorkee.jpg.asset.json";
import gdgOpenSource from "@/assets/certificate-gdg-open-source-workshop.jpg.asset.json";
import webxDesign from "@/assets/certificate-webx-design-technavya.jpg.asset.json";
import codewarsHackathon from "@/assets/certificate-codewars-hackathon.jpg.asset.json";
import oscodeDecodeSih from "@/assets/certificate-oscode-decode-sih.jpg.asset.json";
import nptelEthics from "@/assets/certificate-nptel-ethics-in-engineering.jpg.asset.json";
import skillcredInternship from "@/assets/certificate-skillcred-micro-internship.jpg.asset.json";

export const profile = {
  name: "Shivangi Goel",
  tagline: "AI/ML Student • Developer • UI/UX Enthusiast",
  intro:
    "Exploring the intersection of Artificial Intelligence, development, data, and creative design — one project at a time.",
  badge: "B.Tech AI & ML · GLA University, Mathura",
  email: "01shivangigoel@gmail.com",
  github: "https://github.com/Shivangiigoel01",
  linkedin: "https://www.linkedin.com/in/shivangi-goel-24b9253a8",
  location: "Chandausi, Uttar Pradesh",
};

export type ProjectCategory = "AI & Data" | "Web";

export type Project = {
  title: string;
  label?: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  icon: "sparkles" | "zap" | "store" | "file" | "chart" | "heart" | "book" | "layout";
};

export const projects: Project[] = [
  {
    title: "PromptCraft AI",
    label: "Team Project · Codewars",
    category: "AI & Data",
    description:
      "An AI-focused tool that helps users turn their ideas and goals into clearer, more effective prompts for AI systems.",
    tags: ["AI", "Prompt Engineering", "Web Development", "UI/UX"],
    github: "https://github.com/yash200731-design/codewars",
    icon: "sparkles",
  },
  {
    title: "Goel Electric Work",
    label: "First Client Project",
    category: "Web",
    description:
      "A professional, responsive business website built for a local electric works firm to establish its online presence and showcase its services.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design"],
    github: "https://github.com/Shivangiigoel01/Goel-Electric-Work-website",
    live: "https://shivangiigoel01.github.io/Goel-Electric-Work-website/",
    icon: "zap",
  },
  {
    title: "Sthaniya — Local Vendors",
    label: "Full-Stack",
    category: "Web",
    description:
      "A location-based platform that connects users with nearby vendors and services, making local businesses easier to discover and reach.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Shivangiigoel01/Sthaniya_for_Local_Vendors",
    icon: "store",
  },
  {
    title: "AI Resume Generator",
    label: "Team Project",
    category: "AI & Data",
    description:
      "An AI-assisted web app where users enter their details and get a clean, professional resume and a polished portfolio-style layout.",
    tags: ["Python", "Flask", "Google Gemini API", "HTML", "CSS"],
    github: "https://github.com/jagdishxtech/resume_generator",
    icon: "file",
  },
  {
    title: "Sales Data Dashboard",
    category: "AI & Data",
    description:
      "An interactive dashboard that visualizes sales data and key metrics, helping users spot patterns and insights at a glance.",
    tags: ["Data Analysis", "Data Visualization", "Python", "Dashboard"],
    github: "https://github.com/Shivangiigoel01/dashboard",
    live: "https://2shivangi-goel23.ai.studio/",
    icon: "chart",
  },
  {
    title: "Heart Disease Analysis",
    label: "Machine Learning",
    category: "AI & Data",
    description:
      "Data preprocessing practice on a heart disease dataset — cleaning, encoding and preparing features for machine learning models.",
    tags: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    github: "https://github.com/Shivangiigoel01/_Heart_Disease_Analysis_",
    icon: "heart",
  },
  {
    title: "SkillCred Bootcamp Project",
    label: "Bootcamp",
    category: "AI & Data",
    description:
      "Hands-on notebooks from the SkillCred data & AI bootcamp, applying Python, Pandas and Matplotlib to analysis and AI/ML concepts.",
    tags: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/Shivangiigoel01/skill_cred",
    icon: "book",
  },
  {
    title: "Personal Portfolio",
    category: "Web",
    description:
      "This website — a home for my projects, skills, certifications and creative side, designed and built by me.",
    tags: ["Web Development", "UI/UX", "Responsive Design"],
    live: "https://static-creativity-lab.lovable.app/",
    icon: "layout",
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "Java", "C", "SQL"] },
  {
    title: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB", "Responsive Design"],
  },
  {
    title: "AI / ML & Data",
    items: [
      "Machine Learning",
      "Prompt Engineering",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Data Visualization",
    ],
  },
  {
    title: "Design, Cloud & Tools",
    items: ["UI/UX Design", "Figma", "Git", "GitHub", "Open Source", "Microsoft Azure"],
  },
];

export const experience = [
  {
    title: "SkillCred Bootcamp",
    meta: "Data & AI Bootcamp",
    text: "Completed a bootcamp covering Python, SQL, Pandas, Matplotlib, Machine Learning and AI, finishing with a hands-on project.",
  },
  {
    title: "First Client Project",
    meta: "Goel Electric Work",
    text: "Designed and built a professional online presence for a real-world local business.",
    link: "https://github.com/Shivangiigoel01/Goel-Electric-Work-website",
  },
  {
    title: "Codewars — National Level Hackathon",
    meta: "Top 15",
    text: "Worked with my team to design and build a solution, finishing among the top teams.",
  },
  {
    title: "Technavya — GLA University",
    meta: "Web Technology Event",
    text: "Took part in a website-building event at the Technavya college fest.",
  },
  {
    title: "Open Source Workshop",
    meta: "Google Developer Group",
    text: "Learned open source workflows and contributing through Git and GitHub.",
  },
  {
    title: "OSCode Event",
    meta: "Decode SIH",
    text: "Participated in the OSCode event as part of Decode SIH.",
  },
];

export const certifications = [
  { title: "Microsoft Azure Fundamentals — AZ-900", issuer: "Microsoft", status: "Qualified" },
  {
    title: "Ethics in Engineering",
    issuer: "NPTEL · IIT Kharagpur — Online Examination · Score 96%",
    status: "Qualified",
  },
  {
    title: "Advanced Workshop on AI, ML & Data Science with Python",
    issuer: "IIT Roorkee",
    status: "Completed",
  },
  { title: "Open Source Workshop", issuer: "Google Developer Group (GDG)", status: "Completed" },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  alt: string;
};

export const certificateGallery: Certificate[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 18, 2026",
    image: azureFundamentals.url,
    alt: "Microsoft Certified Azure Fundamentals certificate awarded to Shivangi Goel",
  },
  {
    title: "AI & ML with Data Science Workshop",
    issuer: "Ethical Edufabrica · Sangram'25, IIT Roorkee",
    date: "11–12 October 2025",
    image: aimlDataScience.url,
    alt: "Certificate of completion for a two-day offline workshop on AI, ML with Data Science at IIT Roorkee",
  },
  {
    title: "Workshop on Open Source",
    issuer: "Google Developer Group On Campus, GLA University",
    date: "19 September 2025",
    image: gdgOpenSource.url,
    alt: "Google Developer Group certificate of participation for the Workshop on Open Source at GLA University",
  },
  {
    title: "Web-X Design Competition",
    issuer: "Techनव्या'25 · GLA University, Mathura",
    date: "30 January 2026",
    image: webxDesign.url,
    alt: "Certificate of appreciation for participating in the Web-X Design competition during Techनव्या 25",
  },
  {
    title: "CodeWars Hackathon — Top 130 Finalist Teams",
    issuer: "Hacker's Unity · Arya College of Engineering & I.T.",
    date: "22–23 August 2026",
    image: codewarsHackathon.url,
    alt: "CodeWars Hackathon certificate of participation, top 130 finalist teams out of 500 plus",
  },
  {
    title: "Decode SIH 2026",
    issuer: "OSCode",
    date: "2026",
    image: oscodeDecodeSih.url,
    alt: "OSCode participation certificate for Decode SIH 2026",
  },
  {
    title: "Ethics in Engineering Practice — 96%",
    issuer: "NPTEL · IIT Kharagpur",
    date: "Aug–Oct 2026",
    image: nptelEthics.url,
    alt: "NPTEL Elite online certification for Ethics in Engineering Practice with a consolidated score of 96 percent",
  },
  {
    title: "Micro Internship — Data & Gen AI",
    issuer: "SkillCred · GLA University, Mathura",
    date: "15 Jul – 14 Sep 2026",
    image: skillcredInternship.url,
    alt: "SkillCred certificate of achievement for a two-month micro internship in Data and Generative AI",
  },
];

export const achievements = [
  { title: "Microsoft Azure AZ-900", text: "Qualified Microsoft Azure Fundamentals in Semester 2." },
  {
    title: "NPTEL Ethics in Engineering",
    text: "Qualified the NPTEL online examination from IIT Kharagpur with a score of 96%.",
  },
  { title: "Codewars Hackathon", text: "Top 15 team at a national level hackathon." },
  { title: "Drawing Awards", text: "Multiple awards in drawing competitions." },
  { title: "Kalidos Club", text: "Active member of the Kalidos Club at GLA University." },
];

export const learning = [
  "Artificial Intelligence & Machine Learning",
  "Full-Stack Development",
  "UI/UX Design",
  "Data Analysis",
  "Data Visualization",
  "SQL",
  "Java & DSA",
  "Generative AI",
];

export const education = [
  { school: "GLA University, Mathura", detail: "B.Tech — Artificial Intelligence & Machine Learning", year: "Pursuing · 2nd Year" },
  { school: "G.K. Silver Stone School", detail: "Intermediate (CBSE) · 66.40%", year: "2025" },
  { school: "Sacred Heart Sen. Sec. Convent School", detail: "High School (ICSE) · 87.00%", year: "2022" },
];
