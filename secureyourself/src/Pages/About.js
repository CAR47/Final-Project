import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '../Component/Cards';
import iHassaan from '../Images/Hassaan.jpeg';
import iAshfaq from '../Images/Ashfaq.jpeg';
import iMudassar from '../Images/Mudassar.jpeg'
import img from '../Images/course-graphql.jpg';

const About = () => {

  const profiles = [
    { name: "Muhammad Hassaan Tahir", info: "MERN Stack Developer", imag: {iHassaan} },
    { name: "Ashfaq Ramzan", info: "MERN Stack Developer", imag: {iAshfaq} },
    { name: "Abdul Hanan", info: "MERN Stack Developer", imag: {img} },
    { name: "Mudassir Nazar", info: "MERN Stack Developer", imag: {iMudassar} },
    { name: "Muhammad Adnan", info: "MERN Stack Developer", imag: {img} },
]

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4 aboutclass">About Us</h1><br/>
        <p>Welcome to " Secure Yourself ", your ultimate source for all things cyber security. We are dedicated to providing you with up-to-date information on security threats, highlighting the importance of safeguarding your digital assets, and showcasing the remarkable efforts of our team in creating this platform</p><br/>
        <p>In today's interconnected world, the digital landscape is constantly evolving, bringing both incredible opportunities and unprecedented risks. Our mission is to empower individuals and organizations with the knowledge and tools necessary to navigate this complex cyber environment securely.</p><br/>
        <p>At " Secure Yourself ", we understand that staying informed about the latest security threats is paramount. Our team of seasoned experts continuously monitors the ever-changing cyber landscape, analyzing emerging risks and sharing actionable insights to keep you one step ahead of potential threats. We strive to deliver accurate and comprehensive information on a wide range of cyber security topics, ensuring that you have the resources to protect yourself, your data, and your online presence.</p><br/>
        <p>Security is not just an option; it's a necessity. We are passionate about emphasizing the importance of cyber security and raising awareness about the potential consequences of overlooking it. Through our articles, guides, and educational materials, we aim to empower individuals, small businesses, and large enterprises alike to take proactive steps towards securing their digital lives. By equipping you with the knowledge and tools to identify vulnerabilities, implement robust security measures, and respond effectively to incidents, we strive to create a safer online environment for everyone.</p><br/>
        <p>None of this would be possible without the dedicated and talented individuals who make up our team. Our experts bring together a wealth of experience, diverse backgrounds, and a shared commitment to protecting the digital world. From security researchers and analysts to ethical hackers and industry professionals, our team works tirelessly to deliver valuable content and resources that meet the highest standards of quality and accuracy. We deeply appreciate their tireless efforts and their unwavering dedication to making " Secure Yourself " a trusted source of cyber security information.</p><br/>
        <p>We invite you to explore " Secure Yourself " and take advantage of the wealth of knowledge available to you. Whether you are seeking guidance on securing your personal devices, understanding emerging threats, or implementing best practices for your organization, we have the information you need. Together, let's build a more secure digital future.</p><br/>
        <p>Thank you for choosing " Secure Yourself ", your partner in cyber security.</p><br />
        <h3>The Secure Yourself Team</h3>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          {
            profiles.map((profile) => {
              return <Cards name={profile.name} info={profile.info} img={iHassaan}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default About;
