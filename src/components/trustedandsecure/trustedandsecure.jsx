import "./trustedandsecure.css";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";
import trustedandsecureImg from "../../assets/trustedandsecureImg.png";
import { IoMdStar } from "react-icons/io";
import { RiCheckboxFill } from "react-icons/ri";
import { IoCheckbox } from "react-icons/io5";

function TrustedAndSecure(){
    return(
        <div className="trustedAndSecureSection" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="trustedAndSecureContents">
                <img src={trustedandsecureImg} alt="" />
                <div className="textAndButton">
                    <h1><IoMdStar className="trustedandsecureIcon"/>Trusted. Compliant. Secure.</h1>
                    <h2>Kudger fully supports the Central Bank of Nigeria’s (CBN) vision for the eNaira.</h2>
                    <ul>
                        <li><IoCheckbox className="liIcon"/>Tiered KYC</li>
                        <li><IoCheckbox className="liIcon"/>Transparent transaction record</li>
                        <li><IoCheckbox className="liIcon"/>Data security standards</li>
                        <li><IoCheckbox className="liIcon"/> Interoperability with the national digital payment infrastructure</li>
                    </ul>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default TrustedAndSecure;