import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // optional for styling

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <h1>SAT Assistant</h1>
      </header>

      <div className="hero">
        <h2>Your Partner in SAT Success</h2>
        <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" className="gif" alt="Animated GIF representing SAT success" />
      </div>

      <div className="content">
        <div className="section">
          <h2>Welcome to SAT Assistant</h2>
          <p>Prepare for your SAT exams with our tailored practice test sessions and expert tips and tricks for solving them. We're here to help you succeed and reach your academic goals.</p>
          <Link to="/practice" className="animated-button">Get Started</Link>
        </div>

        <div id="services" className="section">
          <h2>Our Services</h2>
          <div className="service-container">
            <div className="service">
              <div className="service-icon"><i className="fas fa-pencil-alt"></i></div>
              <h3>Practice Test Sessions</h3>
              <p>Take realistic SAT practice tests to prepare for the exam day. Our tests simulate the real SAT environment, helping you get accustomed to the test format and timing.</p>
              <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Practice Tests GIF" className="gif" />
            </div>
            <div className="service">
              <div className="service-icon"><i className="fas fa-lightbulb"></i></div>
              <h3>Tips and Tricks</h3>
              <p>Get expert advice and strategies for tackling the SAT effectively. Learn the best approaches to solving different types of questions and managing your time during the test.</p>
              <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Tips and Tricks GIF" className="gif" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 SAT Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
