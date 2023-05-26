import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  const virusData = [
    {
      name: 'Malware',
      description: 'Malicious software designed to harm a computer system.',
      image: 'https://venturebeat.com/wp-content/uploads/2022/06/GettyImages-1353240272-e1656010744693.jpg?w=1200&strip=all',
    },
    {
      name: 'Ransomware',
      description: 'A type of malware that encrypts files and demands a ransom to restore access.',
      image: 'https://www.securitymagazine.com/ext/resources/secenews/2018/ransomware-cyber.jpg?1519933031',
    },
    // Add more virus data objects as needed
  ];

  return (
    <div>
    <div className="banner bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4">
            What is a Computer Virus and How Can I Protect My Computer?
          </h1>
        </div>
      </div>
    <Container>
      <h1>Computer Virus Details</h1>
      <Row>
        {virusData.map((virus, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={virus.image} alt={virus.name} />
              <Card.Body>
                <Card.Title>{virus.name}</Card.Title>
                <Card.Text>{virus.description}</Card.Text>
                <a href={`/virus/${virus.name}`} className="btn btn-primary">Learn More</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default HomePage;
