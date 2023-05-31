import React, { Component } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

class Chat extends Component {
  state = {
    messages: [],
    message: '',
  };

  handleSend = () => {
    const { message } = this.state;

    if (message.trim() === '') {
      return;
    }

    // Send the message to the server.

    // Update the state with the new message.
    this.setState({
      messages: [...this.state.messages, message],
      message: '',
    });
  };

  render() {
    return (
      <Container className="d-flex justify-content-center">
        <h1>Community Chat</h1>
        <Container className="message-container">
          <ul>
            {this.state.messages.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        </Container>
        <Container className="input-container">
          <Form onSubmit={this.handleSend}>
            <Row>
              <Col>
                <input
                  type="text"
                  name="message"
                  placeholder="Enter your message"
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                />
              </Col>
              <Col>
                <Button type="submit">Send</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default Chat;
