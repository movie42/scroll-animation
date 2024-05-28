import styled from "styled-components";
import AnimatedComponent from "./AnimatedComponent";

const AnimationContainer = () => {
  return (
    <Container
    // onScroll={handleScroll}
    >
      <Section>
        <Sticky>
          <AnimatedComponent
            id="headTitle"
            keyframes={[
              { opacity: 0 },
              { transform: "translate3d(0, 0, 0)", opacity: 1 },
              { transform: "translate3d(0, 0, 300px)", opacity: 0 }
            ]}
            timing={{
              duration: 1000,
              fill: "forwards"
            }}
            action="pause"
          >
            <h1>우주다 우주!</h1>
          </AnimatedComponent>
        </Sticky>
        <Sticky>
          <AnimatedComponent
            id="headTitle2"
            keyframes={{
              opacity: [0, 1, 0],
              transform: [
                "",
                "translate3d(0, 0, 0)",
                "translate3d(0, 0, 300px)"
              ],
              offset: [0, 0.01, 1]
            }}
            timing={{
              duration: 1000,
              fill: "forwards"
            }}
            action="pause"
          >
            <h1>하핫</h1>
          </AnimatedComponent>
        </Sticky>
        <Background />
      </Section>
    </Container>
  );
};

export default AnimationContainer;

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  background-color: black;
`;

const Section = styled.section`
  width: 100%;
  height: 6000px;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
`;

const Sticky = styled.div`
  top: 50%;
  transform: translate3d(0, -50%, 0);
  /* perspective: 1000px;*/
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 3;
  h1 {
    font-size: 10rem;
    font-weight: 900;
    color: white;
  }
`;
