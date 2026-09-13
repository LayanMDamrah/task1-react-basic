import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-white text-center py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h4>LOCATION</h4>

            <p>
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="col-3">
            <h4>AROUND THE WEB</h4>

            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white">
                Facebook
              </a>

              <a href="#" className="text-white">
                LinkedIn
              </a>

              <a href="#" className="text-white">
                GitHub
              </a>
            </div>
          </div>

          <div className="col-5">
            <h4>ABOUT FREELANCER</h4>

            <div className="d-flex justify-content-center align-items-center">
              <p className="mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created by
              </p>

              <a href="#" className="boot ms-1">
                Start Bootstrap
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}