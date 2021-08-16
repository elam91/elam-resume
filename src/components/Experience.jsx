import { Grid } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard";
import OurIsraelLogo from "../images/ourisraellogo.png";
import MyPhoto2 from "../images/me2.jpg";

const projects = [
  {
    title: "This resumé 😃",
    subheader: "built with React",
    image: MyPhoto2,
    content: "And using Material-UI",
    githubLink: "https://github.com/elam91/elam-resume",
    projectLink: "",
  },
  {
    title: "Our Israel",
    subheader: "ישראל שלנו",
    image: OurIsraelLogo,
    content:
      "A choice game ('choose your own adventure') using videos where the player chooses how to advance the plot, built in React, with a Django Rest Framework backend, I wrote the entire frontend from scratch, applied the design I was given,  as well as assisting in writing tests for the backend.",

    projectLink: "https://choicegame.noal.org.il/",
  },
  //   {
  //     title: "Family Food",
  //     subheader: "ארוחה משפחתית",
  //     image: "",
  //     content: "",
  //     githubLink: "",
  //     projectLink: "",
  //   },
];
export default function Experience() {
  return (
    <React.Fragment>
      <Grid container>
        {projects.map((project) => (
          <Grid key={project.title + "Grid"} item xs={12} md={4}>
            <ProjectCard
              key={project.title + "Card"}
              title={project.title}
              subheader={project.subheader}
              image={project.image ? project.image : "X"}
              content={project.content}
              githubLink={project.githubLink ? project.githubLink : ""}
              projectLink={project.projectLink}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
