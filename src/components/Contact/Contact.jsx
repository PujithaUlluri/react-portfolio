import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-card">
        <div className="contact-item">
          <span>📧</span>
          <a href="mailto:pujithaulluri77@email.com">
            pujithaulluri77@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span>📞</span>
          <a href="tel:+918096835659">
            +91 80968 35659
          </a>
        </div>

        <div className="contact-item">
          <span>📍</span>
          <p>   India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;