// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const PopupForm = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           className="popup-form absolute z-[100000] bg-[red]   py-10 gap-4 left-0 w-full h-[100vh] my-auto "
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3, ease: 'easeInOut' }}
//               >
//                   <div className="sm:grid grid-cols-2 h-full w-full sm:w-[90%] mx-auto">
//                   <motion.div
//             className="left-section bg-[#f2f2f2] shadow-summery h-full"
//             initial={{ y: '-100%' }}
//             animate={{ y: '0%', transition: { delay: 0.2, duration: 0.3 } }} // Add a delay of 0.2 seconds
//           >
//             {/* Add your left form content here */}
//           </motion.div>
//           <motion.div
//             className="right-section relative bg-[#202128] shadow-summery  h-full"
//             initial={{ y: '100%' }}
//             animate={{ y: '0%', transition: { delay: 0.2, duration: 0.3 } }}
//           >
//             {/* Add your right form content here */}
//             <button onClick={onClose} className='text-white text-[70px] leading-[80px] font-normal absolute right-[40px] top-[40px]'>x</button>
//           </motion.div>
                      
//                   </div>
          
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default PopupForm;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopupForm = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-form absolute z-[100000] shadow-ButtonShadow py-10 gap-4 left-0 w-full h-[100vh] my-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="sm:grid grid-cols-2 gap-[2px] h-full w-full sm:w-[90%] mx-auto">
            <motion.div
              className="left-section bg-[#f2f2f2] shadow-summery h-full"
              initial={{ y: '-100%' }}
              animate={{ y: '0%', transition: { delay: 0.2, duration: 0.3 } }}
            >
              {/* Add your left form content here */}
            </motion.div>
            <motion.div
              className="right-section relative bg-[#202128] shadow-summery h-full"
              initial={{ y: '100%' }}
              animate={{ y: '0%', transition: { delay: 0.2, duration: 0.3 } }}
              exit={{ y: '100%', transition: { duration: 0.3, ease: 'easeInOut' } }} // Slowly close the right section
            >
              {/* Add your right form content here */}
              <button onClick={onClose} className="text-white text-[70px] leading-[80px] font-normal absolute right-[40px] top-[40px]">
                x
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
