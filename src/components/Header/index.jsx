import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <img src="./public/img/LogoMain.png" alt="Logo AluraFlix"/>
            <div className="header__botton__container">
                <button className="header__botton">HOME</button>
                <button className="header__botton">NUEVO VIDEO</button>
            </div>
        </header>
    )
}

export default Header;