import { NavLink } from "react-router-dom";
import Instagram from "../../assets/instagram.svg";
import "./header.css";

export default function Header(): JSX.Element {
    return (
        <header className="header">
            <NavLink end to={"/"}>
                <h1>
                    MANON ANTIGNAC
                </h1>
            </NavLink>
            <nav>
                <NavLink to={'/photographies'}
                    className="navlink">
                    Photographies
                </NavLink>

                <NavLink to={'/'}
                    className="navlink">
                    Me contacter
                </NavLink>

                <a href="https://www.instagram.com/solyahne/" className="navlink">
                    <img src={Instagram} alt="Lien vers instagram"></img>
                </a>

            </nav>
        </header>
    )
}