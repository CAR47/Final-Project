import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/style.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/messages');
        const messageData = response.data;
        setMessages(messageData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/messages', {
          text: newMessage,
          likes: 0,
        });
        const newMessageData = response.data;
        setMessages([...messages, newMessageData]);
        setNewMessage('');
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  const handleLike = async (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);

    try {
      await axios.put(`http://localhost:5000/messages/${updatedMessages[index].id}`, updatedMessages[index]);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleDelete = async (index) => {
    const messageToDelete = messages[index];
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);

    try {
      await axios.delete(`http://localhost:5000/messages/${messageToDelete.id}`);
    } catch (error) {
      console.log('Error:', error);
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
            <div className="message-container" style={{ border: '1px solid black', minHeight: '200px', padding: '10px' }}>
              {messages.map((message, index) => (
                <div key={index}>
                  <div>{message.text}</div>
                  <div>
                    Likes: {message.likes}
                    <Button variant="outline-primary" size="sm" onClick={() => handleLike(index)} className="small">Like</Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)} className="small">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col><br />
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