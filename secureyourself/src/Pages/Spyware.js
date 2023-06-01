import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SpywareInfoPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Spyware</h1>
          <p>
            Spyware is a type of malicious software that secretly monitors and gathers information about a user's activities on a computer or mobile device. It is designed to collect sensitive data without the user's knowledge or consent.
          </p>
          <h2>How Spyware Works</h2>
          <p>
            Spyware typically operates in the following manner:
          </p>
          <ol>
            <li>Infection: Spyware can be unknowingly installed through malicious email attachments, software downloads, or exploiting vulnerabilities in the operating system or applications.</li>
            <li>Data Collection: Once installed, spyware silently tracks the user's activities, including keystrokes, browsing history, login credentials, and personal information.</li>
            <li>Information Transmission: The collected data is transmitted to the attacker's server for unauthorized use, such as identity theft, fraud, or unauthorized access to sensitive information.</li>
            <li>System Impact: Spyware can significantly impact system performance, causing slow operation, frequent crashes, or instability.</li>
          </ol>
          <h2>Preventing Spyware Infections</h2>
          <p>
            To protect against spyware, consider implementing the following preventive measures:
          </p>
          <ul>
            <li>Install reputable antivirus and antimalware software and keep them up to date.</li>
            <li>Be cautious when opening email attachments or downloading files from untrusted sources.</li>
            <li>Avoid clicking on suspicious links or pop-up advertisements.</li>
            <li>Regularly update your operating system and applications to patch security vulnerabilities.</li>
            <li>Use strong, unique passwords and enable two-factor authentication where available.</li>
            <li>Exercise caution when sharing personal information online and only provide it on secure websites.</li>
          </ul>
          <h2>Removing Spyware</h2>
          <p>
            If you suspect your device is infected with spyware, you can take the following steps to remove it:
          </p>
          <ol>
            <li>Run a full scan using reputable antivirus or antimalware software.</li>
            <li>Disconnect from the internet to prevent further data transmission.</li>
            <li>Follow the software's instructions to remove any detected spyware.</li>
            <li>Change passwords for your online accounts to ensure unauthorized access is blocked.</li>
          </ol>
          <p>
            If the spyware infection persists, seek professional assistance from cybersecurity experts.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SpywareInfoPage;
