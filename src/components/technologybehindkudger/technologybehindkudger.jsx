import "./technologybehindkudger.css";
import { IoMdStar } from "react-icons/io";
import nfcTech from "../../assets/technologyNFCImg.png";
import merchantTech from "../../assets/technologyMerchantImg.png";
import step3Img from "../../assets/step3.png";
import stepsImgBg from "../../assets/stepsimgBG.png";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";


function TechnologyBehindKudger(){
    return(
        <div className="technologyBehindKudgerSection">
            <h1><IoMdStar className="technologyIcon"/>The Technology Behind Kudger</h1>
            <h2>Kudger uses smart but simple tech to make all this happen.</h2>
            <div className="technologies">
                <div className="eachTech">
                    <div className="imgDiv"><img src={nfcTech} alt="" /></div>
                    <div className="eachTechText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center"}}>
                        <h3>NFC Devices</h3>
                        <p>Wristbands, cards, or stickers that hold secure, single-use tokens.</p>
                    </div>
                </div>
                <div className="eachTech">
                    <div className="imgDiv"><img src={merchantTech} alt="" /></div>
                    <div className="eachTechText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Merchant App</h3>
                        <p>A mobile app (Android-based) used to accept payments — even offline.</p>
                    </div>
                </div>
                <div className="eachTech">
                    <div className="noBGImagesDiv" style={{ backgroundImage: `url(${stepsImgBg})`, backgroundSize: "cover", backgroundPosition: "center" }}><img src={step3Img} alt="" /></div>
                    <div className="eachTechText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Token System</h3>
                        <p>Your NFC device holds encrypted tokens that are validated during each tap. Once used, they expire automatically.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TechnologyBehindKudger;