import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SkillCard = ({ title, skills }) => {
  // Split skills into groups of three for layout
  const skillRows = skills.reduce((rows, skill, idx) => {
    if (idx % 3 === 0) rows.push([]);
    rows[rows.length - 1].push(skill);
    return rows;
  }, []);

  return (
    <Col md={6} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {skillRows.map((skillRow, rowIndex) => (
            <Row key={rowIndex} className="mb-2">
              {skillRow.map((skill, skillIndex) => (
                <Col key={skillIndex} xs={4} className="d-flex align-items-center">
                  <span className="bullet-point">&#8226;</span> <span className="ms-1">{skill}</span>
                </Col>
              ))}
            </Row>
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};

const Skills = () => {
  const frontendTechnologies = ["React.js", "Next.js", "Angular", "Tailwind", "Bootstrap"];
  const backendTechnologies = ["Node.js", "Nest.js", "AWS"];
  const databases = ["DynamoDB", "Firestore", "Redis", "Postgres", "MySQL"];
  const programmingLanguages = ["Javascript", "Typescript", "Dart", "Python"];
  const versionControl = ["Git", "GitHub", "Bitbucket", "GitLab", "Trello", "Jira"];
  const deploymentAndContainerization = ["AWS", "Docker", "Jenkins", "CI/CD", "Dokku"];
  const otherTechnologies = ["GraphQL", "SendGrid", "Stripe API", "InfoBip API", "GCP", "Passport JS", "Puppeteer"];

  return (
    <Container className="mt-5">
      <Row>
        <SkillCard title="Frontend Technologies" skills={frontendTechnologies} />
        <SkillCard title="Backend Technologies" skills={backendTechnologies} />
      </Row>
      <Row>
        <SkillCard title="Databases" skills={databases} />
        <SkillCard title="Programming Languages" skills={programmingLanguages} />
      </Row>
      <Row>
        <SkillCard title="Version Control & Project Tracking" skills={versionControl} />
        <SkillCard title="Deployment & Containerization" skills={deploymentAndContainerization} />
      </Row>
      <Row>
        <SkillCard title="Other Technologies" skills={otherTechnologies} />
      </Row>
    </Container>
  );
};

export default Skills;
