import "./header.css";
import { NavLink } from "react-router-dom";
import kudgerLogo from "../../assets/kudgerlogo.png";


function Header(){
    return(
        <header>
            <nav>
                <img src={kudgerLogo} alt="" />
                <div className="listAndButton">
                    <ul>
                        <li><NavLink>About Us</NavLink></li>
                        <li><NavLink>FAQ</NavLink></li>
                        <li><NavLink>Contact Us</NavLink></li>
                    </ul>
                    <button>Get Started</button>
                </div>
            </nav>
        </header>
    )
}
export default Header;