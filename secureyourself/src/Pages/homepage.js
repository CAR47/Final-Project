import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/style.css';

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
    {
      name: 'Adware',
      description: 'Adware is software that displays unwanted (and sometimes irritating) pop-up adverts which can appear on your computer or mobile device..',
      image: 'https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/malware-img-07.jpg',
    },
    {
      name: 'Spyware',
      description: 'Spyware does just what it says. It spies on what youre doing at your computer. ',
      image: 'data:image/jpeg;base64,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',
    },
    // Add more virus data objects as needed
  ];

  return (
    <div className="homeBg">
      <div className="banner bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4">
            What is a Computer Virus and How Can I Protect My Computer?
          </h1>
        </div>
      </div><br /><br />
      <Container >
        <div >
          <h1>What is a computer virus?</h1><br/>
          <p>A computer virus is a malicious piece of computer code designed to spread from device to device. A subset of malware, these self-copying threats are usually designed to damage a device or steal data.</p>
          <p>     Think of a biological virus – the kind that makes you sick. It’s persistently nasty, keeps you from functioning normally, and often requires something powerful to get rid of it. A computer virus is very similar. Designed to replicate relentlessly, computer viruses infect your programs and files, alter the way your computer operates or stop it from working altogether.</p>
          <h1>What does a computer virus do?</h1><br/>
          <p>
            Some computer viruses are programmed to harm your computer by damaging programs, deleting files, or reformatting the hard drive. Others simply replicate themselves or flood a network with traffic, making it impossible to perform any internet activity. Even less harmful computer viruses can significantly disrupt your system’s performance, sapping computer memory and causing frequent computer crashes.
          </p>
          <p>
            In 2013, the botnet virus Gameover ZueS was discovered to use peer-to-peer downloading sites to distribute ransomware and commit banking fraud. While tens of thousands of computer viruses still roam the internet, they have diversified their methods and are now joined by a number of malware variants like worms, Trojans, and ransomware.
          </p>
          <h1>
            How does a computer get a virus?
          </h1><br/>
          <p>
            Even if you’re careful, you can pick up computer viruses through normal Web activities like:
            <ul>
              <li>Sharing music, files, or photos with other users</li>
              <li>Visiting an infected website</li>
              <li>Opening spam email or an email attachment</li>
              <li>Downloading free games, toolbars, media players and other system utilities</li>
              <li>Installing mainstream software applications without thoroughly reading license agreements</li>
            </ul>
          </p>
          <h1>
            How do computer viruses spread?
          </h1><br/>
          <p>
            Viruses can be spread several ways, including via networks, discs, email attachments or external storage devices like USB sticks. Since connections between devices were once far more limited than today, early computer viruses were commonly spread through infected floppy disks.
          </p>
          <p>
            Today, links between internet-enabled devices are for common, providing ample opportunities for viruses to spread. According to the U.S. Cybersecurity and Infrastructure Security Agency, infected email attachments are the most common means of circulating computer viruses. Most, but not all, computer viruses require a user to take some form of action, like enabling “macros” or clicking a link, to spread.
          </p>
          <h1>
            What are the symptoms of a computer virus?
          </h1><br/>
          <p>
            Your computer may be infected if you recognize any of these malware symptoms:
            <ul>
              <li>
                Slow computer performance
              </li>
              <li>
                Erratic computer behavior
              </li>
              <li>
                Unexplained data loss
              </li>
              <li>
                Frequent computer crashes
              </li>
            </ul>
          </p>
          <h1>
            How are computer viruses removed?
          </h1><br/>
          <p>
            Antiviruses have made great progress in being able to identify and prevent the spread of computer viruses. When a device does become infected, though, installing an antivirus solution is still your best bet for removing it. Once installed, most software will conduct a “scan” for the malicious program. Once located, the antivirus will present options for its removal. If this is not something that can be done automatically, some security vendors offer a technician’s assistance in removing the virus free of charge.
          </p>
          <h1>
            Examples of computer viruses
          </h1><br/>
          <p>
            In 2013, the botnet virus Gameover ZueS was discovered to use peer-to-peer downloading sites to distribute ransomware and commit banking fraud. While tens of thousands of computer viruses still roam the internet, they have diversified their methods and are now joined by several malware variants like:
            <ul>
              <li>
                Worms - A worm is a type of virus that, unlike traditional viruses, usually does not require the action of a user to spread from device to device.
              </li>
              <li>
              Trojans - As in the myth, a Trojan is a virus that hides within a legitimate-seeming program to spread itself across networks or devices.
              </li>
              <li>
              Ransomware - Ransomware is a type of malware that encrypts a user’s files and demands a ransom for its return. Ransomware can be, but isn’t necessarily, spread through computer viruses.
              </li>
            </ul>
          </p>
          <h1>
          Computer virus protection
          </h1><br/>
          <p>
          When you arm yourself with information and resources, you’re wiser about computer security threats and less vulnerable to threat tactics. Take these steps to safeguard your PC with the best computer virus protection: 
          <ul>
            <li>
            Use antivirus protection and a firewall
            </li>
            <li>
            Get antispyware software
            </li>
            <li>
            Always keep your antivirus protection and antispyware software up-to-date
            </li>
            <li>
            Increase your browser security settings
            </li>
            <li>
            Avoid questionable Websites
            </li>
            <li>
            Only download software from sites you trust.
            </li>
            <li>
            Carefully evaluate free software and file-sharing applications before downloading them. 
            </li>
            <li>
            Don't open messages from unknown senders
            </li>
            <li>
            Immediately delete messages you suspect to be spam
            </li>
          </ul>
          An unprotected computer is like an open door for computer viruses. Firewalls monitor Internet traffic in and out of your computer and hide your PC from online scammers looking for easy targets. Products like Webroot Internet Security Complete and Webroot Antivirus provide complete protection from the two most dangerous threats on the Internet – spyware and computer viruses. They prevent viruses from entering your computer, stand guard at every possible entrance of your computer and fend off any computer virus that tries to open, even the most damaging and devious strains.  
          </p>
          <p>
          While free antivirus downloads are available, they just can't offer the computer virus help you need to keep up with the continuous onslaught of new strains. Previously undetected forms of polymorphic malware can often do the most damage, so it’s critical to have up-to-the-minute, guaranteed antivirus protection.
          </p>
        </div>
      </Container>
      <Container>
        <h1>Computer Virus Details</h1><br /><br />
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
