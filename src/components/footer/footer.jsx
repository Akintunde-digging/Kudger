import "./footer.css";
import footerLogo from "../../assets/footerkudgerlogo.png"
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import cbnImg from "../../assets/cbnImg.png"
import eNairaImg from "../../assets/eNairaImg.png"

function Footer(){
    return(
        <div className="footerSection">
            <div className="beforeBorder">
                <div className="logoToSocials">
                    <img src={footerLogo} alt="" />
                    <p>Empowering Nigeria's rural communities with offline-first digital payments.</p>
                    <div className="socials">
                        <a href=""><RiFacebookFill className="socialsIcon"/></a>
                        <a href=""><RiTwitterFill className="socialsIcon"/></a>
                        <a href=""><RiLinkedinFill className="socialsIcon"/></a>
                    </div>
                </div>
                <div className="quicklinksToLegal">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About</li>
                        <li>How it Works</li>
                        <li>Partners</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="quicklinksToLegal">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Help Center</li>
                        <li>Agent Networks</li>
                        <li>Technical Docs</li>
                    </ul>
                </div>
                <div className="quicklinksToLegal">
                    <h3>Legal</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Compliance</li>
                        <li>Security</li>
                    </ul>
                </div>
            </div>
            <div className="border"></div>
            <div className="afterBorder">
                <p>© 2025 Akintunde. All rights reserved. Licensed by Central Bank of Nigeria.</p>
                <div className="afterBorderImages">
                    <img src={cbnImg} alt="" />
                    <img src={eNairaImg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Footer;