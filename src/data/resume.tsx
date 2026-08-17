import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { TypeScript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Go } from "@/components/ui/svgs/go";
import { Java } from "@/components/ui/svgs/java";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { RabbitMQ } from "@/components/ui/svgs/rabbitmq";
import { Kafka } from "@/components/ui/svgs/kafka";
import { Temporal } from "@/components/ui/svgs/temporal";
import { RestAPIs } from "@/components/ui/svgs/restapis";
import { GRPC } from "@/components/ui/svgs/grpc";
import { SQL } from "@/components/ui/svgs/sql";
import { NoSQL } from "@/components/ui/svgs/nosql";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { PostgreSQL } from "@/components/ui/svgs/postgresql";
import { Redis } from "@/components/ui/svgs/redis";
import { Firebase } from "@/components/ui/svgs/firebase";
import { ReactJs } from "@/components/ui/svgs/react";
import { NextJs } from "@/components/ui/svgs/nextjs";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { AWS } from "@/components/ui/svgs/aws";
import { GCP } from "@/components/ui/svgs/gcp";
import { Azure } from "@/components/ui/svgs/azure";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { SystemDesign } from "@/components/ui/svgs/systemdesign";
import { Microservice } from "@/components/ui/svgs/microservice";
import { DistributedSystems } from "@/components/ui/svgs/distributedsystems";
import { LLM } from "@/components/ui/svgs/llm";
import { GenerativeAI } from "@/components/ui/svgs/generativeai";
import { RAG } from "@/components/ui/svgs/rag";
import { LangChain } from "@/components/ui/svgs/langchain";
import { LangGraph } from "@/components/ui/svgs/langgraph";
import { VectorEmbeddings } from "@/components/ui/svgs/vectorembeddings";

export const DATA = {
    name: "Bibek Kakati - Software Engineer",
    initials: "BK",
    url: "https://bibekkakati.com",
    location: "Delhi, India",
    locationLink: "https://www.google.com/maps/place/delhi",
    description:
        "Software Engineer who enjoys taking ownership, moving fast, and building scalable products from zero to growth.",
    summary: [
        "I'm a Software Engineer with 5+ years of experience building scalable [backend systems and full-stack AI applications](#work). I've worked across logistics, travel, and AI, with experience in distributed systems, cloud infrastructure, and system design.",
        "Most recently, I was a [Founding Engineer](/#work) at a travel-tech startup, where I owned large parts of the engineering stack from architecture to product delivery. I enjoy solving complex backend problems and building reliable systems that scale.",
    ],
    avatarUrl: "/picofme.jpeg",
    ogImage: "/og-image.png",
    sections: {
        about: { order: 1, enabled: true, heading: "About" },
        work: {
            order: 2,
            enabled: true,
            heading: "Work Experience",
            presentLabel: "Present",
        },
        education: { order: 3, enabled: true, heading: "Education" },
        skills: { order: 4, enabled: true, heading: "Skills" },
        projects: {
            order: 5,
            enabled: true,
            label: "My Projects",
            heading: "Check out my projects",
            text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
        },
        contact: {
            order: 6,
            enabled: true,
            label: "Contact",
            heading: "Get in Touch",
            text: "Want to chat? Just shoot me a dm on [bibek@linkedin](https://www.linkedin.com/in/bibekkakati/) and I'll respond whenever I can.",
        },
    },
    skills: [
        { name: "JavaScript", icon: JavaScript },
        { name: "TypeScript", icon: TypeScript },
        { name: "Python", icon: Python },
        { name: "Go", icon: Go },
        { name: "Java", icon: Java },
        { name: "Node.js", icon: Nodejs },
        { name: "Fast API", icon: FastAPI },
        { name: "RabbitMQ", icon: RabbitMQ },
        { name: "Kafka", icon: Kafka },
        { name: "Temporal", icon: Temporal },
        { name: "Rest APIs", icon: RestAPIs },
        { name: "gRPC", icon: GRPC },
        { name: "SQL", icon: SQL },
        { name: "NoSQL", icon: NoSQL },
        { name: "MongoDB", icon: MongoDB },
        { name: "PostgreSQL", icon: PostgreSQL },
        { name: "Redis", icon: Redis },
        { name: "Firebase", icon: Firebase },
        { name: "React.js", icon: ReactJs },
        { name: "Next.js", icon: NextJs },
        { name: "Tailwind CSS", icon: TailwindCSS },
        { name: "AWS", icon: AWS },
        { name: "GCP", icon: GCP },
        { name: "Azure", icon: Azure },
        { name: "Cloudflare", icon: Cloudflare },
        { name: "System Design", icon: SystemDesign },
        { name: "Microservice", icon: Microservice },
        { name: "Distributed Systems", icon: DistributedSystems },
        { name: "LLM", icon: LLM },
        { name: "Generative AI", icon: GenerativeAI },
        { name: "RAG", icon: RAG },
        { name: "LangChain", icon: LangChain },
        { name: "LangGraph", icon: LangGraph },
        { name: "Vector Embeddings", icon: VectorEmbeddings },
    ],
    navbar: [
        { href: "/", icon: House, label: "Home" },
        { href: "/blog", icon: Library, label: "Blog" },
    ],
    contact: {
        email: "bibek******@gmail.com",
        tel: "+91 **********",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/bibekkakati/",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/bibekkakati/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/kakatibibek",
                icon: Icons.x,
                navbar: true,
            },
        },
    },
    work: [
        {
            company: "Furbago",
            href: "https://furbago.com",
            badges: ["Founder"],
            location: "Delhi, India",
            title: "Founder & Software Engineer",
            logoUrl: "/logos/furbago-logo.jpeg",
            start: "March 2024",
            end: "May 2026",
            description: [
                "Developed the entire technology stack end-to-end, architecting and operating the marketplace, admin portal, supplier portal, and core backend using Node.js, MongoDB, Redis, Cloudflare, and Gemini.",
                "Engineered a high-read, cache-optimized backend supporting listings, availability, pricing, and booking workflows, reducing API response times by 50% while operating efficiently on lean infrastructure.",
                "Orchestrated AI-driven listing automation for document parsing, content generation, pricing extraction, validation, and SEO; reduced average listing processing time from 2 hours to 30 minutes while retaining human verification.",
                "Designed a unified payment processing system supporting multiple gateways, partial payments, and refunds, handling the core payment lifecycle across the marketplace.",
            ],
        },
        {
            company: "Superprocure",
            href: "https://superprocure.com",
            badges: [],
            location: "Remote, India",
            title: "Senior Software Engineer",
            logoUrl: "/logos/superprocure-logo.jpeg",
            start: "September 2021",
            end: "October 2023",
            description: [
                "Owned backend engineering across logistics execution, contract management, ePOD, and trip management, delivering production systems for enterprise customers and working closely with product and business teams.",
                "Architected and delivered a centralized authentication and SSO platform used across multiple internal applications and stakeholder groups.",
                "Designed fault-tolerant distributed workflows with Temporal for large-scale bulk data ingestion, with reliable retries, recovery, and failure handling; backend optimizations supported 400% growth in platform transaction volume during my tenure.",
                "Led a cross-functional engineering team of around 10 members across frontend, backend, database, and QA, driving technical design, code reviews, debugging, production support, and delivery.",
                "Partnered with business analysts and enterprise stakeholders on client demos, requirements, ERP integrations, and third-party integrations, translating business needs into production-ready systems.",
            ],
        },
        {
            company: "LearnCodeOnline",
            href: "https://learncodeonline.in",
            badges: [],
            location: "Remote, India",
            title: "Contract Software Engineer",
            logoUrl: "/logos/lco-logo.jpeg",
            start: "May 2021",
            end: "September 2021",
            description: [
                "Led full-stack development of buildresume.in, a resume builder platform, and findcoder.io, a developer portfolio platform, working directly with the Founder and CTO.",
                "Built end-to-end features across React, Node.js, and database layers, delivering production-ready applications within aggressive startup timelines.",
            ],
        },
        {
            company: "Cudy Technologies",
            href: "https://cudy.co",
            badges: [],
            location: "Remote, Singapore",
            title: "Contract Software Engineer",
            logoUrl: "/logos/cudy-logo.jpeg",
            start: "September 2020",
            end: "February 2021",
            description: [
                "Built and launched a presentation creation platform similar to SlideBean, enabling teachers and students to create structured educational content.",
                "Developed core application features across the full stack and contributed to a product used by 2,000+ users in production.",
            ],
        },
        {
            company: "Freelancer",
            href: "https://freelancer.com",
            badges: [],
            location: "Remote, India",
            title: "Software Developer",
            logoUrl: "/logos/freelancer-logo.jpeg",
            start: "February 2019",
            end: "September 2020",
            description: [
                "Collaborated with diverse clients and startups, delivering bespoke web and mobile applications.",
                "Spearheaded talent acquisition, hiring skilled developers and designers for early-stage startups.",
                "Provided invaluable consultation on product development and maintenance, contributing to startup success.",
            ],
        },
        {
            company: "Delhivery",
            href: "https://delhivery.com",
            badges: [],
            location: "Guwahati, India",
            title: "Management Trainee",
            logoUrl: "/logos/delhivery-logo.jpeg",
            start: "August 2019",
            end: "September 2019",
            description: [
                "Led last-mile delivery operations to ensure efficient and timely services.",
                "Successfully recruited and managed delivery personnel, optimising team performance.",
            ],
        },
    ],
    education: [
        {
            school: "Indira Gandhi National Open University",
            href: "https://ignou.ac.in",
            degree: "Bachelors of Computer Applications",
            logoUrl: "/logos/ignou-logo.jpeg",
            start: "2020",
            end: "2023",
        },
        {
            school: "Royal Global University",
            href: "https://rgu.ac",
            degree: "B.Sc in Information Technology",
            logoUrl: "/logos/rgu-logo.jpeg",
            start: "2018",
            end: "2019",
        },
    ],
    projects: [
        {
            title: "Clause AI - Rental Agreement Intelligence Platform",
            active: true,
            description: [
                "Built a multi-agent AI backend using Express.js, TypeScript, Mastra, Gemini, and PostgreSQL(with pgvector) to extract contract terms, summarize agreements, and identify risky clauses with evidence-backed explanations.",
                "Designed an asynchronous document-processing pipeline with BullMQ, Redis, and Cloudflare R2, with idempotent agent stages, persisted intermediate state, retries, and fault isolation.",
                "Implemented a RAG-based document query/chat system with semantic retrieval, tool-based agent orchestration, and grounded responses constrained to the source agreement.",
            ],
            technologies: [
                "Mastra",
                "Gemini",
                "PostgreSQL",
                "RAG",
                "AI Agent",
                "AI Workflows",
                "Redis",
            ],
            links: [
                {
                    type: "Website",
                    href: "",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/bibekkakati/clause.ai",
                    icon: <Icons.github className="size-3" />,
                },
            ],
        },
        {
            title: "Propio AI - Financial Management Platform for Hotels",
            active: true,
            description: [
                "Architected a financial management platform using Express.js, React.js, MongoDB, and Gemini to help short-term rental operators organize expenses, invoices, and receipts.",
                "Automated invoice and receipt processing through AI-powered OCR, extracting financial fields, categorizing expenses, and storing structured records with minimal manual entry.",
                "Enabled period-wise expense and revenue analysis with accountant-ready exports, making financial reconciliation and GST filing preparation significantly easier.",
                "Showcased at the India AI Impact Expo, Delhi.",
            ],
            technologies: [
                "Gemini",
                "RAG",
                "Vector Database",
                "MongoDB",
                "AI Agents",
            ],
            links: [
                {
                    type: "Website",
                    href: "",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/bibekkakati/propio.ai",
                    icon: <Icons.github className="size-3" />,
                },
            ],
        },
        {
            title: "Multi-Client Trading Execution Platform",
            active: true,
            description: [
                "Developed a multi-client trading execution platform that automated batch order placement across brokerage accounts through a centralized interface.",
                "Built secure backend services and trading integrations to support reliable, high-volume order execution workflows.",
            ],
            technologies: [
                "Firebase",
                "Node.js",
                "Websocket",
                "Realtime",
                "Stock Market",
            ],
            links: [
                {
                    type: "Website",
                    href: "",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "",
                    icon: <Icons.github className="size-3" />,
                },
            ],
        },
        {
            title: "Automated Pet Feeder System",
            active: true,
            description: [
                "Built an IoT-based automated pet feeder that can be controlled remotely through an Android app. Users can dispense food instantly or schedule feeding times from anywhere over the internet.",
                "The system uses a NodeMCU, continuous servo motor, and a backend hosted on AWS. It communicates in real time over WebSockets. Wi-Fi can also be configured directly from the app.",
            ],
            technologies: ["IoT", "Hardware", "Realtime", "NodeMCU", "Android"],
            links: [
                {
                    type: "Website",
                    href: "",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "",
                    icon: <Icons.github className="size-3" />,
                },
            ],
        },
    ],
} as const;
