export type Project = {
    title: string,
    description: string,
    imgPath?: string
    techs: string[],
    githubLink?: string,
    liveLink?: string,
    status: 'online' | 'building'
}

export const projects: Project[] = [
    {
        title: "Diesel.js",
        description: "A web framework built using Bun.js – similar to Express, but with more advanced features.",
        imgPath: "/project-images/diesel.png",
        techs: ["Bun.js", "TypeScript", "Web Framework"],
        githubLink: process.env.NEXT_PUBLIC_DIESEL_GITHUB!,
        liveLink: process.env.NEXT_PUBLIC_DIESEL_LIVE!,
        status: 'online'
    },
    {
        title: "nanoserve",
        description: "A lightweight HTTP router written in Go with built-in middleware support.",
        techs: ["Go", "HTTP", "Router", "Middleware"],
        githubLink: "https://github.com/exvillager/nanoserve",
        status: 'online'
    },
    {
        title: "envy",
        description: "Securely store and sync .env files across machines using Cloudflare R2 with client-side encryption.",
        techs: ["Go", "CLI", "Cloudflare R2", "Encryption"],
        githubLink: "https://github.com/exvillager/envy",
        status: 'online'
    },
    {
        title: "OpenFile",
        description: "OpenFile is a secure and ecnrypted file reciever/sharing service. with help of openfile you can generate a link and share to any anonymous person and that person can send you files anonymously.",
        imgPath: "/project-images/openfile.png",
        techs: ["Bun.js", "React", "SQL"],
        githubLink: "https://github.com/exvillager/openfile.in",
        liveLink: process.env.NEXT_PUBLIC_OPENFILE_LIVE!,
        status: 'online'
    },
    {
        title: "DevTube",
        description: "A YouTube-like full-stack app with video uploads, authentication, comments, likes, and more.",
        imgPath: "/project-images/devtube.png",
        techs: ["ReactJS", "ExpressJS", "MongoDB", "TailwindCSS", "JWT", "Multer", "Cloudinary"],
        githubLink: process.env.NEXT_PUBLIC_DEVTUBE_GITHUB!,
        liveLink: process.env.NEXT_PUBLIC_DEVTUBE_LIVE!,
        status: 'online'
    },
    {
        title: "PingFile",
        description: "A CLI tool for running API requests from JSON/YAML/PKFILE configs. Great for automated testing.",
        imgPath: "/project-images/pingfile.png",
        techs: ["Node.js", "CLI", "TypeScript", "YAML", "API Testing"],
        githubLink: process.env.NEXT_PUBLIC_PINGFILE_GITHUB!,
        status: 'online'
    },
    {
        title: "ex-router",
        description: "A file-based routing library like Next.js for building modular backends easily.",
        imgPath: "https://pbs.twimg.com/profile_images/1906706191469662208/6I5OCfzr_400x400.jpg",
        techs: ["Node.js", "File-based Routing", "NPM Package"],
        githubLink: process.env.NEXT_PUBLIC_EX_ROUTER_GITHUB!,
        liveLink: process.env.NEXT_PUBLIC_EX_ROUTER_LIVE!,
        status: 'online'
    },
]
