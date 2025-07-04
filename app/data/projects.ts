// Dummy data for projects page

export const projects = [
  {
    id: "approval-app",
    title: "Sistem Approval Permohonan Uang Muka",
    image: "/proyek1.png",
    shortDescription:
      "A web-based approval system for cash advance requests with multi-role workflow (Pemohon, KTU, EM, Staff Keuangan). Built with Next.js, React, Tailwind CSS, and MongoDB.",
    description: `
      This project is a professional web application for managing and approving cash advance requests (permohonan uang muka) in an organization. The system features a multi-role workflow:
      
      1. Login: All users (Pemohon, KTU, EM, Staff Keuangan) authenticate with username and password.
      2. Pengisian Form: Pemohon fills out a detailed cash advance request form (name, purpose, amount, date needed, etc).
      3. Approval KTU: KTU reviews incoming requests, can approve or reject with notes.
      4. Diketahui EM: EM reviews requests approved by KTU and marks as "Diketahui".
      5. Proses Staff Keuangan: Staff Keuangan processes approved requests, adds transaction info, and uploads proof of transfer.
      6. Tracking & Riwayat: All users can track the status and history of their requests.
          `,
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/osvaldosurbakti/approval-app",
        video: "/proyek1.mp4"
  },
  {
    id: "marketing-reg-surat",
    title: "Sistem Registrasi Nomor Surat Penawaran Marketing",
    image: "/proyek2.png",
    shortDescription:
      "Web system for automated registration and tracking of marketing offer letter numbers at PT. Asuransi Raksa Pratikara (Surabaya Branch). Built with CodeIgniter (PHP), MySQL, JavaScript, CSS.",
    description: `
      I developed a web-based system to automate the registration process of marketing offer letter numbers for the Surabaya branch of PT. Asuransi Raksa Pratikara. The system generates dynamic letter numbers and prevents duplication based on offer code, branch, month, and year.

      **Key Features:**
      - Automatic numbering following company format
      - Selection of offer code and branch
      - Recording marketing name and offer description
      - History and search for letter numbers
      - Automatic reset of numbering each month and year

      This project improves documentation efficiency, reduces manual errors, and supports more structured offer management in a multi-branch environment.
    `,
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/osvaldosurbakti/nomorsurat",
    video: "/proyek2.mp4"
  },
  {
    id: "asuransi-approval",
    title: "Sistem Approval Penawaran Asuransi",
    image: "/proyek3.png",
    shortDescription:
      "Web system for managing and approving insurance offers between marketing and underwriting teams at PT. Asuransi Raksa Pratikara. Built with CodeIgniter (PHP), MySQL, JavaScript, CSS.",
    description: `
      I developed a web-based system to facilitate the submission and approval process of insurance offers between the marketing and underwriting teams at PT. Asuransi Raksa Pratikara.

      **Key Features:**
      - Role-based login and dashboard (marketing & underwriting)
      - Input and management of insurance offers by marketing team
      - Evaluation, comments, and approval/rejection process by underwriting
      - Upload and access offer documents
      - Filtering and searching by status, date, or keyword
      - Separate offer history based on user access rights

      This system improves collaboration between marketing and underwriting, accelerates business processes, and reduces the risk of errors in managing offer documents.
    `,
    tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/osvaldosurbakti/mapenawaran",
    video: "/proyek3.mp4"
  },
  {
    id: "pesonaspa",
    title: "PesonaSpa.id – Website Spa & Reflexology",
    image: "/proyek4.png",
    shortDescription:
      "Company profile website for PesonaSpa.id, a spa & reflexology business in Bandung. Features service info, branch locations, WhatsApp integration, and a responsive gallery. Built with CodeIgniter (PHP), HTML, CSS, JavaScript.",
    description: `
      PesonaSpa.id is a professional company profile website for a spa and reflexology business based in Bandung. The website introduces spa services and makes it easy for customers to access branch locations, WhatsApp contacts, gallery, and service descriptions.

      **Key Features:**
      - Homepage with tagline and service CTA
      - About Us section introducing business vision and services
      - Spa Services: Reflexology, Body Massage, Body Scrub
      - Gallery showcasing spa rooms and facilities
      - Branch list with Google Maps integration for direct navigation
      - WhatsApp button at each branch for quick communication
      - Scroll to Top Button for better navigation
      - Responsive design for desktop and mobile
      - Open Graph & Twitter Card metadata for social media sharing
    `,
    tech: ["PHP", "CSS", "JavaScript", "CodeIgniter"],
    video: "/proyek4.mp4"
  },
  {
    id: "jatimakmur",
    title: "Website Perusahaan Jatimakmur Pratama",
    image: "/proyek5.png",
    shortDescription:
      "Company profile website for Jatimakmur Pratama, featuring company profile, product showcase, gallery, production process, and contact page. Built with React and React Router.",
    description: `
      This project is a company profile website for Jatimakmur Pratama, developed using React. The website features a company profile page, product showcase, photo gallery, production process description, and a contact page. Navigation between pages is seamless using React Router, with automatic scroll-to-top on each route change.

      **Key Features:**
      - Company profile and vision introduction
      - Product showcase with detailed descriptions
      - Photo gallery of products and facilities
      - Production process explanation
      - Contact page for client inquiries
      - Smooth navigation with React Router and auto scroll-to-top
      - Responsive design and modular components for optimal UX

      This website strengthens the company's branding, helps potential clients learn about products and services, and increases Jatimakmur Pratama's credibility in the digital space.
    `,
    tech: ["React", "React Router", "CSS", "JavaScript"],
    github: "https://github.com/osvaldosurbakti/jatimakmurpratama",
    demo : "https://jatimakmurpratama.vercel.app/",
    video: "/proyek5.mp4"
  },
  {
    id: "seroja-group",
    title: "Company Profile & Recruitment Website – Seroja Medan Group",
    image: "/proyek6.png",
    shortDescription:
      "Modern company profile and recruitment website for Seroja Medan Group. Features company info, project portfolios, job listings, and online application. Built with React, Node.js, MongoDB, and Tailwind CSS.",
    description: `
      This project is a modern, responsive company profile and recruitment website developed for Seroja Medan Group. It showcases company information, project portfolios, job openings, and a job application form. The system is built using React.js, Node.js, MongoDB, and Tailwind CSS with a modular component structure for scalability and easy maintenance.

      **Key Features:**
      - Company profile pages, including vision, mission, and leadership team
      - Portfolio showcase with detailed descriptions and images
      - Career section with active job listings and detailed job descriptions
      - Job application form with resume upload functionality
      - Login system for admin and superadmin (dummy authentication)
      - Dynamic navigation UI: public users see a top navbar, admin/superadmin see a sidebar dashboard

      **Tech Stack:** React.js, Node.js, MongoDB, Tailwind CSS

      **Project Purpose:**  
      To provide a professional digital platform that promotes the company’s identity and facilitates online job recruitment effectively.
    `,
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/osvaldosurbakti/serojamedan",
    demo: "https://frontendseroja.vercel.app/",
    video: "/proyek6.mp4"
  },
  {
    id: "ratuseroja",
    title: "🌸 Ratu Seroja Nirwana Group – Company Profile Website",
    image: "/proyek7.png",
    shortDescription:
      "Company profile website for Ratu Seroja Nirwana Group, featuring company info, services, project portfolio, news, and contact. Built with React.js and Tailwind CSS.",
    description: `
      I developed a company profile website for Ratu Seroja Nirwana Group, a company engaged in services and trading. The website is designed to showcase company information, main services, project portfolio, and a news & updates feature.

      **Key Features:**
      - Modern, responsive homepage
      - About Company (Profile, Vision, Mission)
      - List of offered services
      - Project portfolio
      - "News & Update" feature manageable by admin
      - Contact form and social media info

      **Technologies Used:**
      - Frontend: React.js & Tailwind CSS
      - Routing: React Router
      - Admin Content Management: Designed for non-technical users to update content (especially news & portfolio)
      - Responsive Design: Optimized for desktop and mobile
    `,
    tech: ["React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/osvaldosurbakti/ratuserojanirwana/commit/4cfe7fad3a90449b4fafffd9f7da2ce51c4ff614",
    demo: "https://ratuserojanirwana.vercel.app/",
    video: "/proyek7.mp4"
  }
];