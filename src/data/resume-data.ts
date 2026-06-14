import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Amol Jha",
  initials: "AJ",
  location: "San Francisco Bay Area, CA",
  locationLink: "https://www.google.com/maps/place/SanFrancisco",
  about: "Software Engineer building distributed systems and infrastructure.",
  summary:
    "Hi, I'm Amol. I'm a software engineer with 5+ years of experience designing and building high-performance, large-scale distributed systems and backend services. I'm interested in systems engineering, open-source software and startups.",
  avatarUrl: "https://avatars.githubusercontent.com/u/18339093?v=4",
  personalWebsiteUrl: "https://amoljha.com",
  blogUrl: "https://blog.amoljha.com",
  contact: {
    email: "mail@amoljha.com",
    tel: "+1-(765)-772-6884",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/amoljha",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amoljha/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/amolj_",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "Purdue University",
      degree: "Bachelor's Degree in Computer Science Honors",
      start: "Aug 2016",
      end: "Dec 2019",
    },
  ],
  work: [
    {
      company: "Salesforce",
      link: "https://www.salesforce.com/",
      badges: ["Go", "Kubernetes", "Istio", "Envoy", "C++", "Rust"],
      title: "Senior Software Engineer",
      start: "Aug 2023",
      end: null,
      description:
        "Building Salesforce’s service mesh and ingress infrastructure on Istio and Envoy, managing traffic routing and reliability for large-scale internal services.",
      highlights: [
        "7.5M active connections, 23.5k TCP connections/sec, 270Gbps (~21.6 Million packets/sec)",
        "Designed a CRD-driven Kubernetes control plane for ingress and networking configuration, enabling declarative VIP provisioning with 99.99% availability",
      ],
    },
    {
      company: "Salesforce",
      link: "https://www.salesforce.com/",
      badges: ["Java", "SQL", "Storage Systems"],
      title: "Software Engineer",
      start: "May 2021",
      end: "Aug 2023",
      description:
        "Worked on Salesforce’s distributed storage and CMS platform, building large-scale content delivery and storage systems for high-throughput customer workloads.",
      highlights: [
        "Built a blob delivery system handling ~3M requests/min for Commerce workloads",
        "Improved Files Storage APIs to 99.99% availability and reduced latency by up to 84x through performance optimizations",
        "Designed a distributed orchestration framework and scheduler for deployments and workflow coordination (~300ms latency)",
        "Built erasure-coded object storage pipeline for large files, distributing fragments across nodes and reconstructing data on demand for efficient and fault-tolerant storage",
      ],
    },
    {
      company: "Salesforce",
      link: "https://www.salesforce.com/",
      badges: ["Java", "Observability"],
      title: "Associate Software Engineer",
      start: "Jan 2020",
      end: "May 2021",
      description:
        "Worked within Salesforce’s distributed CMS and storage platform, contributing to content delivery features and platform reliability improvements.",
      highlights: [
        "Shipped CMS platform features enabling content publication workflows across multiple endpoints",
        "Implemented CDN-backed media delivery for high-scale content distribution",
        "Improved observability and alerting across CMS services, enabling faster incident detection and improved operational reliability",
        "Enhanced application security through mitigations against XSS and SQL injection vulnerabilities",
      ],
    },
  ],
  skills: [
    "Go",
    "Rust",
    "C/C++",
    "Java",
    "Istio",
    "Envoy",
    "Kubernetes",
    "Distributed Systems",
  ],
  projects: [
    {
      title: "Mine",
      techStack: ["Java", "Spring Boot", "MySQL"],
      description: "A central media aggregator",
      link: {
        label: "Mine",
        href: "https://github.com/utkarsh2019/Mine/",
      },
    },
    {
      title: "xpac",
      techStack: ["C/C++", "Bash"],
      description: "A cross-platform package manager",
      link: {
        label: "xpac",
        href: "https://github.com/parth-shel/xpac/",
      },
    },
  ],
} as const;
