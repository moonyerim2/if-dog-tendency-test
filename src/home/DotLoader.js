import React from "react";
import { motion } from "framer-motion";


const Top={///최상위 컨테이너
    position:"absolute",
    display: "flex",
    top:"20%",
    left:"50%",
    transform: "translate(-50%, 5%)",
}
const loadingContainer = { //dot을 감싸는 컨테이너 
    width: "18rem",
    height: "18rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems:"center",
};
const loadingCircle = {//dot 
    display: "block",
    width: "2.2rem",
    height: "2.2rem",
    backgroundColor: "#fa9d00",
    border: "4px solid #7B4E25", 
    borderRadius: "5rem",
    margin: "10px",
};

const loadingContainerVariants = { //움직이는 속도 
    start: {
        transition: {
        staggerChildren: 0.5,
        },
    },
    end: {
        transition: {
        staggerChildren: 0.5,
        },
    },
};

const loadingCircleVariants = {//위에서 아래로 떨어지는 높이 
    start: {
        y: "0%",
    },
    end: {
        y: "70%",
    },
};
const loadingCircleTransition = {
    duration : 0.4,
    yoyo : 'Infinity',
    ease: 'easeInOut'
}

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