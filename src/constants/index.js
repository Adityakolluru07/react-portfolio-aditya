import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate Software Engineer with a knack for crafting robust and scalable web applications and automation solutions. With 3 years of hands-on experience, I have honed my skills in Full Stack technologies, Data Science, Data Analysis and Automation solutions. My goal is to leverage my expertise which encompasses a wide range of programming languages, databases, web development frameworks, and advanced technologies, allowing me to develop innovative solutions that drive business efficiency and deliver exceptional user experiences.`;

export const ABOUT_TEXT_1 = `I am a dedicated and versatile developer with a passion for developing new distributed applications and predicting knowledge from data to improve future business models.`;

export const ABOUT_TEXT_2 = `With 3 years of professional experience and recent Masters grad in Computer Science, I have worked with a variety of technologies, including React, Flask, Python, AWS, Machine Learning, MySQL, PostgreSQL, and MongoDB. My journey in Software World began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.`;

export const ABOUT_TEXT_3 = `I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "2019 - 2022",
//     role: "Software Engineer",
//     company: "Accenture.",
//     description: [
//       "Spearheaded development of automation solutions for desktop applications and reduced process time by 40% in an esteemed US-based Health insurance company.",
//       "Created an automation suite using visual basic scripting for Oracle EBS and OBIEE, streamlining processes and significantly reducing manual effort, which cut operational costs by 25%.",
//       "Demonstrated expertise in CI/CD tools such as Git and Jenkins, ensured seamless CI/CD, cutting execution time by 30%, streamlining automation project deployments.",
//       "Developed regression scripts and facilitated implementation of new enhancements, such as concurrent programs and outbound interfaces, based on functional documents saving around 10k US dollars.",
//       "Mediated conflicts and addressed stakeholder concerns swiftly to uphold project momentum and foster collaboration among cross-functional teams. Served as a liaison, resulting in a significant 20% reduction in project delays.",
//       "Exhibited strategic initiative by managing the complete SDLC, enhancing existing Kanban and Agile processes using Jira and Zephyr, boosting team collaboration, and accelerating project timelines by 15%.",
//     ],
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   }
// ];
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "AI Engineer Intern",
    company: "BreatheIT Solutions Inc",
    description: [
      "Implemented an AI-powered process assessment tool using LangChain and RAG pipelines to analyze key metrics, delivering precise evaluations that enhance operational efficiency and decision-making."
    ],
    technologies: ["GenAI", "LLM", "LangChain", "RAG", "VectorDb"],
  },
  {
    year: "2019 - 2022",
    role: "Software Engineer",
    company: "Accenture.",
    description: [
      "Developed and refined Python scripts to automate complex data cleaning and processing workflows, leading to a more streamlined operation and significantly improving overall team efficiency. These scripts helped reduce process time by 40% for an US-based Health insurance company.",
      "Collaborated with senior developers to design and implement RESTful APIs using Flask, contributing to the optimization of backend operations and enhancing system performance, resulting in 20% faster data retrieval times.",
      "Automated a routine data extraction and transformation processes with Python, which reduced manual effort by 40% and accelerated project timelines, allowing for more rapid delivery of key features.",
      "Implemented and maintained comprehensive unit test suites using PyTest, increasing test coverage by 25%, which helped ensure the reliability and stability of the codebase before deployment.",
      "Actively participated in peer code reviews, where I identified and resolved code issues, leading to improved code quality and reducing the number of bugs in production.",
      "Demonstrated expertise in CI/CD tools such as Git and Jenkins, ensured seamless CI/CD, cutting execution time by 30% and streamlining automation project deployments."
    ],
    technologies: ["Python", "SQL", "Flask", "FastAPI"],
  }
];

export const PROJECTS = [
  {
    title: "Scalable ETL Framework with Advanced Techniques",
    image: project5,
    description:
      "Designed and implemented scalable ETL pipelines using Databricks and PySpark, leveraging advanced techniques like the Factory Pattern, broadcast joins, and partitioning to optimize data processing from CSV, Parquet, and Delta Tables into Data Lake and Delta Lake.",
    technologies: ["Databricks", "PySpark", "ETL Pipelines"],
  },
  {
    title: "Open Weather Map - Explorative Data Analysis",
    image: project1,
    description:
      "Employed Python, Pandas, and Plotly to analyze weather data via OpenWeatherMap API, mastered data manipulation and API integration to produce advanced EDA visualizations, including geospatial plots for multi-city forecasts.",
    technologies: ["Python", "Pandas", "Plotly", "API"],
  },
  {
    title: "Github Insights Dashboard",
    image: project2,
    description:
      "Developed and deployed machine learning models using TensorFlow/KERAS, Facebook Prophet, and StatsModel to forecast GitHub repository metrics, including issues, stars, forks, and contributions.",
    technologies: ["Python", "React", "Flask", "Docker", "GCP"],
  },
  {
    title: "Analysis on New York Airbnb data using Big Data Tools",
    image: project3,
    description:
      "Leveraged AWS S3, Apache Spark, and Python in Jupyter for in-depth Airbnb dataset analysis, streamlining data transformation to insights, with a focus on robust profiling, summarization, and visualization.",
    technologies: ["AWS S3", "Apache Spark", "Python", "Tableau"],
  },
  {
    title: "Twitter Hate Speech Recognition using Machine Learning",
    image: project4,
    description:
      "Engineered a hate speech detection ML system with text processing and TF-IDF; attained 89.35% accuracy leveraging Random Forest, reducing hate speech on Twitter platform.",
    technologies: ["Machine Learning", "Python", "NLP", "Seaborn"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "adityakolluru24@gmail.com",
};
