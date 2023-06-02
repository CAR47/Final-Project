import React from 'react';
import '../Style/style.css';
import { Container, Row, Col } from 'react-bootstrap';

const RansomwareInfoPage = () => {
  return (
    <div className='About'>
      <Container>
        <Row>
          <Col>
            <h1>Ransomware</h1>
            <p>
              Ransomware is a type of malware that encrypts a victim's files or locks their computer, rendering the data inaccessible until a ransom is paid to the attacker. It is a significant cybersecurity threat affecting individuals, businesses, and organizations worldwide.
            </p>
            <h2>How Ransomware Works</h2>
            <p>
              Ransomware typically follows these steps:
            </p>
            <ol>
              <li>Infection: The victim's system gets infected through malicious email attachments, infected websites, or vulnerabilities in software.</li>
              <li>Encryption: The ransomware encrypts files, making them inaccessible without the decryption key held by the attacker.</li>
              <li>Ransom Demand: The attacker demands a ransom payment, usually in cryptocurrency, in exchange for the decryption key.</li>
              <li>Payment and Decryption: If the victim pays the ransom, they receive the decryption key to regain access to their files.</li>
            </ol>
            <h2>Preventing Ransomware Attacks</h2>
            <p>
              To protect against ransomware, consider the following preventive measures:
            </p>
            <ul>
              <li>Regularly backup important files to offline or cloud storage.</li>
              <li>Keep your operating system and software up to date with the latest security patches.</li>
              <li>Be cautious when opening email attachments or clicking on suspicious links.</li>
              <li>Use reputable antivirus and antimalware software.</li>
              <li>Enable firewalls and use intrusion detection and prevention systems.</li>
              <li>Educate yourself and your organization about ransomware and cybersecurity best practices.</li>
            </ul>
            <h2>Responding to a Ransomware Attack</h2>
            <p>
              In the unfortunate event of a ransomware attack, consider the following steps:
            </p>
            <ol>
              <li>Isolate the infected system from the network to prevent further spread.</li>
              <li>Report the incident to law enforcement agencies and your organization's IT department.</li>
              <li>Do not pay the ransom immediately. Evaluate alternative options and seek professional advice.</li>
              <li>Restore your files from backups if available and clean the infected system.</li>
              <li>Implement additional security measures to prevent future attacks.</li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RansomwareInfoPage;
