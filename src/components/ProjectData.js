const projectData = [
  {
    id: 1,
    img: "/projects/cartHub.png",
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
        img: "/projects/gss.png",
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
        id:3,
        img:"/projects/pSnipp.jpeg",
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