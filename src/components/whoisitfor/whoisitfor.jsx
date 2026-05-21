import "./whoisitfor.css";
import { IoMdStar } from "react-icons/io";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";
import whoFarmers from "../../assets/whoisitforFarmersImg.png";
import whoShopOwners from "../../assets/whoisitforShopOwnersImg.png";
import whoPeople from "../../assets/whoisitforPeopleImg.png";
import whoWomen from "../../assets/whoisitforWomenImg.png";



function WhoIsItFor(){
    return(
        <div className="whoIsItForsection">
            <h1><IoMdStar className="whoIsItForIcon"/>Who is it for?</h1>
            <h2>Kudger is made for people like you.</h2>
            <div className="farmersToWomen">
                <div className="imgAndEach">
                    <img src={whoFarmers} alt="" />
                    <div className="eachFarmersToWomen" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <h3>Farmers & Traders</h3>
                        <p>Receive instant payment for your goods even in areas without network.</p>
                    </div>
                </div>
                <div className="imgAndEach">
                    <img src={whoShopOwners} alt="" />
                    <div className="eachFarmersToWomen" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <h3>Shop Owners</h3>
                        <p>Accept cashless payments without expensive equipment or charges.</p>
                    </div>
                </div>
                <div className="imgAndEach">
                    <img src={whoPeople} alt="" />
                    <div className="eachFarmersToWomen" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <h3>People without Smartphones</h3>
                        <p>No smartphone? No problem. Your NFC wristband or card is all you need.</p>
                    </div>
                </div>
                <div className="imgAndEach">
                    <img src={whoWomen} alt="" />
                    <div className="eachFarmersToWomen" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <h3>Women in Rural Areas</h3>
                        <p>Enjoy financial access and independence with easy-to-use technology.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhoIsItFor;