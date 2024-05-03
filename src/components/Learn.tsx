// ScrollableComponent.tsx

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import InstgramVids from '../assets/instgramVids.png';
import ImageSliderImg1 from '../assets/approaching.jpg';
import ImageSliderImg2 from '../assets/profile.jpg';
import ImageSliderImg3 from '../assets/imageslider3.jpeg';
import ImageSliderImg4 from '../assets/imageslider4.jpeg';
import ImageSliderImg5 from '../assets/imageslider5.jpeg';
import ImageSlider from './ImageSlider';
import '../CssFiles/mobileStyles.css';
import { useNavigate } from 'react-router-dom';

const Learn = () => {

  const navigate = useNavigate();

    const images: string[] = [
        ImageSliderImg1,
        ImageSliderImg2,
        ImageSliderImg3,
        ImageSliderImg4,
        ImageSliderImg5,
    ];

    const [isVisible, setIsVisible] = useState(false);
    const domRef: any = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        observer.observe(domRef.current);

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);


    const moveToPayment = () => {
      console.log("moveToPayment");
      navigate('/payment');
      
      // window.location.href = "https://pay.sumit.co.il/6qhgyh/6r1inb/6r1inc/payment/";
    }


    return (
      <>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mobile-content"
        >
          <div className='learnDiv'>
            <div className='instgramsVidsDiv'>
              <img className='InstgramVids' src={InstgramVids} alt="Feature" />
              <div className='InstgramVidsText'>
                <strong className='aboveImageSlider'>והכל פרקטי לגמרי</strong>
                <ImageSlider images={images} />
              </div>
              <div
                className={`animate ${isVisible ? 'fadeIn enterDeatils' : 'enterDeatils'}`}
                ref={domRef}
                // onSubmit={() => {moveToPayment()}} // Add onSubmit event handler
              >
                <h1 className='paymentBtn'>?התעניינת</h1>
                <h1 className='paymentBtn'>לחץ כאן ותגיע לעמוד סליקה מאובטח</h1>
                <h1 className='paymentBtn'>ולאחר מכן תקבל גישה ישירה לתכנית</h1>
                {/* <input className='emailInput' placeholder='הכנס כתובת מייל' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> */}
                <button className='enterPayment' type="submit" onClick={() => {moveToPayment()}}>אני בפנים</button>
                <h1 className='hidden'>.</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
};

export default Learn;
