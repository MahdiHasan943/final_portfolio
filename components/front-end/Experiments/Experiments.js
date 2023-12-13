import { textVariant2 } from "@/utils/motion/motion";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Experiments = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens only once when fully in view
  });
  const controls = useAnimation();

  // Animation properties
  const variants = {
    visible: {
      height: "0%",
      transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
    },
    hidden: {
      height: "100%",
    },
  };

  // Trigger the animation when the component is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="exp" className="">
      <div className="bg-[#f3f3f3] py-20">
        <motion.h3
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="text-center text-[#b29487] text-[18px] sm:text-[24px] font-popping font-semibold tracking-widest	 leading-[30px]"
        >
          EXPERIMENTS & OPEN SOURCE
        </motion.h3>
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="text-center text-[40px] sm:text-[50px] font-extrabold font-sofia py-3  text-[#4a4a4a]"
        >
          Web is Fun
        </motion.h2>
      </div>

      <div className="relative h-full bg-white">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="absolute top-0 left-0 bg-[#1f4c8f] h-full w-full"
        ></motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className=" h-[450px]  group shadow-sm rounded-sm relative overflow-hidden mainbgEx">
            <div className="bgEx  h-[450px] w-full"></div>
            <div className="absolute h-[400px] sm:h-[450px] w-full z-50 top-0 left-0">
              <div className="flex w-full h-full justify-center items-center">
                <div
                  className="  w-[250px] group-hover:w-[280px] group-hover:h-[280px] ease-in-out duration-200  h-[250px] bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url(/images/codepen-loader.webp)" }}
                ></div>
              </div>
            </div>
          </div>

          <div className=" h-[450px] group shadow-gipShadow rounded-sm relative overflow-hidden mainbgEx">
            <div className="bgEx  h-[450px] w-full"></div>
            <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
              <div className="flex w-full h-full justify-center items-center">
                <div
                  className="  w-[250px] group-hover:w-[300px] group-hover:h-[300px] ease-in-out duration-200  h-[250px] bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url(/images/search_.webp)" }}
                ></div>
              </div>
            </div>
          </div>

          <div className=" h-[450px] group shadow-ButtonShadow rounded-sm relative overflow-hidden mainbgEx">
            <div className="bgEx  h-[450px] w-full"></div>
            <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
              <div className="flex w-full h-full justify-center items-center">
                <div
                  className="  w-[250px] h-[250px] group-hover:w-[300px] group-hover:h-[300px] ease-in-out duration-200  bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url(/images/brick.webp)" }}
                ></div>
              </div>
            </div>
          </div>

          <div className=" h-[450px] group  shadow-summery rounded-sm relative overflow-hidden mainbgEx">
            <div className="bgEx  h-[450px] w-full"></div>
            <div className="absolute  h-[450px] w-full z-50 top-0 left-0">
              <div className="flex w-full h-full justify-center items-center">
                <div
                  className="group-hover:w-[300px] group-hover:h-[300px]  ease-in-out duration-200 w-[250px] h-[250px] lg:w-[200px] lg:h-[200px]   xl:w-[250px] xl:h-[250px] bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url(/images/x-times.webp)" }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiments;
