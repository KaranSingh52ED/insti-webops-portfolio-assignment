import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Lovely",
      description:
        "Ecommerce store allows users to create account, search, add to wishlist, add to cart, checkout with Stripe, and view order history. Dashboard allows admins to create & manage products, track orders, and view sales report.",
      image: "https://i.ibb.co/7yjvJ2v/lovely.png",
      link: "https://www.youtube.com/watch?v=SR4dFgdKUyI&t=7s",
      stack: [
        { name: "React" },
        { name: "Redux" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "Stripe" },
        { name: "Bootstrap" },
        { name: "Sass" },
      ],
      demolink: "https://borcella-store.vercel.app/",
      codeLink: "https://github.com/phuc-mai/borcella_store"
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
                    href={project.link}
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
                    Ecommerce store allows users to create account, search, add to wishlist,
                    add to cart, checkout with Stripe, and view order
                    history. Dashboard allows admins to create & manage products,
                    track orders, and view sales report.
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
