import { useInView, animated } from "@react-spring/web";
import { useConditionalSpring } from "../../utils";

const SectionAnimationWrapper = ({ children }) => {
  const [ref, inView] = useInView();

  const sectionStyle = useConditionalSpring.useSectionStyles(inView);

  return (
    <animated.div ref={ref} style={{ ...sectionStyle }}>
      {children}
    </animated.div>
  );
};

export default SectionAnimationWrapper;
