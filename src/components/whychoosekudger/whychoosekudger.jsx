import "./whychoosekudger.css";
import { IoMdStar } from "react-icons/io";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";
import { RiWifiOffLine, RiSmartphoneLine, RiShieldCheckLine, RiBankLine, RiCommunityLine  } from "react-icons/ri";
import stepsImgBg from "../../assets/stepsimgBG.png";
import whychooseImg from "../../assets/whychoosekudgerImg.png";

function WhyChooseKudger(){
    return(
        <div className="whyChooseKudgerSection" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="reasonAndImg">
                <div className="reason">
                    <h1><IoMdStar className="whyChooseItIcon"/>Why choose Kudger?</h1>
                    <h2>Built for Nigeria's unique needs and challenges</h2>
                    <div className="allReasons">
                        <div className="eachReasons">
                            <h3><RiWifiOffLine className="reasonIcons"/>Works Offline</h3>
                            <p>Make payments even without internet connection  </p>
                        </div>
                        <div className="eachReasons">
                            <h3><RiSmartphoneLine className="reasonIcons"/>No Smartphone Needed</h3>
                            <p>Use simple NFC cards and wristbands instead </p>
                        </div>
                        <div className="eachReasons">
                            <h3><RiShieldCheckLine className="reasonIcons"/>Safe & Secure</h3>
                            <p>Bank-level security with encrypted transactions </p>
                        </div>
                        <div className="eachReasons">
                            <h3><RiBankLine className="reasonIcons"/>CBN Complaint</h3>
                            <p>Fully approved by Central Bank of Nigeria </p>
                        </div>
                        <div className="eachReasons">
                            <h3><RiCommunityLine className="reasonIcons"/>Community Focused</h3>
                            <p>Built specifically for rural Nigerian communities </p>
                        </div>
                        <div className="eachReasons">
                            <h3><RiShieldCheckLine className="reasonIcons"/>Low-Cost for Merchant</h3>
                            <p>Affordable transactions fees for small businesses </p>
                        </div>
                    </div>
                </div>
                <div className="whyImg" style={{ backgroundImage: `url(${stepsImgBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <img src={whychooseImg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default WhyChooseKudger;