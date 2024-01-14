import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Victor U. Ihuoma",
  initials: "VUI",
  location: "Copenhagen, Denmaark, CET",
  locationLink: "https://www.google.com/maps/place/Copenhagen",
  about:
    "Digital Products Enthusiast focused on building scalable, resilient services with extra attention to detail",
  summary:
    "Working as a Software Developer, I have successfully taken multiple digital products from 0 to 1. I am adept at developing and deploying scalable products, communicating effectively and ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, Node.js, and PostgresQL. I am no stranger to a fast paced environment and possess 4+ years of experience working in a distributed team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121028057?v=4",
  personalWebsiteUrl: "https://recursivemusings.me",
  contact: {
    email: "victoruihuoma@icloud.com",
    tel: "+4527582808",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vic-ihuoma",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/victor-ihuoma/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Southern Denmark",
      degree: "Masters Degree in Mechatronics Engineering",
      start: "2017",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Danfoss Climate Solutions",
      link: "https://www.danfoss.com/en-us/about-danfoss/our-businesses/climate-solutions/",
      badges: ["FullTime"],
      title: "Software Developer",
      logo: '',
      start: "2021",
      end: "Current",
      description:
        "Implemented new features including some that enabled customers remotely configure 1000s of critical devices securely and reliably, worked on improving the way developers ship the code through test driven development, Technologies: Node.js, TypeScript, Kafka, Docker, Kubernetes, Postgres, Redis",
    },
    {
      company: "Danfoss A/S",
      link: "https://www.danfoss.com/en-us/",
      badges: ["FullTime"],
      title: "Innovation Engineer",
      logo: '',
      start: "2019",
      end: "2021",
      description:
        "Designed and implemented scalable data pipelines to power predictive maintenance services and enable BI teams. Technologies: Python, Azure Services, Argo CD",
    },
    {
      company: "University of Southern Denmark",
      link: "https://www.sdu.dk/en",
      badges: [],
      title: "Academic Advisor",
      logo: '',
      start: "2018",
      end: "2019",
      description:
        "Designed and developed a pricing solution algorithm and dashboard for an electronic component manufacturer. Technologies: Python, Plotly",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "PostgresQL",
    "Go",
    "NestJs",
    "Kubernetes",
    "Docker",
    "Azure",
  ],
  projects: [
    {
      title: "Automatic Demand Response",
      techStack: [
        "TypeScript",
        "NestJs",
        "Redis"
      ],
      description: "A platform to allow customers respond to their utility providers incentives to reduce their energy consumption during peak hours",
      logo: '',
      link: {
        label: "danfoss.com",
        href: "https://www.danfoss.com/en-us/service-and-support/case-stories/cf/engineering-tomorrow-helps-transform-supermarkets-into-smart-stores-for-demand-response/",
      },
    },
    {
      title: "Global Configuation Management",
      techStack: ["TypeScript", "Node.js", "Kafka", "PostgresQL", "BullMQ"],
      description:
        "Web service to enable users remotely configure 1000s of critical devices securely and reliably",
      logo: '',
      link: {
        label: "danfoss.com",
        href: "https://danfoss.com",
      },
    },
    {
      title: "CV",
      techStack: ["Side Project", "Next.js", "MDX", "React"],
      description:
        "My personal cv. Built with Next.js",
      logo: '',
      link: {
        label: "github.com",
        href: "https://recursivemusings.com/",
      },
    },
    {
      title: "Device Parameter Manager",
      techStack: ["Node.js", "Typescript", "kafka", "PostgresQL", "BullMQ"],
      description:
        "A fast scalable service to consume and process messages from a kafka topic and apply them to remote devices, while providing a reliable retry mechanism",
      logo: '',
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Data Tree Explorer",
      techStack: ["Node.js", "Typescript", "Rest API", "PostgresQL", "Victoria Metrics"],
      description:
        "API service to enable users explore and query a large dataset of time series data",
      logo: '',
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Compressor Insights",
      techStack: ["Python", "Azure", "Kubernetes"],
      description:
        "Predictive maintenance (ML) service to enable customers monitor and maintain their compressors",
      logo: '',
      link: {
        label: "github.com",
        href: "",
      },
    },
  ],
} as const;
