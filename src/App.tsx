import styled from "styled-components";
import WithAnimation from "./components/WithAnimation";

function App() {
  // const animationRef = useRef<Animation | null>(null);
  // const animation3Ref = useRef<Animation | null>(null);

  // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //   const element = e.currentTarget;
  //   const scrollY = element.scrollTop;

  //   const maxScroll = element.scrollHeight - element.clientHeight;
  //   const scrollFraction = scrollY / maxScroll;

  //   if (animationRef.current) {
  //     const maxAnimationTime = animationRef.current.effect.getTiming()
  //       .duration as number;

  //     if (scrollFraction <= 0.3) {
  //       animationRef.current.currentTime =
  //         (scrollFraction / 0.3) * maxAnimationTime; // 0% ~ 30% 구간에서 애니메이션
  //     } else {
  //       animationRef.current.currentTime = 0; // 애니메이션 중지
  //     }
  //   }

  //   if (animation3Ref.current) {
  //     const maxAnimationTime3 = animation3Ref.current.effect.getTiming()
  //       .duration as number;
  //     if (scrollFraction > 0.3 && scrollFraction <= 0.5) {
  //       animation3Ref.current.currentTime =
  //         ((scrollFraction - 0.3) / 0.2) * maxAnimationTime3; // 30% ~ 50% 구간에서 애니메이션
  //     } else {
  //       animation3Ref.current.currentTime = 0; // 애니메이션 중지
  //     }
  //   }
  // };

  return (
    <Container
    // onScroll={handleScroll}
    >
      <Section>
        <Sticky>
          <WithAnimation
            keyframes={[
              { opacity: 0 },
              { transform: "translate3d(0, 0, 0)", opacity: 1 },
              { transform: "translate3d(0, 0, 300px)", opacity: 0 }
            ]}
            timing={{
              duration: 1000,
              fill: "forwards"
            }}
          >
            <h1>우주다 우주!</h1>
          </WithAnimation>
        </Sticky>
        <Sticky>
          <WithAnimation
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
          >
            <h1>하핫</h1>
          </WithAnimation>
        </Sticky>
        <Background />
      </Section>
    </Container>
  );
}

export default App;

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
