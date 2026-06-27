export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    role: "CEO",
    company: "RetailPro Pakistan",
    text: "Kamran delivered our POS system ahead of schedule and it has been running flawlessly. His understanding of our business needs was impressive, and the system handles our daily transactions without any issues.",
    initials: "AH",
  },
  {
    name: "Fatima Malik",
    role: "Principal",
    company: "Bright Future Academy",
    text: "Our school management system has transformed how we handle student records, attendance, and fee management. Kamran was professional throughout the project and delivered exactly what we needed.",
    initials: "FM",
  },
  {
    name: "Usman Qureshi",
    role: "Operations Manager",
    company: "TechMart Online",
    text: "The multi-vendor ecommerce platform Kamran built for us has been a game changer. The admin panel is intuitive, and our vendors love how easy it is to manage their products. Highly recommend.",
    initials: "UQ",
  },
];
