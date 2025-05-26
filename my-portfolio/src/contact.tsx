// src/components/Contact.tsx
import './contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <p><strong>Email:</strong> martinkioko041@gmail.com</p>
          <p><strong>Phone:</strong> 0703499102 / 0714421197</p>
          <p><strong>Location:</strong> P.O. Box 90420-80100, Mombasa, Kenya</p>
          <div className="social-links">
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Naretl/wall-of-developers/tree/martin-kioko/engineering-division" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;