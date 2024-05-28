import styled from "styled-components";
import AnimatedComponent from "./AnimatedComponent";
import { useAnimationControls } from "./AnimationController";

const AnimationContainer = () => {
  const { getControls } = useAnimationControls();
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrollY = element.scrollTop;
    const headTitleAnimation = getControls("headTitle");
    const headTitle2Animation = getControls("headTitle2");

    const maxScroll = element.scrollHeight - element.clientHeight;
    const scrollFraction = scrollY / maxScroll;

    if (headTitleAnimation) {
      const maxAnimationTime = headTitleAnimation.animation.effect?.getTiming()
        .duration as number;

      if (scrollFraction <= 0.3) {
        headTitleAnimation.animation.currentTime =
          (scrollFraction / 0.3) * maxAnimationTime;
      } else {
        headTitleAnimation.animation.currentTime = 0;
      }
    }

    if (headTitle2Animation) {
      const maxAnimationTime = headTitle2Animation.animation.effect?.getTiming()
        .duration as number;

      if (scrollFraction <= 0.6 && scrollFraction > 0.3) {
        headTitle2Animation.animation.currentTime =
          ((scrollFraction - 0.3) / 0.3) * maxAnimationTime;
      } else {
        headTitle2Animation.animation.currentTime = 0;
      }
    }
  };
  return (
    <Container onScroll={handleScroll}>
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
            <Fixed>
              <Sticky>
                <h1>우주다 우주!</h1>
              </Sticky>
            </Fixed>
          </AnimatedComponent>
        </Sticky>
        <Background />
      </Section>
      <Section>
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
              offset: [0, 0.04, 1]
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
      </Section>
    </Container>
  );
};

export default AnimationContainer;

const Fixed = styled.div`
  display: fixed;
`;
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
