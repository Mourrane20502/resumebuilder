import {
  FileText,
  LayoutDashboard,
  LucideIcon,
  Settings,
  Zap,
} from "lucide-react";
import { StaticImageData } from "next/image";
import firstResume from "../assets/13237069_5192021.jpg";
import thirdResume from "../assets/196924512_10724504.jpg";
import secondResume from "../assets/freepik-professional-geometric-mark-smith-web-developer-resume-20250526115729tKWm.jpeg";
export type Features = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};
export const Features: Features[] = [
  {
    id: 1,
    title: "Easy Resume Builder",
    description:
      "Intuitive drag-and-drop interface with professional templates.",
    icon: Zap,
  },
  {
    id: 2,
    title: "PDF Export",
    description:
      "Export your resume in high-quality PDF format, ready to send anywhere.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Customizable Templates",
    description:
      "Choose from multiple modern templates and tailor them to your style.",
    icon: LayoutDashboard,
  },
  {
    id: 4,
    title: "Advanced Settings",
    description: "Fine-tune your resume sections and customize styles easily.",
    icon: Settings,
  },
];

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 0,
    features: ["Create 1 resume", "Export as PDF", "Basic templates"],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 15,
    features: [
      "Unlimited resumes",
      "Advanced templates",
      "Custom sections",
      "Priority support",
    ],
    cta: "Upgrade Now",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 30,
    features: [
      "Everything in Pro",
      "Personalized resume review",
      "Cover letter templates",
      "24/7 Support",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

export const NavigationsLinks = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/templates", label: "Templates" },
  { href: "/dashboard", label: "Dashboard" },
];

export type TemplateType = {
  id: number;
  name: string;
  image: string | StaticImageData;
};

export const Templates = [
  {
    id: 1,
    name: "Modern",
    image: secondResume,
  },
  {
    id: 2,
    name: "Professional",
    image: secondResume,
  },
  {
    id: 3,
    name: "Creative",
    image: secondResume,
  },
];
