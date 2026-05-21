import "./ready.css";
import readyImg from "../../assets/readyImg.png"
import stepsImgBg from "../../assets/stepsimgBG.png";

function Ready(){
    return(
        <div className="readySection">
            <div className="readyBackground" style={{ backgroundImage: `url(${stepsImgBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="readyContents">
                    <div className="readyTextandButton">
                        <h2>Ready to Join the Offline Digital Revolution?</h2>
                        <p>Kudger is here to make sure no Nigerian is left behind in the digital economy.</p>
                        <button>Get Started now</button>
                    </div>
                    <img src={readyImg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Ready;