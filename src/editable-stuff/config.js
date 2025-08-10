// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Muhammad",
  middleName: "",
  lastName: "Uzair",
  message: "Empowering Your Business Growth with Innovative Software Solutions",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Muhammad-uzair029",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/muhammad-uzair-b20452168/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/pp-profile.jpeg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pp-profile.jpeg"),
  imageSize: 375,
  message:
    "Hello, I am Muhammad Uzair, a Senior Full Stack Developer with 4.5+ years of progressive experience leading technical teams and architecting scalable cloud solutions. I have a proven track record of improving development processes by 40%, optimizing system performance, and leading junior developers. My expertise spans Java Spring Boot, React, Node.js, AWS architecture, and team leadership. I'm passionate about developing powerful Web Apps/APIs and Mobile apps, always seeking to push the boundaries of what's possible in the digital world through innovative solutions and collaborative teamwork.",
  resume:
    "https://drive.google.com/uc?export=download&id=1w3tBR1M86tmWeTiiQ_RqyLoTse1rxZdY",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Muhammad-uzair029", // Update your GitHub username if different
  reposLength: 6, // Adjust based on the number of projects you want to display
  specificRepos: [], // Add specific repo names here if you want
};

// LEADERSHIP SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Throughout my career, I've embraced leadership roles, successfully leading teams of 2-4 developers across multiple projects. At SoftAims, I lead two associate software engineers in project feature planning and time estimations, while providing guidelines on client communication. I've improved development processes by 40% by introducing AI tools through awareness sessions and facilitating their purchase. My commitment extends to participating in technical interviews, project demos, and kick-off meetings, underscoring my role in fostering innovation and team collaboration.",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills & Expertise",
  hardSkills: [
    { name: "Frontend Development", value: 95, subSkills: ["React.js", "TypeScript", "Tailwind CSS", "Angular"] },
    { name: "Java Spring Boot", value: 90, subSkills: ["Spring Framework", "Spring Security", "Spring Data JPA", "Microservices"] },
    { name: "Backend Development", value: 90, subSkills: ["Java Spring Boot", "Node.js", "Nest.js", "API Gateway"] },
    { name: "Programming Languages", value: 90, subSkills: ["JavaScript (Expert)", "TypeScript (Advanced)", "Python (Intermediate)", "Java (Advanced)"] },
    { name: "Frameworks & Libraries", value: 90, subSkills: ["Java Spring Boot", "React.js", "Node.js", "Nest.js", "Angular"] },
    { name: "Cloud & DevOps", value: 85, subSkills: ["AWS (EC2, RDS, S3, EventBridge, SQS)", "Docker", "CI/CD Pipelines"] },
    { name: "Databases", value: 85, subSkills: ["PostgreSQL", "DynamoDB", "Redis", "MongoDB"] },
    { name: "Mobile Development", value: 80, subSkills: ["Native Android (Kotlin)", "Flutter", "React Native"] },
    { name: "Tools & Automation", value: 85, subSkills: ["Puppeteer", "GraphQL", "REST APIs", "Web Scraping", "Shopify App Development"] },
  ],
  softSkills: [
    { name: "Leadership & Management", value: 95, subSkills: ["Team Leadership", "Project Management", "Client Communication"] },
    { name: "Technical Excellence", value: 95, subSkills: ["Problem Solving", "Technical Architecture", "Code Review"] },
    { name: "Business & Process", value: 90, subSkills: ["Business Development", "Agile Development", "Process Improvement"] },
    { name: "Communication", value: 90, subSkills: ["Client Engagement", "Technical Interviews", "Project Demos"] },
  ],
  skillCategories: [
    {
      name: "Frontend Technologies",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Angular", "Canvas API"]
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Java Spring Boot", "Spring Framework", "React.js", "Node.js", "Nest.js", "Angular"]
    },
    {
      name: "Backend Technologies", 
      skills: ["Java Spring Boot", "Node.js", "Nest.js", "GraphQL", "REST APIs"]
    },
    {
      name: "Cloud & Infrastructure",
      skills: ["AWS (EC2, RDS, S3, EventBridge, SQS)", "Docker", "CI/CD", "Lambda Functions"]
    },
    {
      name: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Firebase"]
    },
    {
      name: "Development Tools",
      skills: ["Git", "Jenkins", "Puppeteer", "Web Scraping", "Automation Scripts", "Shopify App Development"]
    },
    {
      name: "Payment & Integration",
      skills: ["Stripe", "Shopify APIs", "International Shipping SDKs", "SMS/Email Services"]
    }
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently exploring senior engineering opportunities with international technology companies. If you're interested in collaborating or if you have any questions about my expertise in full-stack development, cloud architecture, and team leadership, feel free to reach out to me.",
  email: "muhammaduzairse@gmail.com", // Updated with current email
};

// EXPERIENCES SECTION
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Senior Software Engineer",
      company: "SoftAims",
      companyUrl: "https://thesoftaims.com/",
      date: "Oct 2023 - Present",
      description:
        "Leading two associate software engineers in project feature planning and time estimations, providing guidelines on client communication. Improved development processes by 40% by introducing AI tools through awareness sessions and facilitating their purchase. Working closely with Business Administrators on technical interviews and collaborating with the business team to drive positive outcomes in business development. Taking responsibility for project demos and kick-off meetings.",
    },
    {
      role: "Software Engineer",
      company: "PureLogics",
      companyUrl: "https://purelogics.com/",
      date: "Jun 2023 - Oct 2023",
      description:
        "Led a dynamic team of 4, focusing on development, management, and operational excellence. Responsible for project and feature time estimations, managing client communication from planning to feature delivery. Implemented AWS Lambda functions to handle back-end processes, enhancing system responsiveness and scalability. Used AWS Elastic Load Balancing to efficiently distribute incoming traffic, ensuring seamless user experiences during peak loads.",
    },
    {
      role: "Software Engineer",
      company: "Aurora Solutions",
      companyUrl: "https://www.aurorasolutions.io/",
      date: "Sep 2021 - May 2023",
      description:
        "Served as a full stack engineer and mobile application developer on four fast-paced projects. Collaborated with development and testing teams to design scalable solutions, focusing on client functionality requirements. Responsible for the smooth deployment of web and Android applications. Developed serverless backend services using AWS Lambda and integrated them with frontend applications via API Gateway.",
    },
    {
      role: "Flutter Developer",
      company: "MGS Apps Technology",
      date: "Jan 2021 - Jun 2021",
      description:
        "Worked as a Flutter developer focusing on Islamic apps, managed authentication and crashing issues, Firebase and Firestore operations, API integrations, and app testing on Android. Skills: Flutter, Firebase.",
    },
  ],
};

const projects  = {
  show: true,
  heading: "Projects",
  data:
[
  {
    name: "Gov Worx Public Safety Training Platform",
    company: "SoftAims",
    description:
      "Architected the signoff engine for multiple portals and roles to signoff reports created by 911 events and officers. Responsible for managing all training events and reports section against all portals. Ensured planning and development phases for upcoming features and integrations while ensuring accessibility standards compliance. Created and enhanced the training observation feedback report system for performance evaluations. Optimized AWS EventBridge polling architecture, reducing cloud infrastructure costs.",
    technologies:
      "React TypeScript, Java SpringBoot, AWS EventBridge, SQS",
    link: "https://govworx.ai/",
  },
  {
    name: "ORYN Lead Generation Platform",
    company: "SoftAims",
    description:
      "Managed the project from requirement gathering to deployment and post-launch support. Enhanced web scraping and crawling processes by 25% using advanced Puppeteer automation techniques. Boosted automation efficiency by 80% through successful integration of LinkedIn and Twitter APIs. Reviewed pull requests for frontend and backend to ensure smooth deployment. Made architecture decisions and participated in sprint planning with clients.",
    technologies:
      "React TypeScript, Node.js, Puppeteer, PostgreSQL, AWS (EC2, RDS, S3), CI/CD",
    link: "https://oryn.io/",
  },
  {
    name: "Illuscriber Clothing Measurement Extension",
    company: "SoftAims",
    description:
      "Designed application architecture and established project boilerplates for pixel-perfect PSD-to-Canvas conversion. Conducted thorough reviews of client PSD files and implemented accurate canvas conversions. Led the PSD-to-canvas conversion with a focus on pixel-perfect implementation. Led development team through complex canvas implementation, achieving 100% design accuracy. Reviewed pull requests for both frontend and backend development, implementing automated deployment pipelines.",
    technologies:
      "React TypeScript, Node.js, Canvas API, PostgreSQL, AWS",
    link: "https://illuscriber.com/",
  },
  {
    name: "NameGlo E-commerce Platform",
    company: "PureLogics",
    description:
      "Led a team of 4 developers, overseeing backend development and deployment processes. Integrated international shipment SDKs into the backend for global order fulfillment. Integrated Shopify APIs, webhooks and multiple international delivery shipment SDKs. Reviewed pull requests for frontend and backend to ensure smooth deployment and code quality. Managed complete project lifecycle from planning to deployment and maintenance.",
    technologies:
      "React.js, Node.js, MongoDB, Shipment APIs, Shopify App Integration",
    link: "https://glostudio.design/",
  },
  {
    name: "Score (NeverOffside) Football Platform",
    company: "Aurora Solutions",
    description:
      "Developed and integrated new features for both web and mobile (Android) applications. Completely redesigned Android application interface, migrating from legacy UI to modern user experience. Shifted the whole Android app from old to new user interface with improved performance. Integrated Stripe payment services, SMS notifications, and AWS SQS messaging for real-time updates. Collaborated with development teams to ensure seamless integration and deployment processes.",
    technologies:
      "React.js, Node.js, GraphQL, PostgreSQL, Native Android (Kotlin)",
    link: "https://neveroffside.com/",
  },
  {
    name: "DFS Army Betting Platform",
    company: "Aurora Solutions",
    description:
      "Developed Python scripts to automate mathematical operations in Excel and migrated all data from Excel to AWS DynamoDB. Led frontend development with Angular and successfully completed the full integration process. Reviewed pull requests for frontend and backend to ensure smooth deployment and code quality. Implemented data migration strategies and optimized database performance for high-volume transactions. Collaborated with cross-functional teams to deliver comprehensive betting platform solutions.",
    technologies:
      "Angular, Node.js, PostgreSQL, Python, AWS DynamoDB",
    link: "https://dfsarmy.com/",
  },
]}



export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  projects,
};
