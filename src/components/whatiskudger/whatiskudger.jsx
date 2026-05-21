import "./whatiskudger.css";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";
import pos from "../../assets/WhatIsKudgerPOS.png";
import { IoMdStar } from "react-icons/io";


function WhatIsKudger(){
    return(
        <div className="whatIsKudgerSection" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="imgAndDescription">
                <img src={pos} alt="" />
                <div className="description">
                    <h2><IoMdStar className="whatIsKudgerIcon"/>What is KUDGER?</h2>
                    <h3>Kudger is Nigeria's offline digital payment solution.</h3>
                    <p>We connect the unbanked and underserved to the digital economy — no smartphones or constant internet required. Using NFC devices like wristbands or stickers, you can send or receive eNaira with a simple tap. <br /> It's fast. It's secure. And it's built for Nigerians — especially those in rural or low-connectivity areas.</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default WhatIsKudger;