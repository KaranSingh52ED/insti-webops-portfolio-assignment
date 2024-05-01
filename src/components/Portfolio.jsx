import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "My Personal Porfolio",
      description:
        "I have successfully developed and launched a comprehensive portfolio website. This website is fully functional, showcasing my skills, achievements, and professional experience in a visually appealing and user-friendly manner.",
      image: "https://res.cloudinary.com/dh4adw5o7/image/upload/v1714557725/Portfolio%20Content/t8nj0ipfojjbtigny0ew.png",
      stack: [
        { name: "React" },
        { name: "Redux" },
        { name: "Node.js" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
      ],
      demolink: "https://kabira-portfolio.vercel.app/",
      codeLink: "https://github.com/KaranSingh52ED/MyPortFolio"
    },

    {
      title: "E-commerce Website",
      description:
        "I have developed an e-commerce website that allows users to browse products, add them to the cart, and make purchases. The website is fully functional and includes features such as product search, product filtering, and user authentication.",
      image: "https://res.cloudinary.com/dh4adw5o7/image/upload/v1714557448/Portfolio%20Content/njfakmckekvwdmgopic5.png",
      stack: [
        { name: "HTML" },
        { name: "Javascript" },
        { name: "CSS" },
      ],
      demolink: "https://ecommerce-2023-puce.vercel.app/",
      codeLink: "https://github.com/KaranSingh52ED/Ecommerce-2023",
    },
  ]


  return (
    <section className="portfolio" id="projects">
      <div className="container">
        <h3>PORTFOLIO</h3>
        <h1>Each project is a unique piece of development</h1>

        {
          projects.map((project, index) => (
            <div className="all-projects" key={index}>
              <div className="project">
                <div className="project-img" >
                  <a
                    href={project.demolink}
                    target="_blank"
                  >
                    <img
                      src={project.image}
                      alt="ecommerce and dashboard"
                    />
                  </a>
                </div>
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p className="project-desc">
                    {project.description}
                  </p>
                  <div className="project-stack">
                    {
                      project.stack.map((stack, index) => (
                        <span key={index}>{stack.name}</span>
                      ))
                    }
                  </div>
                  <div className="project-links multi-links">

                    <a href={project.codeLink} target="_blank">
                      Source Code
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      href={project.demolink}
                      target="_blank"
                    >
                      Demo Link
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>


            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
