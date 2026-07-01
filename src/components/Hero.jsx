import { Button } from "react-bootstrap";
import { FiDownload, FiArrowRight } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="vh-100 d-flex align-items-center bg-dark text-white">

            <div className="container">

                <div className="row align-items-center">

                    {/* TEXTE */}
                    <div className="col-lg-6 text-center text-lg-start">

                        <p className="text-info mb-2">
                            Bonjour, je suis
                        </p>

                        <h1 className="display-3 fw-bold">
                            Moustapha
                            <span className="d-block text-info">
                                DRAME
                            </span>
                        </h1>

                        <h4 className="fw-semibold mt-3">
                            Ingénieur Génie Logiciel
                        </h4>

                        <p className="text-secondary mt-3">
                            Développeur Full Stack spécialisé en
                            Data Science et Intelligence Artificielle.
                            Je conçois des applications web modernes,
                            performantes et intelligentes.
                        </p>

                        {/* BOUTONS */}
                        <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">

                            <Button variant="info" className="d-flex align-items-center gap-2 px-4 py-2">
                                <FiDownload />
                                CV
                            </Button>

                            <Button variant="outline-info" className="d-flex align-items-center gap-2 px-4 py-2">
                                <FiArrowRight />
                                Projets
                            </Button>

                        </div>

                    </div>

                    {/* IMAGE */}
                    <div className="col-lg-6 text-center mt-5 mt-lg-0">

                        <img
                            src="/images/moustaphaDrame.jpg"
                            alt="profil"
                            className="img-fluid rounded-circle shadow-lg border border-info"
                            style={{
                                width: "320px",
                                height: "320px",
                                objectFit: "cover"
                            }}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}