import { Button } from "react-bootstrap";
import {
    FiDownload,
    FiArrowRight,
    FiGithub,
    FiLinkedin,
    FiCpu
} from "react-icons/fi";


export default function Hero() {


    return (

        <section
            id="home"

            className="

d-flex
align-items-center
bg-dark
text-white
position-relative
overflow-hidden
"

        >


            {/* Background futuriste */}

            <div

                className="
position-absolute
top-0
end-0
rounded-circle
bg-info
opacity-25
"

                style={{

                    width:"550px",

                    height:"550px",

                    filter:"blur(150px)"

                }}

            >


            </div>





            <div className="container position-relative">


                <div className="row align-items-center g-5">



                    {/* PARTIE TEXTE */}

                    <div

                        className="
col-lg-7
text-center
text-lg-start
"

                    >



<span

    className="
badge
bg-info
text-dark
px-3
py-2
mb-3
"

>

<FiCpu/>

 Doctorant en Informatique

</span>





                        <h1

                            className="
display-2
fw-bold
"

                        >

                            Moustapha

                            <span

                                className="
d-block
text-info
"

                            >

DRAME

</span>


                        </h1>





                        <h2

                            className="
fw-semibold
mt-3
"

                        >

                            Ingénieur Génie Logiciel

                        </h2>






                        <h3

                            className="
text-info
fs-4
"

                        >

                            Intelligence Artificielle

                            <br/>

                            Données & Connaissances

                            <br/>

                            Santé numérique

                        </h3>






                        <p

                            className="
lead
text-secondary
mt-4
"

                        >


                            Doctorant en Informatique à l’Université Assane
                            Seck de Ziguinchor au sein du Laboratoire
                            d’Informatique et d’Ingénierie pour l’Innovation.


                            <br/><br/>


                            Mes recherches portent sur une intelligence
                            artificielle frugale, explicable et inclusive
                            pour le dépistage précoce du diabète et
                            l’aide à la décision clinique en Afrique de l’Ouest.


                        </p>








                        <div

                            className="
d-flex
flex-wrap
gap-3
mt-5
justify-content-center
justify-content-lg-start
"

                        >


                            <Button

                                variant="info"

                                size="lg"

                                className="
fw-bold
d-flex
align-items-center
gap-2
"

                                href="/documents/CV_Moustapha_DRAME.pdf"

                            >

                                <FiDownload/>

                                Mon CV

                            </Button>







                            <Button

                                variant="outline-light"

                                size="lg"

                                className="
d-flex
align-items-center
gap-2
"

                                href="#research"

                            >

                                Recherche

                                <FiArrowRight/>

                            </Button>



                        </div>







                        {/* Réseaux */}

                        <div

                            className="
d-flex
gap-4
mt-5
justify-content-center
justify-content-lg-start
"

                        >


                            <a

                                href="#"

                                className="
text-white
fs-3
"

                            >

                                <FiGithub/>

                            </a>




                            <a

                                href="#"

                                className="
text-white
fs-3
"

                            >

                                <FiLinkedin/>

                            </a>



                        </div>




                    </div>









                    {/* IMAGE */}

                    <div

                        className="
col-lg-5
text-center
"

                    >



                        <div

                            className="
position-relative
d-inline-block
"

                        >



                            <div

                                className="
position-absolute
top-50
start-50
translate-middle
rounded-circle
bg-info
opacity-25
"

                                style={{

                                    width:"400px",

                                    height:"400px"

                                }}

                            >

                            </div>






                            <img


                                src="/images/moustaphaDrame.jpg"


                                alt="Moustapha DRAME"


                                className="
rounded-circle
shadow-lg
border
border-4
border-info
position-relative
"

                                style={{

                                    width:"340px",

                                    height:"340px",

                                    objectFit:"cover"

                                }}


                            />





                        </div>



                    </div>




                </div>



            </div>



        </section>


    );

}