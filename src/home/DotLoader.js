import React from 'react';
import { motion } from 'framer-motion';

const Top = {
  ///최상위 컨테이너
  position: 'absolute',
  display: 'flex',
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const loadingContainer = {
  //dot을 감싸는 컨테이너
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '9.5rem',
};

const loadingCircle = {
  //dot
  display: 'block',
  width: '0.7rem',
  height: '1.2rem',
  backgroundColor: '#fa9d00',
  border: '4px solid #7B4E25',
  borderRadius: '5rem',
};

const loadingContainerVariants = {
  //움직이는 속도
  start: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const loadingCircleVariants = {
  //위에서 아래로 떨어지는 높이
  start: {
    y: '0%',
  },
  end: {
    y: '70%',
  },
};

const loadingCircleTransition = {
  duration: 0.8,
  repeat: 'Infinity',
  ease: 'easeInOut',
};

const DotLoader = () => {
  return (
    <div style={Top}>
      <div>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>

          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default DotLoader;
