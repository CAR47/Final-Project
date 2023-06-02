import React from 'react';
import '../Style/style.css';
import { Container, Row, Col } from 'react-bootstrap';

const AdwareInfoPage = () => {
  return (
    <div className='About'>
    <Container>
      <Row>
        <Col>
          <h1>Adware</h1>
          <p>
            Adware, short for advertising-supported software, is a type of malware that displays unwanted advertisements on a user's computer or mobile device. It is designed to generate revenue for the attacker by delivering targeted ads or redirecting users to specific websites.
          </p>
          <h2>How Adware Works</h2>
          <p>
            Adware typically follows these steps:
          </p>
          <ol>
            <li>Infection: Adware can be installed alongside legitimate software, often without the user's consent, through software bundling or deceptive advertising.</li>
            <li>Advertisement Display: Once installed, adware displays advertisements in various forms, such as pop-up windows, banners, or injected ads within web pages.</li>
            <li>Data Collection: Adware may collect user information, browsing habits, or even personal data to deliver targeted advertisements.</li>
            <li>Browser Hijacking: Some adware can modify browser settings, change the default search engine, or redirect the user to specific websites.</li>
          </ol>
          <h2>Preventing Adware Infections</h2>
          <p>
            To protect against adware, consider the following preventive measures:
          </p>
          <ul>
            <li>Download software only from reputable sources.</li>
            <li>Read and understand the terms and conditions before installing software.</li>
            <li>Pay attention to the installation process and opt-out of any additional software or toolbar installations.</li>
            <li>Keep your operating system, web browsers, and security software up to date.</li>
            <li>Use ad-blockers and browser extensions that provide additional security against adware.</li>
            <li>Be cautious when clicking on advertisements or visiting unfamiliar websites.</li>
          </ul>
          <h2>Removing Adware</h2>
          <p>
            If your device is infected with adware, you can take the following steps to remove it:
          </p>
          <ol>
            <li>Scan your device with reputable antivirus or antimalware software.</li>
            <li>Uninstall any suspicious or unwanted programs from your device.</li>
            <li>Reset your web browsers to their default settings to remove any adware-related extensions or modifications.</li>
            <li>Clear your browser cache and cookies.</li>
          </ol>
          <p>
            If the adware infection persists, seek professional assistance from cybersecurity experts.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default AdwareInfoPage;
