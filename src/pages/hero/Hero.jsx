import './Hero.css'

export default function Hero() {
    return (
        <section className="hero d-flex flex-column justify-content-center align-items-center">
            <img
                src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
                alt=""
            />

            <h1 className='text-white pt-3'>Start Bootstrap</h1>
            <div className="divider">
                <div className="line"></div>
                <span>★</span>
                <div className="line"></div>
            </div>
            <h5 className='text-white pt-2'>Graphic Artist - Web Designer - Illustrator</h5>
        </section>
    )
}