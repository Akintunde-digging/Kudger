import "./howkudgerwork.css"
import { IoMdStar } from "react-icons/io";
import step1Img from "../../assets/step1.png";
import step2Img from "../../assets/step2.png";
import step3Img from "../../assets/step3.png";
import step4Img from "../../assets/step4.png";
import step5Img from "../../assets/step5.png";
import step6Img from "../../assets/step6.png";
import stepsImgBg from "../../assets/stepsimgBG.png";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";

function HowKudgerWork(){
    return(
        <div className="howKudgerWorkSection">
            <h1><IoMdStar className="howItWorksIcon"/>How Kudger works?</h1>
            <h2>5 Easy Steps to Tap & Pay</h2>
            <div className="steps">
                <div className="eachSteps">
                    <div className="imgDiv"><img src={step1Img} alt="" /></div>
                    <div className="eachStepsText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Create Your Wallet</h3>
                        <p>Open a Kudger-linked eNaira wallet using your phone number or NIN.</p>
                    </div>
                </div>
                <div className="eachSteps">
                    <div className="noBGImagesDiv first" style={{ backgroundImage: `url(${stepsImgBg})`, backgroundSize: "cover", backgroundPosition: "center" }}><img src={step2Img} alt="" /></div>
                    <div className="eachStepsText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Get Your NFC Device</h3>
                        <p>We’ll give you a smart sticker, wristband, or card that stores payment tokens.</p>
                    </div>
                </div>
                <div className="eachSteps">
                    <div className="noBGImagesDiv second" style={{ backgroundImage: `url(${stepsImgBg})`, backgroundSize: "cover", backgroundPosition: "center" }}><img src={step3Img} alt="" /></div>
                    <div className="eachStepsText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Load Tokens</h3>
                        <p>Top up your wallet. Tokens are loaded securely onto your NFC device.</p>
                    </div>
                </div>
                <div className="eachSteps">
                    <div className="imgDiv"><img src={step4Img} alt="" /></div>
                    <div className="eachStepsText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Tap to Pay</h3>
                        <p>At the point of payment, just tap your device on the merchant’s phone or POS.</p>
                    </div>
                </div>
                <div className="eachSteps">
                    <div className="imgDiv"><img src={step5Img} alt="" /></div>
                    <div className="eachStepsText" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "130%", backgroundPosition: " 25% center" }}>
                        <h3>Sync Later</h3>
                        <p>Transactions go through instantly. Records sync automatically when internet is available.</p>
                    </div>
                </div>
                 <div className="eachSteps">
                    <div className="lastDiv" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}><img src={step6Img} alt="" /></div>
                    <div className="eachStepsText lastText">
                        <h3>Get started now</h3>
                        <button>Get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowKudgerWork;