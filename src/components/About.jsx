export default function About({ content }) {
    const aboutText = content?.aboutText || "Doctorant en Informatique et ingénieur en génie logiciel, je m'intéresse à l'intelligence artificielle, aux systèmes intelligents et aux architectures logicielles. Je développe des solutions numériques centrées sur des problématiques concrètes.";

    return (
        <section id="about" className="content-section about-section">
            <div className="section-heading">
                <span className="section-kicker">01 / À PROPOS</span>
                <h2>Technologie avec<br /><span>un objectif clair.</span></h2>
            </div>
            <div className="about-content">
                <p className="about-intro">Ingénieur logiciel et chercheur, je relie développement, intelligence artificielle et science des données pour concevoir des outils utiles, accessibles et durables.</p>
                <p className="about-description">{aboutText}</p>
                <p className="about-description">Aujourd’hui, mes recherches portent notamment sur une intelligence artificielle frugale, explicable et inclusive pour le dépistage précoce du diabète et l’aide à la décision clinique en Afrique de l’Ouest.</p>
                <a className="text-link" href="#experience">Découvrir mon parcours <span>↗</span></a>
            </div>
            <div className="about-facts">
                <div><strong>01</strong><span>Recherche en informatique</span></div>
                <div><strong>02</strong><span>Génie logiciel &amp; développement</span></div>
                <div><strong>03</strong><span>IA appliquée à la santé</span></div>
            </div>
        </section>
    );
}
