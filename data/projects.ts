export interface ProjectDemo {
  url: string;
  email: string;
  password: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  architecture?: string;
  tech: string[];
  category: string;
  image: string;
  featured: boolean;
  blogPost: string;
  demo?: ProjectDemo;
}

export const projects: Project[] = [
  {
    id: 5,
    title: "Dental Clinic Management System",
    slug: "dental-clinic-management",
    description:
      "A complete practice management system for dental clinics covering patient records, appointment scheduling, billing, and clinical notes.",
    longDescription:
      "A full-featured dental clinic management system built with .NET MVC and SQL Server. Covers patient management, appointment scheduling with calendar view, billing and invoices, treatment records, and clinical notes with procedure tracking.",
    industry: "Healthcare",
    problem:
      "Manual patient management with paper records and phone-based appointment scheduling led to double bookings, lost patient history, and billing errors.",
    solution:
      "Built a complete clinic management system with digital patient records, calendar-based appointment scheduling, automated billing, and treatment history tracking.",
    result:
      "Clinic administration time reduced significantly. No more double bookings. Patient history instantly accessible during consultations.",
    features: [
      "Patient registration and records",
      "Appointment calendar with conflict detection",
      "Billing and invoice generation",
      "Treatment notes and procedure tracking",
      "Reporting and analytics",
    ],
    architecture:
      "Single-tier .NET MVC application with SQL Server backend. Deployed as intranet application within clinic network.",
    tech: [".NET MVC", "SQL Server", "C#", "JavaScript", "Bootstrap"],
    category: "Healthcare Software",
    image: "/placeholder.jpg",
    featured: true,
    demo: {
      url: "https://demo.kamrandev.com/dental",
      email: "demo@dental.com",
      password: "Demo@1234",
    },
    blogPost: `## Building a Dental Clinic Management System

A dental clinic was managing patient appointments on paper, billing manually, and storing patient history in filing cabinets. When the practice grew to three dentists and hundreds of active patients, these manual processes became unmanageable. Appointments were double-booked, patient records were hard to locate, and billing errors were common.

### The Requirements

The clinic needed a system that all three dentists and two front desk staff could use simultaneously. Core requirements included a patient registration system that captured demographics, medical history, and insurance information; an appointment calendar that prevented double bookings across multiple dentist schedules; digital treatment records where dentists could record procedures, notes, and prescriptions during consultations; billing that automatically calculated procedure costs and generated invoices; and reports for daily appointment lists, revenue summaries, and patient visit history.

### System Architecture

I built the system as a .NET MVC application deployed as an intranet web application on the clinic's local network. SQL Server handles the database. The choice of an intranet application rather than a cloud application was intentional — patient data sensitivity, the clinic's existing IT infrastructure, and offline operation requirements all pointed toward a locally hosted system.

### Patient Management

The patient module is the core of the system. Each patient record stores personal details, contact information, emergency contacts, medical history including allergies and existing conditions, insurance details, and a complete visit history linking to every appointment and treatment record. The search functionality allows staff to find patients by name, phone number, or patient ID. New patient registration walks staff through a structured form designed to capture all required information without overwhelming patients during check-in.

### Appointment Scheduling

The appointment calendar was the most complex feature. It displays all three dentist schedules side by side with a daily and weekly view. When booking an appointment, the system checks for conflicts across the selected dentist's schedule and warns if the requested slot overlaps with an existing appointment. Each appointment includes the patient, dentist, appointment type, estimated duration, and notes. The front desk can send appointment reminders manually through the system.

### Billing and Treatment Records

Dentists record treatment notes during consultations using a structured form that captures the tooth number, procedure performed, materials used, and clinical notes. These records link directly to billing — when a treatment is recorded, the associated procedure fee is automatically added to the patient's account. The billing module generates itemized invoices for each visit and tracks payment status. End-of-day reports show total revenue, treatments performed, and outstanding balances.

### Outcome

The clinic has been using the system for over a year. Double bookings are eliminated. Dentists report that having instant access to patient history during consultations has improved the quality of care. The billing errors that previously required manual reconciliation have essentially disappeared. The front desk processes appointments and billing significantly faster than the manual process.`,
  },
  {
    id: 1,
    title: "Multi-Vendor Ecommerce Platform",
    slug: "multi-vendor-ecommerce",
    description:
      "A full-featured multi-vendor marketplace allowing multiple sellers to manage their own storefronts, products, and orders from a single platform.",
    longDescription:
      "A comprehensive ecommerce platform built with Next.js on the frontend and .NET Web API on the backend, backed by PostgreSQL. Supports multiple independent vendors operating under a single marketplace with separate dashboards for vendors, customers, and administrators.",
    industry: "E-Commerce",
    problem:
      "Businesses needed multiple vendors on one platform with separate management but a unified customer experience.",
    solution:
      "Built a marketplace with buyer, seller, and admin portals. Vendor isolation via role-based access control, unified storefront for customers.",
    result:
      "Launched with 12 active vendors, processed 500+ orders in the first month. Average page load under 1.2 seconds.",
    features: [
      "Separate vendor, customer, and admin dashboards",
      "Vendor product catalog and inventory management",
      "Multi-vendor order splitting and fulfillment tracking",
      "Payment processing and vendor payouts",
      "Full-text product search",
    ],
    architecture:
      "Next.js frontend with ISR for product pages. .NET Web API backend with clean architecture. PostgreSQL with vendor-isolated data model.",
    tech: ["Next.js", ".NET Web API", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    category: "Web Platform",
    image: "/placeholder.jpg",
    featured: true,
    demo: {
      url: "https://demo.kamrandev.com/ecommerce",
      email: "demo@shop.com",
      password: "Demo@1234",
    },
    blogPost: `## Building a Multi-Vendor Ecommerce Platform

When a client approached me with the requirement to build a marketplace where multiple independent vendors could sell products under a single platform, I knew this would be one of the more architecturally interesting projects I had taken on. The requirements included separate dashboards for vendors, customers, and platform administrators, along with real-time inventory management, order processing, and payment integration.

### The Architecture

I chose Next.js for the frontend due to its excellent support for server-side rendering and static generation, which are critical for SEO on an ecommerce platform. Product listing pages use Incremental Static Regeneration to ensure fresh data without sacrificing performance. For the backend, I built a .NET Web API following clean architecture principles, organized into feature modules: catalog, orders, vendors, users, and payments. PostgreSQL was the database of choice because of its robust support for complex queries, JSON fields used for product variants, and excellent performance at scale.

### Multi-Tenancy Design

The trickiest part of this project was designing the vendor isolation model. Each vendor has their own product catalog, inventory levels, order queue, and analytics. However, customers see a unified storefront. I implemented a schema approach in PostgreSQL for vendor data while keeping customer-facing data in shared tables with vendor_id foreign keys throughout. Role-based access control was implemented at the API layer using JWT tokens with custom claims. A vendor token includes their vendor_id and allowed operations, making it impossible for one vendor to access another vendor's data.

### Order Management Flow

When a customer places an order containing products from multiple vendors, the system creates a single parent order for the customer's reference and multiple child fulfillment orders, one per vendor. Each vendor sees only their fulfillment orders in their dashboard. When all fulfillment orders are shipped, the parent order status updates automatically.

### Challenges and Solutions

The biggest challenge was handling inventory race conditions. When two customers try to purchase the last unit of a product simultaneously, only one should succeed. I solved this using PostgreSQL's optimistic locking with a version column on inventory records, retrying the transaction on conflict. Another challenge was the search and filtering functionality across thousands of products. I implemented full-text search using PostgreSQL's built-in tsvector and tsquery features, which provided fast, relevance-ranked results without adding a separate search engine.

### Outcome

The platform launched with twelve active vendors and processed over five hundred orders in the first month. Average page load time stayed under 1.2 seconds thanks to ISR caching. The client reported that vendors found the dashboard intuitive, and the order management flow significantly reduced manual coordination work.`,
  },
  {
    id: 2,
    title: "POS System",
    slug: "pos-system",
    description:
      "A comprehensive point-of-sale system built for retail environments, featuring real-time inventory tracking, sales reporting, and receipt management.",
    longDescription:
      "A robust POS system built with .NET MVC and SQL Server, designed for retail stores needing reliable transaction processing, inventory management, and detailed sales analytics with offline support.",
    industry: "Retail",
    problem:
      "Inventory and sales tracking inefficiencies. Paper-based records, end-of-day reconciliation errors, and no real-time stock visibility.",
    solution:
      "Built a POS system with sales processing, real-time inventory updates, barcode scanning, receipt printing, and offline mode.",
    result:
      "60% reduction in end-of-day reconciliation time. Inventory discrepancies dropped from 15% to under 2%.",
    features: [
      "Fast transaction processing with barcode scanning",
      "Real-time inventory updates on each sale",
      "Multiple payment methods (cash, card, split)",
      "Offline mode with automatic sync",
      "Receipt printing with ESC/POS support",
      "End-of-day sales reports",
    ],
    architecture:
      ".NET MVC with local SQL Server Express for offline operation. Central SQL Server for cloud sync. Timestamp-based sync service.",
    tech: [".NET MVC", "SQL Server", "C#", "JavaScript", "Bootstrap"],
    category: "Business Software",
    image: "/placeholder.jpg",
    featured: true,
    demo: {
      url: "https://demo.kamrandev.com/pos",
      email: "demo@pos.com",
      password: "Demo@1234",
    },
    blogPost: `## Building a POS System for Retail

A retail client needed to replace their paper-based sales tracking with a proper point-of-sale system. The requirements were clear but demanding: fast transaction processing, barcode scanning support, real-time inventory updates, end-of-day reporting, and the ability to work offline if the internet went down.

### Technology Choice

I chose .NET MVC because the client's IT team was comfortable with Windows-based systems and the application would run as a local web application on the store's network. SQL Server was the natural choice for the database given the ecosystem. The frontend uses Bootstrap for a clean, responsive interface that works well on both the cashier's desktop and a tablet used by the floor manager.

### Core Features

The sales module is the heart of the system. Cashiers can search products by name or scan barcodes using a USB barcode reader, which sends keystrokes like a keyboard requiring no special integration. The cart handles quantity adjustments, discounts both flat and percentage, and multiple payment methods including cash, card, and split payment. Inventory management runs in the background of every sale, decrementing the stock count immediately within the same SQL Server transaction as the sale record. This ensures the inventory is always consistent with sales data.

### Offline Mode

One of the more interesting technical challenges was supporting offline operation. The store had occasional internet outages but sales had to continue. I implemented a local SQL Server Express instance on the POS machine that serves as a cache. Sales are always written to the local database first, then synced to the central server when connectivity is restored. The sync process uses a timestamp-based approach where each record has a created_at and synced_at field. The sync service runs every five minutes and pushes unsynced records to the central server.

### Receipt Printing

The most complex part was the receipt printing integration. Receipt printers use ESC/POS commands sent over USB or serial ports. I wrote a simple ESC/POS command builder that generates the byte sequence for formatted receipts including the store logo stored as a bitmap.

### Outcome

The system processes an average of two hundred transactions per day across two registers. The client reported a sixty percent reduction in end-of-day reconciliation time because sales data is now automatically tallied. Inventory accuracy improved significantly with discrepancies dropping from fifteen percent to under two percent.`,
  },
  {
    id: 3,
    title: "School Management System",
    slug: "school-management",
    description:
      "A comprehensive school management platform covering student enrollment, attendance, grades, timetables, and fee management.",
    longDescription:
      "A full-featured school management system built with .NET MVC and Web API, managing everything from student enrollment to examinations, attendance tracking, and fee collection with a parent portal.",
    industry: "Education",
    problem:
      "Manual academic administration — paper attendance, spreadsheet-based fee tracking, and no parent communication tools.",
    solution:
      "Centralized school management with attendance, grades, fee management, timetables, and a parent portal for real-time updates.",
    result:
      "600+ students managed. Teachers save ~2 hours/week. Fee collection rate improved through automated reminders.",
    features: [
      "Student enrollment and profile management",
      "Daily attendance marking and percentage tracking",
      "Grade and examination management",
      "Fee plan assignment and payment tracking",
      "Automated overdue fee alerts",
      "Parent portal for grades and attendance",
      "Timetable management",
    ],
    architecture:
      "Hybrid .NET MVC + Web API architecture. MVC for main application, Web API for mobile parent app integration. SQL Server with module-based schema design.",
    tech: [".NET MVC", "Web API", "SQL Server", "C#", "JavaScript"],
    category: "Business Software",
    image: "/placeholder.jpg",
    featured: true,
    demo: {
      url: "https://demo.kamrandev.com/school",
      email: "demo@school.com",
      password: "Demo@1234",
    },
    blogPost: `## Building a School Management System

Managing a school involves an enormous amount of data: hundreds of students, dozens of teachers, multiple classes and subjects, daily attendance, periodic exams and grades, fee schedules, and parent communications. This school management system was built to bring all of that into a single organized platform.

### System Architecture

The system uses a hybrid architecture: .NET MVC for the main web application and a .NET Web API layer for specific features that required mobile app integration, including a companion app for parents to view grades and attendance. SQL Server handles the database with carefully designed schemas to support complex relationships between students, classes, teachers, subjects, and time periods. The application is divided into modules: Enrollment, Attendance, Academics, Timetable, Fees, and Communications.

### Student Enrollment and Records

The enrollment module handles new student registration with all required information including personal details, parent and guardian contacts, previous school records, and document uploads stored as PDFs. Students are assigned to classes, and the system tracks their entire academic history throughout their enrollment. The student profile page pulls together data from every module giving teachers and administrators a complete picture at a glance.

### Attendance Management

Daily attendance is one of the most frequently used features. Class teachers mark attendance for their periods using a simple checkmark interface that loads the entire class list at once. The system calculates attendance percentages per student per month and generates alerts for students falling below the school's minimum threshold, which is configurable per school policy.

### Fee Management

Fee management was one of the most complex modules. The school had multiple fee types including tuition, transport, library, and exam fees, with different structures for different class levels, discounts for siblings, and scholarship adjustments. I modeled this as a fee plan system where each student is assigned a fee plan defining their monthly charges. The system generates monthly fee records for all students and tracks payment status. Overdue fees trigger automatic alerts to parents and generate a report for the accounts office.

### Outcome

The system is now used by over six hundred students across twenty classes. Teachers report saving approximately two hours per week on administrative tasks. The fee collection rate improved significantly because automated reminders reduced missed payments. The parent portal has been particularly well-received, allowing parents to check attendance and grades without calling the school.`,
  },
  {
    id: 4,
    title: "Retail & Inventory Software",
    slug: "retail-inventory",
    description:
      "A multi-location retail inventory management system for tracking stock levels, purchase orders, and supplier relationships across multiple store branches.",
    longDescription:
      "A comprehensive inventory management system built with .NET MVC and MySQL, designed for a retail chain with multiple locations needing real-time stock visibility and automated reorder processes.",
    industry: "Retail",
    problem:
      "Stock discrepancies between system and physical counts, purchase orders tracked in spreadsheets, no real-time multi-location stock visibility.",
    solution:
      "Multi-location inventory system with location-aware stock tracking, purchase order lifecycle management, and automated reorder suggestions.",
    result:
      "Stock discrepancies dropped from 12% to under 1.5%. Overstock reduced by 20% through better visibility.",
    features: [
      "Location-aware inventory tracking",
      "Purchase order creation and receiving",
      "Stock transfer between locations",
      "Low stock alerts and auto-reorder suggestions",
      "Supplier management",
      "Inventory valuation reports",
    ],
    architecture:
      ".NET MVC with MySQL. Inventory levels tracked via inventory_transaction records with cached current stock. Database triggers maintain accuracy.",
    tech: [".NET MVC", "MySQL", "C#", "JavaScript", "Bootstrap"],
    category: "Business Software",
    image: "/placeholder.jpg",
    featured: false,
    blogPost: `## Building a Retail Inventory Management System

A retail chain with five locations was struggling with inventory visibility. Stock discrepancies between the system and physical counts were common, purchase orders were tracked in spreadsheets, and management had no real-time view of what was in stock at which location. This project replaced that chaos with a structured inventory management system.

### The Challenge

Multi-location inventory is fundamentally more complex than single-location inventory. A product does not just have a quantity but has a quantity at each location. Transfers between locations create their own paper trail. Purchase orders may be received at a central warehouse and distributed, or received directly at branches. All of this had to be modeled correctly. I chose .NET MVC and MySQL for this project, as MySQL was the client's preference and they had an existing database administrator on their team.

### Data Model

The core of the system is a location-aware inventory model. Each product has a master record with SKU, name, category, supplier, and reorder point. Inventory levels are tracked in a separate inventory_levels table with a composite key of product_id and location_id. Every inventory movement including sales, purchase receipts, transfers, adjustments, and returns creates an inventory_transaction record. The current inventory level is derived from the sum of these transactions, with a cached value updated by database triggers to avoid expensive recalculations on every read.

### Purchase Orders

The purchase order module tracks the full lifecycle from draft through confirmed to received. Each purchase order line item can be received in partial quantities across multiple deliveries, which is common for large orders. When a PO is received, the system automatically updates inventory levels, matches the received quantities against ordered quantities, and flags any discrepancies.

### Low Stock Alerts and Auto-Reorder

Each product has a configurable reorder point and reorder quantity. The system checks stock levels nightly and generates a reorder suggestions report for the purchasing team. For approved suppliers, the system can optionally generate draft purchase orders automatically, which the purchasing manager reviews and approves before sending. This feature alone saved the purchasing team approximately three hours per week that was previously spent manually checking stock levels in spreadsheets.

### Outcome

After three months of operation, stock discrepancies dropped from an average of twelve percent variance to under 1.5 percent. The purchasing team now operates from the system's suggestions rather than gut feel and spreadsheets. Management can see total inventory value across all locations in real-time, which has improved cash flow planning. The client estimates they have reduced overstock by twenty percent by having better visibility into slow-moving items.`,
  },
];
