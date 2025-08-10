import React from 'react';
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";
import ProjectCard from './ProjectCard';

const Project = ({ projects }) => {
  return (
    console.log('projects:::',projects),
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {projects.heading}
          </h2>
          <Row>
            {
              projects.data.map((data, index) => {
                return <ProjectCard key={index} project={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Project;
