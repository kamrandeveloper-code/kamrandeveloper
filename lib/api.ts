const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:5081";
const REVALIDATE_SECONDS = 60;

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  tags: string[];
  quickSummary?: string | null;
  faqs: FaqItem[];
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProcessStep {
  step: string;
  detail: string;
}

export interface EngagementInfo {
  type: string;
  timeline: string;
  note: string;
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: ProcessStep[];
  idealFor: string[];
  engagement: EngagementInfo;
  technologies: string[];
  quickSummary?: string | null;
  faqs: FaqItem[];
  featured: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface DemoInfo {
  url: string;
  email: string;
  password: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  architecture?: string | null;
  tech: string[];
  category: string;
  imageUrl?: string | null;
  featured: boolean;
  content: string;
  demo?: DemoInfo | null;
  quickSummary?: string | null;
  faqs: FaqItem[];
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  architecture?: string | null;
  tech: string[];
  category: string;
  image: string;
  featured: boolean;
  blogPost: string;
  demo?: DemoInfo | null;
  quickSummary?: string | null;
  faqs: FaqItem[];
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  email?: string | null;
  quickSummary?: string | null;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface SiteFaq {
  id: number;
  question: string;
  answer: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

async function apiFetch<T>(path: string): Promise<T | null> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`API request to ${path} failed with status ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return (await apiFetch<BlogPost[]>("/api/blogposts")) ?? [];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return apiFetch<BlogPost>(`/api/blogposts/slug/${encodeURIComponent(slug)}`);
}

export async function getServices(): Promise<Service[]> {
  return (await apiFetch<Service[]>("/api/services")) ?? [];
}

export async function getService(slug: string): Promise<Service | null> {
  return apiFetch<Service>(`/api/services/slug/${encodeURIComponent(slug)}`);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return (await apiFetch<CaseStudy[]>("/api/casestudies")) ?? [];
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  return apiFetch<CaseStudy>(`/api/casestudies/slug/${encodeURIComponent(slug)}`);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return (await apiFetch<Testimonial[]>("/api/testimonials")) ?? [];
}

export async function getProjects(): Promise<Project[]> {
  return (await apiFetch<Project[]>("/api/projects")) ?? [];
}

export async function getProject(slug: string): Promise<Project | null> {
  return apiFetch<Project>(`/api/projects/slug/${encodeURIComponent(slug)}`);
}

export async function getFaqs(): Promise<SiteFaq[]> {
  return (await apiFetch<SiteFaq[]>("/api/sitefaqs")) ?? [];
}
