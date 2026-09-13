import './Portfolio.css'
export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container pt-5">
        <h1 className="text-center title">Portfolio</h1>

        <div className="row justify-content-center py-5 ">
          <img className="col-4" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" alt="" />
          <img className="col-4" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" alt="" />
          <img className="col-4" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" alt="" />

        </div>

        <div className="row justify-content-center py-2">
          <img className="col-4" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" alt="" />
          <img className="col-4" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" alt="" />
          <img className="col-4" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" alt="" />

        </div>
      </div>
    </section>
  );
}