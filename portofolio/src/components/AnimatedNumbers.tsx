import { MutableRefObject, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
interface IAnimatedNumbers {
    value:number
}
export const AnimatedNumbers: React.FC<IAnimatedNumbers> = ({ value }) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, {once:true});
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);

      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};
