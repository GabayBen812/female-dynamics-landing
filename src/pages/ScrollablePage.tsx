// In your App.js or ScrollablePage.js

import Banner from '../components/Banner';
import ProfilePic from '../assets/profile.jpg';
import ScrollableComponent from '../components/ScrollableComponent';
import '../CssFiles/mobileStyles.css'; // Ensure this is imported
import Aboutme from '../components/Aboutme';
import Learn from '../components/Learn';
import CustomersTells from '../components/CustomersTells';

const ScrollablePage = () => {
  return (
    <div className='fullApp'>
      <div className="scrollable-page">
        <Banner />
      </div>

      <div className="learn">
        <Learn />
      </div>

      <div className='profilePicDiv'>
        <img className='profilePic' src={ProfilePic} alt="Feature" />
        <hr className='profilePicHr'/>
      </div>
      <div className="scrollable-page-two">
        <Aboutme />
      </div>

      <div className="scrollable-page-three">
        <CustomersTells />
      </div>

    </div>
  );
};

export default ScrollablePage;
