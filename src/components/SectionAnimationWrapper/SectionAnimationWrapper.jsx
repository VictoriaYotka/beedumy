import { animated, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

const SimpleAnimationWrapper = ({ children }) => {
  const triggerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = triggerRef.current.offsetTop;
      const bottom = top + triggerRef.current.offsetHeight;
      const isElementVisible =
        window.scrollY + window.innerHeight > top && window.scrollY < bottom;

      setIsVisible(isElementVisible);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = useSpring({
    width: "100%",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    config: {
      duration: 500,
      easing: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    },
  });

  return (
    <animated.div style={styles} ref={triggerRef}>
      {children}
    </animated.div>
  );
};

export default SimpleAnimationWrapper;
