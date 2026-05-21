import "./forbusiness.css";
import { IoMdStar } from "react-icons/io";
import instMerchant from "../../assets/institutionMerchantImg.png";
import instBank from "../../assets/institutionBankImg.png";
import instGovt from "../../assets/institutionGovtImg.png";
import instAgent from "../../assets/institutionAgentImg.png";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";


function ForBusiness(){
    return(
        <div className="forBusinessSection">
            <h1><IoMdStar className="forBusinessIcon"/>For Businesses, Banks, and Partners</h1>
            <h2>Kudger isn't just for individuals — it’s a smart solution for institutions.</h2>
            <div className="institutions">
                <div className="eachInstitutions">
                    <div className="institutionImgDiv"><img src={instMerchant} alt="" /></div>
                    <div className="institutionText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center"}}>
                        <h3>Merchants</h3>
                        <p>Accept payments with or without POS devices. No internet? No problem.</p>
                    </div>
                </div>
                <div className="eachInstitutions">
                    <div className="institutionImgDiv"><img src={instBank} alt="" /></div>
                    <div className="institutionText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center"}}>
                        <h3>Banks & Fintechs</h3>
                        <p>Integrate with Kudger APIs to expand your reach into offline and underserved markets.</p>
                    </div>
                </div>
                <div className="eachInstitutions">
                    <div className="institutionImgDiv"><img src={instGovt} alt="" /></div>
                    <div className="institutionText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center"}}>
                        <h3>Government & NGOs</h3>
                        <p>Use Kudger for disbursing stipends, relief funds, or pensions — securely.</p>
                    </div>
                </div>
                <div className="eachInstitutions">
                    <div className="institutionImgDiv"><img src={instAgent} alt="" /></div>
                    <div className="institutionText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center"}}>
                        <h3>Agent Networks</h3>
                        <p>Help people top up tokens, create wallets, and earn income while doing it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForBusiness;