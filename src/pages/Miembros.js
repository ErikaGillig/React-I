import react from "react";
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer.js';

const MiembrosPage =(props) => {
    return(
        <>
        <Header />
        <Nav />
        <div className="holder">
        <div className="titulomiembro"> <h1> Conoce a las chicas!</h1> </div>
        <div className="card">
                <img src="img/Ahri.jpg" alt="Photo Ahri"/>
                <h4 className="tittle">Ahri, The leader!</h4>
                <p> Líder, fundadora y vocalista principal de K/DA, Ahri deslumbra a los fans con su carisma y confianza.
                 Ella es la pieza central del grupo. De carácter tranquilo, defiende la libertad de expresión y la naturalidad, tanto la 
                suya como la de sus compañeras. Ahri se enorgullece de descubrir talentos nuevos y de ayudarles a alcanzar su máximo potencial.
                </p>
            </div>
        </div>
         <Footer />
         </>
    )
}

export default MiembrosPage