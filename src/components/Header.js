import logo from "../assets/logo.svg";

const Header = ({children, theme, setTheme}) => {
    return (
        <header>
            <span className="logo">
                <img src={logo} alt="" />
                <span>{children}</span>
            </span>
            <div className="themeSelector">
                <span className="light"></span>
                <span className="medium"></span>
                <span className="dark"></span>
                <span className="gOne"></span>
                <span className="gTwo"></span>
                <span className="gThree"></span>
            </div>
        </header>
    )
}

export default Header;