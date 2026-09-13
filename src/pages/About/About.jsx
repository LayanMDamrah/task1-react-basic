import Divider from '../../componnent/divider/Divider';
import './About.css';

export default function About() {
  return (
    <section
      id="about"
      className="about-bg py-5 mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="text-white text-center">About</h1>
      <Divider />
      <div className='para d-flex container px-5 text-white'>
        <p className='col-6'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='col-6'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>
      <button  className='down-bt'>
        Free Download!
      </button>

    </section>
  );
}