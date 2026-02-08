/**
 * Profile Content
 * 
 * All portfolio content is defined here with full TypeScript types.
 * Edit this file to customize the portfolio.
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email" | "website";
  url: string;
  label: string;
}

export interface Stat {
  value: number | string;
  label: string;
  suffix?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | null;
  description?: string;
}

export interface Organization {
  name: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "Familiar" | "Proficient" | "Expert";
  yearsUsed?: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
  description?: string;
}

export type BugSeverity = "critical" | "high" | "medium" | "low";

export interface BugHuntingEntry {
  id: string;
  title: string;
  platform: string;
  severity: BugSeverity;
  date: string;
  description: string;
  tags: string[];
  bounty?: string;
  cveId?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProfileData {
  personal: {
    name: string;
    title: string;
    roles: string[];
    location: string;
    bio: string;
    shortBio: string;
    avatarUrl?: string;
    resumeUrl: string;
    socialLinks: SocialLink[];
    startYear: number;
  };
  stats: Stat[];
  education: Education[];
  organizations: Organization[];
  achievements: Achievement[];
  skillCategories: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  bugHunting: BugHuntingEntry[];
  workExperience: WorkExperience[];
}

// =============================================================================
// PROFILE DATA
// =============================================================================

export const profile: ProfileData = {
  personal: {
    name: "Alex Chen",
    title: "Systems Builder & Security Researcher",
    roles: [
      "Full-Stack Developer",
      "Security Researcher",
      "DevOps Engineer",
      "AI Systems Architect",
    ],
    location: "San Francisco Bay Area",
    bio: "I build secure, scalable systems at the intersection of software engineering and cybersecurity. With expertise spanning full-stack development, infrastructure automation, and vulnerability research, I architect solutions that are both performant and resilient. My approach combines deep technical knowledge with a security-first mindset, ensuring that every system I build can withstand real-world threats.",
    shortBio: "Building secure, scalable systems. Security researcher by night.",
    resumeUrl: "/resume",
    startYear: 2019,
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com",
        label: "GitHub",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        label: "LinkedIn",
      },
      {
        platform: "twitter",
        url: "https://twitter.com",
        label: "Twitter",
      },
      {
        platform: "email",
        url: "mailto:alex@example.com",
        label: "Email",
      },
    ],
  },

  stats: [
    { value: 45, label: "Projects Shipped", suffix: "+" },
    { value: 6, label: "Years Experience", suffix: "" },
    { value: 12, label: "Certifications", suffix: "+" },
  ],

  education: [
    {
      institution: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science (Security Track)",
      startYear: 2021,
      endYear: 2023,
      description: "Focus on systems security, cryptography, and distributed systems.",
    },
    {
      institution: "UC Berkeley",
      degree: "Bachelor of Science",
      field: "Electrical Engineering & Computer Science",
      startYear: 2017,
      endYear: 2021,
      description: "Dean's List. Focus on computer architecture and software engineering.",
    },
  ],

  organizations: [
    {
      name: "Bay Area Security Collective",
      role: "Technical Lead",
      startDate: "2023-01",
      endDate: null,
      description: "Leading CTF team and coordinating security research initiatives.",
    },
    {
      name: "Open Source Security Foundation",
      role: "Contributing Member",
      startDate: "2022-03",
      endDate: null,
      description: "Contributing to supply chain security tools and best practices.",
    },
    {
      name: "ACM SIGSOFT",
      role: "Student Chapter President",
      startDate: "2020-08",
      endDate: "2021-05",
      description: "Organized workshops and speaker events for software engineering community.",
    },
  ],

  achievements: [
    {
      title: "DEF CON CTF Finalist",
      description: "Top 10 finish in the world's most prestigious hacking competition.",
      year: 2024,
    },
    {
      title: "CVE Credits",
      description: "Discovered and responsibly disclosed 8 vulnerabilities in major software.",
      year: 2023,
    },
    {
      title: "Google Open Source Peer Bonus",
      description: "Recognized for significant contributions to Kubernetes security.",
      year: 2023,
    },
    {
      title: "HackerOne Top 100",
      description: "Ranked in top 100 researchers globally for vulnerability discoveries.",
      year: 2022,
    },
  ],

  skillCategories: [
    {
      name: "Programming",
      description: "Languages and frameworks for building robust applications",
      skills: [
        { name: "TypeScript", level: "Expert", yearsUsed: 5 },
        { name: "Python", level: "Expert", yearsUsed: 6 },
        { name: "Rust", level: "Proficient", yearsUsed: 3 },
        { name: "Go", level: "Proficient", yearsUsed: 4 },
        { name: "React/Next.js", level: "Expert", yearsUsed: 5 },
        { name: "Node.js", level: "Expert", yearsUsed: 5 },
        { name: "PostgreSQL", level: "Proficient", yearsUsed: 4 },
        { name: "GraphQL", level: "Proficient", yearsUsed: 3 },
      ],
    },
    {
      name: "Cybersecurity",
      description: "Offensive and defensive security expertise",
      skills: [
        { name: "Penetration Testing", level: "Expert", yearsUsed: 4 },
        { name: "Web Application Security", level: "Expert", yearsUsed: 5 },
        { name: "Reverse Engineering", level: "Proficient", yearsUsed: 3 },
        { name: "Malware Analysis", level: "Familiar", yearsUsed: 2 },
        { name: "Network Security", level: "Proficient", yearsUsed: 4 },
        { name: "Cryptography", level: "Proficient", yearsUsed: 3 },
        { name: "Incident Response", level: "Proficient", yearsUsed: 3 },
        { name: "Threat Modeling", level: "Expert", yearsUsed: 4 },
      ],
    },
    {
      name: "DevOps & Infrastructure",
      description: "Building and operating scalable systems",
      skills: [
        { name: "Kubernetes", level: "Expert", yearsUsed: 4 },
        { name: "Docker", level: "Expert", yearsUsed: 5 },
        { name: "Terraform", level: "Proficient", yearsUsed: 3 },
        { name: "AWS", level: "Expert", yearsUsed: 5 },
        { name: "GCP", level: "Proficient", yearsUsed: 3 },
        { name: "CI/CD Pipelines", level: "Expert", yearsUsed: 5 },
        { name: "Linux Administration", level: "Expert", yearsUsed: 6 },
        { name: "Observability", level: "Proficient", yearsUsed: 3 },
      ],
    },
    {
      name: "AI & Automation",
      description: "Intelligent systems and workflow automation",
      skills: [
        { name: "LLM Integration", level: "Proficient", yearsUsed: 2 },
        { name: "RAG Systems", level: "Proficient", yearsUsed: 2 },
        { name: "ML Pipelines", level: "Familiar", yearsUsed: 2 },
        { name: "Agent Frameworks", level: "Proficient", yearsUsed: 1 },
        { name: "Prompt Engineering", level: "Expert", yearsUsed: 2 },
        { name: "Automation Scripts", level: "Expert", yearsUsed: 5 },
      ],
    },
  ],

  projects: [
    {
      slug: "sentinel-siem",
      title: "Sentinel SIEM",
      description: "Real-time security information and event management platform with ML-powered threat detection.",
      longDescription: "A comprehensive SIEM solution built from the ground up with modern architecture. Features include real-time log aggregation, ML-based anomaly detection, automated incident response, and customizable dashboards.",
      tags: ["Python", "Elasticsearch", "React", "Kubernetes", "ML"],
      featured: true,
      year: 2024,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      slug: "cryptovault",
      title: "CryptoVault",
      description: "Hardware-backed secrets management with zero-knowledge architecture.",
      tags: ["Rust", "TPM", "HSM", "Cryptography"],
      featured: true,
      year: 2024,
      githubUrl: "https://github.com",
    },
    {
      slug: "infraspec",
      title: "InfraSpec",
      description: "Infrastructure-as-code security scanner with policy enforcement.",
      tags: ["Go", "Terraform", "OPA", "CI/CD"],
      featured: true,
      year: 2023,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      slug: "bugbounty-toolkit",
      title: "BugBounty Toolkit",
      description: "Automated reconnaissance and vulnerability discovery framework.",
      tags: ["Python", "Docker", "Nuclei", "Automation"],
      featured: false,
      year: 2023,
      githubUrl: "https://github.com",
    },
    {
      slug: "llm-guardian",
      title: "LLM Guardian",
      description: "Prompt injection detection and LLM security testing framework.",
      tags: ["Python", "LLM", "Security", "Testing"],
      featured: true,
      year: 2024,
      githubUrl: "https://github.com",
    },
    {
      slug: "zero-trust-proxy",
      title: "Zero Trust Proxy",
      description: "Identity-aware proxy with continuous authentication.",
      tags: ["Go", "mTLS", "OIDC", "Zero Trust"],
      featured: false,
      year: 2023,
      githubUrl: "https://github.com",
    },
    {
      slug: "supply-chain-monitor",
      title: "Supply Chain Monitor",
      description: "Dependency vulnerability monitoring with SBOM analysis.",
      tags: ["TypeScript", "SBOM", "OSV", "Security"],
      featured: false,
      year: 2023,
      githubUrl: "https://github.com",
    },
    {
      slug: "incident-commander",
      title: "Incident Commander",
      description: "Automated incident response orchestration platform.",
      tags: ["Python", "Slack", "PagerDuty", "Automation"],
      featured: false,
      year: 2022,
      githubUrl: "https://github.com",
    },
  ],

  certificates: [
    {
      id: "oscp",
      title: "OSCP - Offensive Security Certified Professional",
      issuer: "Offensive Security",
      date: "2023-06",
      credentialId: "OS-12345",
      description: "Hands-on penetration testing certification demonstrating practical exploitation skills.",
    },
    {
      id: "cka",
      title: "CKA - Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023-03",
      credentialId: "CKA-2023-12345",
      description: "Demonstrates expertise in Kubernetes cluster administration and operations.",
    },
    {
      id: "aws-saa",
      title: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2022-11",
      credentialId: "AWS-SAA-12345",
      description: "Validates ability to design distributed systems on AWS.",
    },
    {
      id: "comptia-sec",
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2022-05",
      credentialId: "COMP001234567",
      description: "Foundational cybersecurity certification covering essential security concepts.",
    },
    {
      id: "gcp-ace",
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "2022-08",
      credentialId: "GCP-ACE-12345",
      description: "Validates ability to deploy and manage GCP infrastructure.",
    },
    {
      id: "terraform",
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2023-01",
      credentialId: "TF-12345",
      description: "Demonstrates proficiency with Infrastructure as Code using Terraform.",
    },
    {
      id: "cks",
      title: "CKS - Certified Kubernetes Security Specialist",
      issuer: "Cloud Native Computing Foundation",
      date: "2023-09",
      credentialId: "CKS-2023-12345",
      description: "Advanced certification for Kubernetes security best practices.",
    },
    {
      id: "aws-scp",
      title: "AWS Security - Specialty",
      issuer: "Amazon Web Services",
      date: "2024-02",
      credentialId: "AWS-SEC-12345",
      description: "Validates expertise in securing AWS workloads and architectures.",
    },
  ],

  bugHunting: [
    {
      id: "bh-001",
      title: "Authentication Bypass in OAuth Implementation",
      platform: "HackerOne",
      severity: "critical",
      date: "2024-01",
      description: "Discovered a critical flaw allowing complete authentication bypass in a major fintech platform's OAuth flow.",
      tags: ["OAuth", "Authentication", "Fintech"],
      bounty: "$15,000",
      cveId: "CVE-2024-XXXX",
    },
    {
      id: "bh-002",
      title: "SQL Injection in Search API",
      platform: "Bugcrowd",
      severity: "high",
      date: "2023-11",
      description: "Union-based SQL injection vulnerability in e-commerce search functionality exposing customer data.",
      tags: ["SQLi", "API", "E-commerce"],
      bounty: "$8,000",
    },
    {
      id: "bh-003",
      title: "SSRF Leading to Internal Network Access",
      platform: "HackerOne",
      severity: "high",
      date: "2023-09",
      description: "Server-side request forgery vulnerability allowing access to internal cloud metadata services.",
      tags: ["SSRF", "Cloud", "AWS"],
      bounty: "$5,000",
    },
    {
      id: "bh-004",
      title: "Stored XSS in Rich Text Editor",
      platform: "Bugcrowd",
      severity: "medium",
      date: "2023-07",
      description: "Persistent cross-site scripting through malformed markdown in collaboration platform.",
      tags: ["XSS", "Markdown", "SaaS"],
      bounty: "$2,500",
    },
    {
      id: "bh-005",
      title: "IDOR in User Document Access",
      platform: "HackerOne",
      severity: "high",
      date: "2023-05",
      description: "Insecure direct object reference allowing access to any user's private documents.",
      tags: ["IDOR", "Authorization", "Documents"],
      bounty: "$4,000",
    },
    {
      id: "bh-006",
      title: "Race Condition in Payment Processing",
      platform: "Private Program",
      severity: "critical",
      date: "2023-03",
      description: "Time-of-check to time-of-use vulnerability enabling duplicate payment credits.",
      tags: ["Race Condition", "Payments", "TOCTOU"],
      bounty: "$12,000",
    },
    {
      id: "bh-007",
      title: "JWT Algorithm Confusion",
      platform: "Bugcrowd",
      severity: "high",
      date: "2023-01",
      description: "Algorithm confusion attack allowing JWT signature bypass and privilege escalation.",
      tags: ["JWT", "Cryptography", "Authentication"],
      bounty: "$6,000",
    },
    {
      id: "bh-008",
      title: "Path Traversal in File Upload",
      platform: "HackerOne",
      severity: "medium",
      date: "2022-11",
      description: "Directory traversal vulnerability allowing arbitrary file write via crafted filenames.",
      tags: ["Path Traversal", "File Upload", "RCE"],
      bounty: "$3,000",
    },
  ],

  workExperience: [
    {
      company: "Cloudflare",
      role: "Security Engineer",
      startDate: "2023-08",
      endDate: null,
      description: "Working on security infrastructure protecting millions of websites from threats.",
      achievements: [
        "Designed and implemented automated threat detection system reducing false positives by 40%",
        "Led security review for critical infrastructure components",
        "Developed internal security tooling used by 50+ engineers",
      ],
      technologies: ["Go", "Rust", "Kubernetes", "eBPF"],
    },
    {
      company: "Stripe",
      role: "Software Engineer - Security",
      startDate: "2021-06",
      endDate: "2023-07",
      description: "Built security systems protecting payment infrastructure handling billions in transactions.",
      achievements: [
        "Implemented zero-trust network architecture reducing attack surface by 60%",
        "Created automated vulnerability scanning pipeline integrated into CI/CD",
        "Responded to and mitigated critical security incidents",
      ],
      technologies: ["Ruby", "Go", "AWS", "Terraform"],
    },
    {
      company: "Google",
      role: "Software Engineering Intern - Security",
      startDate: "2020-05",
      endDate: "2020-08",
      description: "Contributed to Chrome browser security team focusing on sandboxing improvements.",
      achievements: [
        "Identified and patched memory safety vulnerabilities in sandbox code",
        "Developed fuzzing harnesses improving coverage by 25%",
      ],
      technologies: ["C++", "Python", "Fuzzing"],
    },
  ],
};

// =============================================================================
// COMPUTED VALUES
// =============================================================================

/**
 * Calculate years of experience from profile start year
 */
export function getYearsExperience(): number {
  return new Date().getFullYear() - profile.personal.startYear;
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  return profile.projects.filter((p) => p.featured);
}

/**
 * Get section IDs for navigation
 */
export const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "certificates",
  "security",
  "resume",
] as const;

export type SectionId = typeof sectionIds[number];

/**
 * Navigation items
 */
export const navItems: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Works & Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "security", label: "Bug Hunting" },
  { id: "resume", label: "Resume" },
];
