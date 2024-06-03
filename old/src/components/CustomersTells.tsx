// ScrollableComponent.tsx

import { motion } from 'framer-motion';
import WhatsappMsg1 from '../assets/whatsappImg1.png';
import WhatsappMsg2 from '../assets/whatsappImg2.png';
import WhatsappMsg3 from '../assets/whatsappImg3.png';
import WhatsappMsg4 from '../assets/whatsappImg4.png';
import '../CssFiles/mobileStyles.css';

const CustomersTells = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mobile-content"
        >
            <div className='customersDiv'>
                <h1 className='customersHeadline'>...לקוחות מספרים</h1>
                <img className='whatsappImg' src={WhatsappMsg1} alt='whatsappImg' />
                <img className='whatsappImg' src={WhatsappMsg2} alt='whatsappImg' />
                <img className='whatsappImg' src={WhatsappMsg3} alt='whatsappImg' />
                <img className='whatsappImg' src={WhatsappMsg4} alt='whatsappImg' />
            </div>

        </motion.div>
    );
};

export default CustomersTells;
