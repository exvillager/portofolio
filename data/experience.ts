export type Experience = {
  company: string;
  role: string;
  type: "Full-time" | "Internship";
  info: string;
  link: string;
  logo: string;
  duration: string;
};

export const experience: Experience[] = [
  {
    company: "Docxster",
    role: "Software Engineer",
    type: "Full-time",
    info:
      "Full-time software engineer working on full stack development, building scalable features, improving performance, and contributing to production level systems.",
    link: "https://docxster.com",
    logo: "https://www.docxster.com/_next/static/media/docxster-logo-with-name.c9bf93a9.svg",
    duration: "May 2026 - Present",
  },
  {
    company: "Docxster",
    role: "Software Developer Intern",
    type: "Internship",
    info:
      "Worked on full stack development, building scalable features, improving performance, and contributing to production level systems.",
    link: "https://docxster.com",
    logo: "https://www.docxster.com/_next/static/media/docxster-logo-with-name.c9bf93a9.svg",
    duration: "Nov 2025 - May 2026",
  },
];
