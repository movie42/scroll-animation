import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const UseScrollExample = () => {
  const { scrollYProgress, scrollXProgress } = useScroll({
    // offset: ["start end", "end start"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const gradient = useTransform(
    scrollXProgress,
    [0, 1],
    [
      "linear-gradient(270deg, #000 0%, #000 100%, #ff0000 100%, #ff0000 100%)",
      "linear-gradient(270deg, #000 0%, #000 0%, #ff0000 0%, #ff0000 100%)"
    ]
  );
  return (
    <div>
      <ProgressBar style={{ scaleX }} />
      <Container>
        <HeadTitle
          style={{
            fontSize: "20rem",
            backgroundImage: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent"
          }}
        >
          useScroll demo From Framer motion document.
        </HeadTitle>
        <h2>first. progress bar</h2>
        <Section>
          <h2>second. element scroll</h2>
          <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
        </Section>
      </Container>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default UseScrollExample;
const HeadTitle = styled(motion.h1)``;
const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-color: #ff00b3;
  transform-origin: 0;
`;
const Container = styled.div`
  width: 100vw;
  height: 200vh;
  /* overflow-x: hidden; */
  h1 {
    font-family: "Arial";
    font-size: 20rem;
    font-weight: 900;
  }
  h2 {
    font-size: 8rem;
  }
`;
const Section = styled.div`
  position: relative;
  #progress {
    position: sticky;
    top: 20px;
    left: 20px;
    transform: rotate(-90deg);
    .indicator {
      stroke: red;
    }
  }
  circle {
    stroke-dashoffset: 0;
    stroke-width: 15%;
    fill: none;
  }
  .bg {
    stroke: red;
    opacity: 0.3;
  }
`;

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <ItemSection>
      <div ref={ref}>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </ItemSection>
  );
}

const ItemSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 200px;
    height: 300px;
    border: 2px dotted violet;
    position: relative;
  }
  .progress {
    position: sticky;
    top: 0;
    width: 80px;
    height: 80px;
    margin: 0;
    padding: 0;
  }

  .progress svg {
    transform: translateX(-100px) rotate(-90deg);
  }

  circle {
    stroke-dashoffset: 0;
    stroke-width: 5%;
    fill: none;
  }

  .bg {
    stroke: violet;
    opacity: 0.2;
  }

  .progress .indicator {
    stroke: violet;
  }

  ::-webkit-scrollbar {
    height: 12px;
    width: 5px;
    background: violet;
  }

  ::-webkit-scrollbar-thumb {
    background: violet;
    -webkit-border-radius: 1ex;
  }

  ::-webkit-scrollbar-corner {
    background: violet;
  }
`;
