import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FiLink } from 'react-icons/fi'; // Import the hyperlink icon

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-3">
            {data.company}
            <a href={data.companyUrl} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', fontSize: '20px' }}>
              <FiLink />
            </a>
          </Card.Title>
          <Card.Text>
            <p className="lead">{data.role}</p>
            <p>{data.date}</p>
            {data.description && (
              <>
                <hr />
                <ul>
                  {data.description.split('. ').map((point, index) => (
                    point && <li key={index}>{point}.</li>
                  ))}
                </ul>
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ExperienceCard;