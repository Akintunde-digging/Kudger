import "./faq.css";
import whatiskudgerBg from "../../assets/WhatIsKudgerBgImg.png";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState, useEffect, useRef  } from "react";

const faqs = [
        { question: "Do I need a smartphone to use Kudger?", answer: "No. Your NFC device is all you need to send or receive payments." },
        { question: "What happens if I lose my NFC device?", answer: "Your tokens are protected with encryption. We’ll block it and issue a new one tied to your wallet." },
        { question: "Is Kudger legal and secure?", answer: "Yes. Kudger aligns with CBN's eNaira framework and uses bank-grade security." },
        { question: "Can I use Kudger as a business owner?", answer: "Yes! We have a merchant app built just for that — free to download." },
    ];

function FAQ(){

    
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggle = (i) => {
        setOpenIndexes((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
    };

    const faqScrollRef = useRef(null);
    useEffect(() => {
  if (faqScrollRef.current) {
        faqScrollRef.current.scrollTop = 130;
        }
    }, []); 

    return(
        <div className="scroll" ref={faqScrollRef}>
        <div className="faqSection" style={{ backgroundImage: `url(${whatiskudgerBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="faqContents">
                <h1>FAQ</h1>
                <div className="faqQuestionsAndAnswer"> {faqs.map((faq, i) => (
                    <div className={`faqItem ${openIndexes.includes(i) ? "open" : ""}`} key={i}>
                        <div className="faqQuestion" onClick={() => toggle(i)}>
                            <h3>{faq.question}</h3>
                            <button className="faqBtn" aria-label="toggle answer">{openIndexes.includes(i) ? <FiMinus /> : <FiPlus />}</button>
                        </div>
                        <div className="faqAnswer">
                            <p>{faq.answer}</p>
                        </div>
                    </div> ))}
                </div>
            </div>
        </div>
        </div>
    )
}
export default FAQ;