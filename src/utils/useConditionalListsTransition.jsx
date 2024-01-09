import { useTransition } from "@react-spring/web";

const useConditionalListsTransition = (condition) => {
  return useTransition(condition, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    config: { duration: 200 },
  });
};

export default useConditionalListsTransition;
