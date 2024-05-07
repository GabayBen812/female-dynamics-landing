// ScrollableComponent.tsx

import { motion } from 'framer-motion';
import BannerImg from '../assets/banner3.png';
// import SubBannerImg from '../assets/banner2.png';
// import SubBannerImgScale from '../assets/bannerAnimation.png';
// import imgForText from '../assets/imgForText.png';
import '../CssFiles/mobileStyles.css'; // Adjust path as necessary
// import { useNavigate } from 'react-router-dom';
import DolevVideo from '../assets/DolevVideo.mp4'; 

const Banner = () => {
    // const navigate = useNavigate();

    const moveToPayment = () => {
        // console.log("moveToPayment");
        // navigate('/payment');
        
        window.location.href = "https://pay.sumit.co.il/6qhgyh/6r1inb/6r1inc/payment/";
      }

      
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mobile-content"
        >
            <div className='background-image'>
                <div className='square'></div>
                <strong className="title">הצלחה עם נשים</strong>
                <strong className='subTitle'>השיטה המקיפה שלי למגנט נשים יפות לחיים שלך ברשתות חברתיות</strong>
                <div className="div-text-photos">
                    <img className='bannerImg' src={BannerImg} alt="Feature" />
                </div>
                <div className='headerDiv'>
                    <strong className='header'>המוצר הטוב ביותר לשליטה ב<span className='headerSpanPink'>משחק הפנימי</span> שלך</strong>
                    <strong className='header'>היישום שלו בפועל והעצמה שלו ישמש אותך <span className='headerSpanBlue'>לכל החיים</span></strong>
                </div>

                <button className='actionBtn' onClick={() => {moveToPayment()}}>
                    מעניין? הצטרף אלינו
                </button>


                <div className="animatedImgDiv">
                    <br />
                    <br />
                    <strong className="title">?מה נלמד</strong>
                    <strong className='subTitle' style={{ fontSize: '3.5vw' }}>להכיר את דרכו של הבוס</strong>
                    <strong className='subTitle' style={{ fontSize: '3.5vw', color: '#aa8736' }}>להכניס נשים יפות לחיים שלך</strong>
                    <strong className='subTitle' style={{ fontSize: '3.5vw' }}>לפתח את הכישורים החברתיים שלך</strong>
                    <strong className='subTitle'></strong>
                </div>


                <div className='youtubeVidDiv'>
                    {/* <iframe className='youtubeVid' src='https://www.youtube.com/embed/ItqsnD46gDQ?si=wmo4QlCy826s_hTe' title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
                    <iframe className='youtubeVid' src={DolevVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
                {/* <div className="subBannerDiv">
                    <div className='imgWithScale'>
                    <img className='bannerImg' src={SubBannerImg} alt="Feature" />
                    <img className='bannerImgScale' src={SubBannerImgScale} alt="Feature" />
                    </div>
                    <strong className='subBannerDivText'>פיצחנו את הקוד של עולם הדייטינג ברשתות חברתיות</strong>
                </div>


                <div className='paragraphTextDiv'>
                <strong style={{ fontSize: '10vw'}}>
                    עוד משהו להוסיף
                </strong>
                </div>
                <div className='paragraphTextDiv'>
                <strong style={{ fontSize: '10vw'}}>
                    עוד משהו להוסיף
                </strong>
                </div> */}
            </div>

        </motion.div>
    );
};

export default Banner;
