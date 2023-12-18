import { useInView, animated } from "@react-spring/web";

const SectionAnimationWrapper = ({ children }) => {
  const [ref, inView] = useInView();

  return (
    <animated.div
      ref={ref}
      style={{
        width: "100%",
        scale: inView ? 1 : 0.9,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "0.4s ease-in-out",
      }}
    >
      {children}
    </animated.div>
  );
};

export default SectionAnimationWrapper;
