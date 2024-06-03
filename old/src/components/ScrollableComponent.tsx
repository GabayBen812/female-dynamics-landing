// ScrollableComponent.tsx

import { motion } from 'framer-motion';
import '../CssFiles/mobileStyles.css'; // Adjust path as necessary

const ScrollableComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mobile-content"
    >
      <div className="site-name">MySite</div>
      <p className="site-description">Welcome to MySite, your go-to destination for unique content.</p>
      <div className="div-text-photos">
        <p>Explore our latest features and updates.</p>
        {/* Example image - replace with your own */}
        <img src="path_to_your_image.jpg" alt="Feature" />
        <img src="another_path_to_your_image.jpg" alt="Update" />
      </div>
    </motion.div>
  );
};

export default ScrollableComponent;
