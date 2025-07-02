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
  }
];