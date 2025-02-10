
import ConexionAPI from "../../../ConexionAPI";
import "./Equipos.css"

const Equipos = () => {
    return (
        <section className="section">
            <article>
            <button className="boton__front-end">FRONT END</button>
            <ul className="lista__videos">
                <li>
                    <iframe className="contenedor__videos" width="100%" height="100%" 
                    src="https://www.youtube.com/embed/QjOWz9avkg8">
                    </iframe>
                </li> 
                <li>
                    <iframe className="contenedor__videos" width="100%" height="100%"  
                    src="https://www.youtube.com/embed/QjOWz9avkg8">
                    </iframe>
                </li> 
                <li>
                    <iframe className="contenedor__videos" width="100%" height="100%"
                    src="https://www.youtube.com/embed/QjOWz9avkg8">
                    </iframe>
                </li> 
            </ul>
            </article>
        </section>
    )
} 

export default Equipos;