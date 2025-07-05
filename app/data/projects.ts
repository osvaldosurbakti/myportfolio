// Professional English Data for Projects Page

export const projects = [
  {
    id: "approval-app",
    title: "Cash Advance Approval System",
    image: "/proyek1.png",
    shortDescription:
      "A web-based approval system for managing cash advance requests with multi-role workflow (Requester, KTU, EM, Finance). Developed using Next.js, React, Tailwind CSS, and MongoDB.",
    description: `
      This project is a professional web-based system designed to streamline the approval workflow of cash advance (uang muka) requests within an organization. It supports a multi-role access structure with the following flow:
      
      1. Login: All users (Requester, KTU, EM, Finance) log in with individual credentials.
      2. Request Submission: Requesters fill out detailed forms including amount, purpose, and due date.
      3. KTU Review: KTU reviews and approves/rejects requests with optional remarks.
      4. EM Confirmation: EM provides acknowledgment and oversight approval.
      5. Finance Processing: Finance team completes the process by adding transfer data and uploading proof.
      6. Tracking: Users can track request status and view historical submissions.
    `,
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/osvaldosurbakti/approval-app",
    video: "/proyek1.mp4"
  },
  {
    id: "marketing-reg-surat",
    title: "Marketing Offer Letter Numbering System",
    image: "/proyek2.png",
    shortDescription:
      "Automated system for registering and tracking marketing offer letter numbers at PT. Asuransi Raksa Pratikara. Built using CodeIgniter (PHP), MySQL, and JavaScript.",
    description: `
      This project is a digital system developed to automate the registration of marketing offer letter numbers at PT. Asuransi Raksa Pratikara, Surabaya Branch. It eliminates manual errors by generating structured and unique letter numbers based on predefined patterns.
      
      **Key Features:**
      - Auto-number generation based on offer code, branch, month, and year
      - User selection for offer codes and branches
      - Entry for marketing staff and offer descriptions
      - Searchable history log of all registered numbers
      - Automatic reset of numbering for new periods

      The system ensures consistency, improves documentation accuracy, and reduces administrative workload.
    `,
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/osvaldosurbakti/nomorsurat",
    video: "/proyek2.mp4"
  },
  {
    id: "asuransi-approval",
    title: "Insurance Offer Approval System",
    image: "/proyek3.png",
    shortDescription:
      "A web system for processing and approving insurance offers between marketing and underwriting teams. Built using CodeIgniter (PHP), MySQL, and JavaScript.",
    description: `
      This system is designed to facilitate the workflow of submitting and approving insurance offers within PT. Asuransi Raksa Pratikara. It enables collaboration between the marketing and underwriting departments through a structured interface.

      **Key Features:**
      - Role-based dashboards for marketing and underwriting
      - Offer creation and management by marketing team
      - Evaluation and approval/rejection by underwriting
      - Document uploads and secure storage
      - Filtering by status, keywords, and date
      - Personalized offer history based on user roles

      The solution enhances process efficiency, ensures data traceability, and reduces manual handling of sensitive insurance documents.
    `,
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/osvaldosurbakti/mapenawaran",
    video: "/proyek3.mp4"
  },
  {
    id: "pesonaspa",
    title: "PesonaSpa.id – Spa & Reflexology Website",
    image: "/proyek4.png",
    shortDescription:
      "A company profile website for a spa and reflexology business in Bandung, featuring services, locations, gallery, and WhatsApp integration. Built using CodeIgniter (PHP).",
    description: `
      PesonaSpa.id is a responsive and informative company website developed for a spa and reflexology brand in Bandung. It provides visitors with easy access to business information and communication channels.

      **Key Features:**
      - Elegant homepage with promotional call-to-action
      - Company profile with vision, mission, and services
      - Gallery showcasing interior and facilities
      - Spa services (Reflexology, Massage, Body Scrub)
      - Branch list integrated with Google Maps
      - Direct WhatsApp chat for each location
      - Scroll-to-top and responsive design for all devices
      - SEO-optimized with Open Graph and Twitter Card metadata
    `,
    tech: ["PHP", "CSS", "JavaScript", "CodeIgniter"],
    video: "/proyek4.mp4"
  },
  {
    id: "jatimakmur",
    title: "Jatimakmur Pratama Company Profile Website",
    image: "/proyek5.png",
    shortDescription:
      "A company profile website for Jatimakmur Pratama featuring product showcase, gallery, production process, and contact page. Built with React and React Router.",
    description: `
      This web application serves as a digital portfolio for Jatimakmur Pratama. Built with React.js, it provides a structured layout of company information, products, and contact details for potential clients.

      **Key Features:**
      - Introduction to company profile and values
      - Product display with comprehensive details
      - Photo gallery of products and manufacturing
      - Explanation of production workflow
      - Contact form and inquiry section
      - Seamless routing and auto-scroll behavior
      - Fully responsive layout for mobile and desktop

      The site helps strengthen brand presence and foster trust with potential customers.
    `,
    tech: ["React", "React Router", "Tailwind CSS", "CSS", "JavaScript"],
    github: "https://github.com/osvaldosurbakti/jatimakmurpratama",
    demo: "https://jatimakmurpratama.vercel.app/",
    video: "/proyek5.mp4"
  },
  {
    id: "seroja-group",
    title: "Seroja Medan Group – Profile & Recruitment Website",
    image: "/proyek6.png",
    shortDescription:
      "A modern company profile and recruitment platform for Seroja Medan Group, featuring portfolios, job listings, and online application. Built with React, Node.js, MongoDB, and Tailwind CSS.",
    description: `
      This project is a full-featured web platform designed for Seroja Medan Group to showcase its brand, services, and recruitment opportunities. Built with modern web technologies and a scalable architecture.

      **Key Features:**
      - Company overview including vision, mission, and leadership
      - Portfolio display with image and project descriptions
      - Career section with job listings and application form
      - Resume upload feature for applicants
      - Admin and superadmin access with role-based dashboards
      - Dynamic navigation: navbar for public, sidebar for admin

      **Tech Stack:** React.js, Node.js, MongoDB, Tailwind CSS

      This system establishes a digital identity for the company while simplifying the hiring process.
    `,
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/osvaldosurbakti/serojamedan",
    demo: "https://frontendseroja.vercel.app/",
    video: "/proyek6.mp4"
  },
  {
    id: "ratuseroja",
    title: "🌸 Ratu Seroja Nirwana Group – Company Website",
    image: "/proyek7.png",
    shortDescription:
      "A company profile website for Ratu Seroja Nirwana Group, featuring services, portfolio, news section, and contact form. Developed with React.js and Tailwind CSS.",
    description: `
      Ratu Seroja Nirwana Group's website is designed as a professional company profile and information portal. It highlights core services, portfolio, and updates with a content management system for admins.

      **Key Features:**
      - Elegant, responsive homepage with modern UI
      - Company profile, vision, and mission section
      - Services offered with visual emphasis
      - Project portfolio with image highlights
      - News & Updates module editable by admin
      - Contact form and social media links
      - Backend API built with Node.js and MongoDB to manage portfolio and news content

      **Tech Stack:**
      - Frontend: React.js, Tailwind CSS
      - Routing: React Router
      - Content Management: Admin-friendly for non-tech users

      This platform boosts corporate branding and allows for real-time news publishing.
    `,
    tech: ["React.js", "Tailwind CSS", "React Router", "Node.js", "MongoDB"],
    github: "https://github.com/osvaldosurbakti/ratuserojanirwana/commit/4cfe7fad3a90449b4fafffd9f7da2ce51c4ff614",
    demo: "https://ratuserojanirwana.vercel.app/",
    video: "/proyek7.mp4"
  },
  {
  id: "gowwee-perfume",
  title: "Gowwee Perfume – Company Website & Contact System",
  image: "/proyek8.png",
  shortDescription:
    "A professional company profile and contact landing page for Gowwee Perfume, featuring product info, branding section, and WhatsApp contact system. Built with React.js and Tailwind CSS.",
  description: `
    I developed a modern company profile and contact-focused landing page for **Gowwee Perfume**, a fragrance brand targeting the digital market. The website introduces the brand, displays its signature products, and enables users to contact the business directly via WhatsApp.

    **Key Features:**
    - Responsive homepage with visual introduction to the brand
    - Hero section with tagline and promotional CTA
    - About section introducing Gowwee's identity and values
    - Product showcase with image, description, and categories
    - Integrated WhatsApp button for direct customer engagement
    - Clean layout, optimized typography, and smooth navigation
    - Built with scalable and maintainable component structure

    **Technologies Used:**
    - Frontend: React.js & Tailwind CSS
    - Routing: React Router
    - Contact: WhatsApp deep-linking
    - Responsive Design: Mobile-first and SEO friendly
  `,
  tech: ["React.js", "Tailwind CSS", "React Router"],
  github: "https://github.com/osvaldosurbakti/gowweeperfume",
  demo: "https://gowweeperfume.vercel.app/",
  video: "/proyek8.mp4"
}

];
