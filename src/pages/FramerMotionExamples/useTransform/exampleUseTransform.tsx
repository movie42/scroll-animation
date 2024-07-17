import {
  cubicBezier,
  motion,
  useMotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import styled from "styled-components";

const ExampleUseTransform = () => {
  const x = useMotionValue(1);
  const backgroundColor = useTransform(
    x,
    [-200, 0, 200],
    ["rgba(0,255,0,1)", "rgba(255,0,0,0)", "rgba(255,0,0,1)"],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  );
  const { scrollY, scrollYProgress } = useScroll();
  const rotate = useTransform(scrollY, [0, 100], [0, 360], {
    clamp: false
  });
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 100], {
    clamp: false
  });
  return (
    <Container>
      <Rectangle style={{ rotate, borderRadius }}></Rectangle>
      <Text
        style={{ x, backgroundColor }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        exampleUseTransform
      </Text>
    </Container>
  );
};

export default ExampleUseTransform;

const Text = styled(motion.h1)`
  font-size: 20rem;
  word-break: break-all;
`;
const Container = styled(motion.div)`
  width: 100vw;
  height: 200vh;
`;

const Rectangle = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: #6363b1;
`;
