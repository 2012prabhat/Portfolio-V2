const projectData = [
{
  id: 6,
  img: "/Projects/chatWise.png",
  name: "Chatwise",
  heading: "AI Chatbot Integration Platform",
  overview: `Chatwise is a customizable chatbot integration platform built with Next.js and MongoDB. It enables users to generate secure API keys, embed intelligent chatbots into any website, and manage their integrations seamlessly. With JWT-based authentication, real-time communication, and an elegant dashboard, Chatwise makes AI chatbot integration simple and scalable.`,
  features: [
    "JWT Authentication with Secure Login",
    "API Key Generation and Management",
    "Chatbot Embedding for Any Website",
    "Real-time AI Chat Interface",
    "Integration Dashboard for Developers",
    "Modern and Responsive UI Design"
  ],
  techStack: [
    { name: "Next.js", img: "/Skills/next.png" },
    { name: "MongoDB", img: "/Skills/mongo.png" },
    { name: "Tailwind", img: "/Skills/tailwind.svg" },
    { name: "Zustand", img: "/Skills/zustand.png" },
  ],
  links: {
    desc: "",
    github: "https://github.com/2012prabhat/Chatwise",
    live: "https://chatwise-chatbot.vercel.app/",
    gallery: 6
  }
}
,
  {
    id: 5,
    img: "/Projects/checkInn.png",
    name: "CheckInn",
    heading: "A Hotel Booking Management System",
    overview: `CheckInn is a full-fledged hotel booking platform that simplifies the process of finding and reserving accommodations. Users can browse hotels, check availability, and make secure bookings, while administrators can manage listings, bookings, and payments seamlessly. With features like real-time updates, Stripe payment integration, and JWT authentication, CheckInn ensures a smooth and secure booking experience.`,
    features: [
      "User and Admin Dashboards",
      "Secure Hotel Booking System",
      "Stripe Payment Integration",
      "JWT Authentication & Authorization",
      "Review & Rating System",
      "Responsive and User-Friendly Design"
    ],
    techStack: [
      { name: "Next.js", img: "/Skills/next.png" },
      { name: "Tailwind", img: "/Skills/tailwind.svg" },
      { name: "MongoDB", img: "/Skills/mongo.png" },
      { name: "Zustand", img: "/Skills/zustand.png" },
      { name: "Stripe", img: "/Skills/stripe.png" }
    ],
    links: {
      desc: "",
      github: "https://github.com/2012prabhat/CheckInn",
      live:"https://checkinn-hotel.vercel.app/",
      gallery: 6
    }
}
,

  {
        "id": 0,
        "img": "/Projects/5thPoll.png",
        "name": "5th Poll",
        "heading": "Survey & Rewards Platform",
        "overview": "5th Poll is an admin-controlled survey platform where users participate in surveys to earn reward points. Admins create and manage surveys, while users complete them to accumulate points. These points can be redeemed in the integrated product store for discounts or free items. The system includes secure authentication, point tracking, and a seamless store checkout experience.",
        "features": [
          "Admin-Managed Surveys",
          "Point Reward System",
          "Product Store with Point Redemption",
          "User Dashboard for Points Tracking",
          "Secure Authentication & Transactions"
        ],
        "techStack": [
          { "name": "React", "img": "/Skills/react.png" },
          { "name": "Django", "img": "/Skills/django.svg" },
          { "name": "PostgreSQL", "img": "/Skills/sql.svg" },
        ],
        "links": {
          "desc": "",
          "live": "https://panel.5thpoll.com",
          "gallery": 12
        }
    },
  {
    id: 4,
    img: "/Projects/careBuddy.png",
    name: "CareBuddy",
    heading: "A Healthcare Appointment Management System",
    overview: `CareBuddy is a comprehensive appointment management platform designed to streamline interactions between patients and doctors. The system allows users to book, reschedule, and cancel appointments effortlessly, while doctors can manage their schedules efficiently. Built with React.js, Material UI, and MongoDB, it ensures a smooth, secure, and responsive experience with a well-structured user interface.`,
    features: [
      "User and Doctor Portals",
      "Seamless Appointment Booking",
      "Real-Time Schedule Updates",
      "Secure User Authentication",
      "Interactive Dashboard UI",
      "Responsive and Modern Design"
    ],
    techStack: [
      { name: "React", img: "/Skills/react.png" },
      { name: "Tailwind", img: "/Skills/tailwind.svg" },
      { name: "MongoDB", img: "/Skills/mongo.png" },
      { name: "Node.js", img: "/Skills/node.png" },
      { name: "Express.js", img: "/Skills/express.png" }
    ],
    links: {
      desc: "",
      github: "https://github.com/2012prabhat/Care-Buddy",
      gallery: 5
    }
  },
  {
    id: 3,
    img: "/Projects/cartHub.png",
    name: "CartHub",
    heading: "A Shopping Dashboard for Product Management",
    overview: `CartHub is a shopping admin panel designed to manage products efficiently for an e-commerce website. The dashboard allows users to add, update, and remove products while providing a structured and user-friendly interface. Built with React.js, Material UI, and Bootstrap, it ensures a modern and responsive experience with interactive UI components.`,
    features: [
      "Product Management System",
      "Interactive Dashboard UI",
      "Responsive and Modern Design",
      "Real-Time Product Updates",
      "Material UI Components",
      "Optimized Performance"
    ],
    techStack: [
      { name: "React", img: "/Skills/react.png" },
      { name: "Material UI", img: "/Skills/mui.svg" },
      { name: "Bootstrap", img: "/Skills/bootstrap.svg" },
      { name: "JavaScript", img: "/Skills/js.png" }
    ],
    links: {
      desc: "",
      github: "https://github.com/2012prabhat/CartHub",
      live: "https://shopping-dashboard-beta.vercel.app/",
      gallery:4
    }
},
    {
        id: 2,
        img: "/Projects/gss.png",
        name: "Global Survey Solutions",
        heading: "A Professional Organization Website",
        overview: `Global Survey Solutions is a corporate website designed to showcase the company's expertise in survey research and data analysis. The website provides detailed information about the organization's services, industry experience, and client success stories. With a clean and modern design, it ensures easy navigation and accessibility for visitors. Built using React.js, CSS, and JavaScript, the website delivers a seamless user experience with responsive design and interactive elements.`,
        features: [
          "Informative Landing Page",
          "Service and Solutions Showcase",
          "About Us and Contact Pages",
          "Responsive and Modern Design",
          "SEO-Friendly Structure",
          "Fast and Optimized Performance"
        ],
        techStack: [{name:"React",img:"/Skills/react.png"}, {name:"CSS",img:"/Skills/css.png"}, {name:"Javascript",img:"/Skills/js.png"},{name:"Animation on Scroll",img:"/Skills/aos.svg"}],

        links: {
          desc:"",
          github: "",
          live: "https://www.globalsurveysolutions.com/",
          gallery:14
        }
      },
      
    {
        id:1,
        img:"/Projects/pSnipp.jpeg",
        name:"PSnipp",
        heading:"A Code Snippet Manager",
        overview:`Prabhat Snippets is a user-friendly web application
        designed to simplify the process of managing and storing your
        valuable code snippets. Whether you're a developer, designer, or
        hobbyist coder, Prabhat Snippets makes it effortless to register,
        log in securely, and organize your code pieces for easy access and
        future reference. Built with modern web technologies like
        React.js, CSS, and powered by Firebase for seamless data storage
        and authentication, Prabhat Snippets offers a sleek and efficient
        solution for your coding needs.`,
        features:["User Registration and Authentication",
          "User-Friendly Interface",
          "Syntax Highlighting",
          "Search and Filtering",
          "Code Preview and Editing",
          "Backup and Sync"],
          techStack: [{name:"React",img:"/Skills/react.png"}, {name:"CSS",img:"/Skills/css.png"}, {name:"Firebase",img:"/Skills/firebase.png"}],
          
          links: {
            desc:"",
            github: "https://github.com/2012prabhat/PSnip",
            live: "https://psnipp.netlify.app/",
            gallery:3
           
          }
      },
    

  ]

  export default projectData