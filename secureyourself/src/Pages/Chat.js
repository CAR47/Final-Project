import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Chat Page</h1>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <div className="message-container">
              {messages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <Form onSubmit={handleMessageSubmit}>
            <Form.Group controlId="newMessage">
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </Form.Group><br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;
