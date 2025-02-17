
import ConexionAPI from "../../../ConexionAPI";
import "./Equipos.css"
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

const Equipos = () => {
    return (
        <section className="section">
            <article>
            <button className="boton front-end">FRONT END</button>
            <ul className="lista__videos">
                <li>
                    <figure className="contenedor__videos front-end">
                        <img className="imagen front-end"  src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos">
                                <span className="icono"><RiDeleteBin2Line /></span>
                                <p>Borrar</p>
                            </button>
                            <button className="editar__videos__elementos">
                                <span className="icono"><AiOutlineEdit /></span>
                                Editar
                            </button>
                        </div>
                    </figure>
                </li> 
                <li>
                    <figure className="contenedor__videos front-end"> 
                        <img className="imagen front-end" src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos">
                                <span className="icono"><RiDeleteBin2Line />
                                </span><p>Borrar</p>
                            </button>
                            <button className="editar__videos__elementos">
                                <span className="icono"><AiOutlineEdit /></span>
                                <p>Editar</p>
                            </button>
                        </div>
                    </figure> 
                </li> 
                <li>
                    <figure className="contenedor__videos front-end">
                        <img className="imagen front-end" src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos"><span className="icono"><RiDeleteBin2Line /></span><p>Borrar</p></button>
                            <button className="editar__videos__elementos"><span className="icono"><AiOutlineEdit /></span><p>Editar</p></button>
                        </div>
                    </figure>
                </li> 
            </ul>
            </article>
            <article>
            <button className="boton back-end">BACK END</button>
            <ul className="lista__videos">
                <li>
                    <figure className="contenedor__videos back-end">
                        <img className="imagen back-end"  src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos">
                                <span className="icono"><RiDeleteBin2Line /></span>
                                <p>Borrar</p>
                            </button>
                            <button className="editar__videos__elementos">
                                <span className="icono"><AiOutlineEdit /></span>
                                <p>Editar</p>
                            </button>
                        </div>
                    </figure>
                </li> 
                <li>
                    <figure className="contenedor__videos back-end"> 
                        <img className="imagen back-end" src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos">
                                <span className="icono"><RiDeleteBin2Line />
                                </span><p>Borrar</p>
                            </button>
                            <button className="editar__videos__elementos">
                                <span className="icono"><AiOutlineEdit /></span>
                                <p>Editar</p>
                            </button>
                        </div>
                    </figure> 
                </li> 
                <li>
                    <figure className="contenedor__videos back-end">
                        <img className="imagen back-end" src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos"><span className="icono"><RiDeleteBin2Line /></span><p>Borrar</p></button>
                            <button className="editar__videos__elementos"><span className="icono"><AiOutlineEdit /></span><p>Editar</p></button>
                        </div>
                    </figure>
                </li> 
            </ul>
            </article>
            <article>
            <button className="boton innovacion-gestion">INNOVACION Y GESTION</button>
            <ul className="lista__videos">
                <li>
                    <figure className="contenedor__videos innovacion-gestion">
                        <img className="imagen innovacion-gestion"  src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos">
                                <span className="icono"><RiDeleteBin2Line /></span>
                                <p>Borrar</p>
                            </button>
                            <button className="editar__videos__elementos">
                                <span className="icono"><AiOutlineEdit /></span>
                                <p>Editar</p>
                            </button>
                        </div>
                    </figure>
                </li> 
                <li>
                    <figure className="contenedor__videos innovacion-gestion"> 
                        <img className="imagen innovacion-gestion" src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos">
                                <span className="icono"><RiDeleteBin2Line />
                                </span><p>Borrar</p>
                            </button>
                            <button className="editar__videos__elementos">
                                <span className="icono"><AiOutlineEdit /></span>
                                <p>Editar</p>
                            </button>
                        </div>
                    </figure> 
                </li> 
                <li>
                    <figure className="contenedor__videos innovacion-gestion">
                        <img className="imagen innovacion-gestion" src="https://www.youtube.com/embed/QjOWz9avkg8"/>
                        <div className="editar__video">
                            <button className="editar__videos__elementos"><span className="icono"><RiDeleteBin2Line /></span><p>Borrar</p></button>
                            <button className="editar__videos__elementos"><span className="icono"><AiOutlineEdit /></span><p>Editar</p></button>
                        </div>
                    </figure>
                </li> 
            </ul>
            </article>
        </section>
    )
} 

export default Equipos;