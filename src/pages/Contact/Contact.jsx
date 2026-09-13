import Divider2 from '../../componnent/divider/Divider2';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container py-5">

        <h1 className="text-center text-secondary">
          Contact Me
        </h1>

        <Divider2 />

        <form className="mx-auto mt-5" style={{ maxWidth: '700px' }}>

          <div className="mb-4">
            <label className="form-label">Full name</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Phone number</label>
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Message</label>
            <textarea
              className="form-control border-0 border-bottom rounded-0"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="btn send-bt">
            Send
          </button>

        </form>
      </div>
    </section>
  );
}