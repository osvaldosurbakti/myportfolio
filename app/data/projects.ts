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
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    image: "/projects/ecommerce.png", // pastikan file ada di public/projects/ecommerce.png
    shortDescription: "A full-featured e-commerce web app with product catalog, cart, checkout, and admin dashboard.",
    description: `
      This e-commerce platform allows users to browse products, add them to a cart, and complete purchases. 
      Features include authentication, product management, order tracking, and an admin dashboard. 
      Built with React, Node.js, Express, and MongoDB.
    `,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/osvaldosurbakti/approval-app.com",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: "blog",
    title: "Modern Blog Platform",
    image: "/projects/blog.png", // pastikan file ada di public/projects/blog.png
    shortDescription: "A blog platform with markdown support, comments, and user authentication.",
    description: `
      A modern blog application where users can write, edit, and delete posts using markdown. 
      Includes features like comments, user authentication, and a rich text editor. 
      Built with Next.js, Prisma, and PostgreSQL.
    `,
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/osvaldosurbakti/blog",
    demo: "https://blog-demo.com",
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    image: "/projects/dashboard.png", // pastikan file ada di public/projects/dashboard.png
    shortDescription: "A professional dashboard for managing users, analytics, and content.",
    description: `
      An admin dashboard with charts, tables, and user management features. 
      Built with React, Chart.js, and Material UI for a clean and interactive experience.
    `,
    tech: ["React", "Chart.js", "Material UI"],
    github: "https://github.com/osvaldosurbakti/dashboard",
    demo: "https://dashboard-demo.com",
  },
  {
    id: "chatapp",
    title: "Real-time Chat App",
    image: "/projects/chatapp.png", // pastikan file ada di public/projects/chatapp.png
    shortDescription: "A real-time chat application with rooms, private messaging, and emoji support.",
    description: `
      A chat app supporting multiple rooms, private messages, and emoji reactions. 
      Built with React, Socket.io, and Node.js for real-time communication.
    `,
    tech: ["React", "Socket.io", "Node.js", "Express"],
    github: "https://github.com/osvaldosurbakti/chatapp",
    demo: "https://chatapp-demo.com",
  },
];
