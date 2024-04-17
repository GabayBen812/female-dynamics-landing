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

const Learn = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
          if (response.ok) {
            console.log('Email sent successfully');
          } else {
            console.error('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

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



    return (
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
                        <form 
                            className={`animate ${isVisible ? 'fadeIn enterDeatils' : 'enterDeatils'}`}
                            ref={domRef}
                            onSubmit={handleSubmit}
                        >
                            <h1 className='paymentBtn'>מלא את המייל שלך כאן</h1>
                            <h1 className='paymentBtn'>תגיע לעמוד סליקה מאובטח </h1>
                            <h1 className='paymentBtn'>וקבל גישה לתכנית  ישירות למייל</h1>
                            <input className='emailInput' placeholder='הכנס כתובת מייל' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <button className='enterPayment' type='submit'>אני בפנים</button>
                            <h1 className='hidden'>.</h1>
                        </form>
                </div>
            </div>

        </motion.div>
    );
};

export default Learn;
