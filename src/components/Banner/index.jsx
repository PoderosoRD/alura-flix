import "./Banner.css"

const Banner = () => {
    return (
        <banner className="banner">
            <img className="banner__imagen"src="./img/banner.png" alt="Banner"/>
            <div className="banner__overlay"></div>
            <figure className="banner__figure">
                <img className="banner__figure--imagen"src="./img/player.png" alt="Imagen de curso" />
                <figcaption className="banner__figcaption">
                    <button className="banner__button">FRONT END</button>
                    <h1 className="banner__titulo">Challenge React</h1>
                    <p className="banner__parrafo">
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde 
                        podrás comprometerte en la resolución de un problema para poder 
                        aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </figcaption>
            </figure>
        </banner>
    )
}

export default Banner;