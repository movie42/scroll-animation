import { useEffect, useRef } from "react";
import styled from "styled-components";

function App() {
  const headTitleSectionRef = useRef<HTMLDivElement>(null);
  const headTitle2SectionRef = useRef<HTMLDivElement>(null);
  const headTitle3SectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const animation2Ref = useRef<Animation | null>(null);
  const animation3Ref = useRef<Animation | null>(null);

  useEffect(() => {
    const headTitle = headTitleSectionRef.current;
    const headTitle3 = headTitle3SectionRef.current;
    const headTitle2 = headTitle2SectionRef.current;

    if (headTitle3) {
      const animation3 = headTitle3.animate(
        [
          { opacity: 0 },
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
          { transform: "translate3d(0, 0, 300px)", opacity: 0 }
        ],
        {
          duration: 1000,
          fill: "forwards"
        }
      );
      animation3.pause();
      animation3Ref.current = animation3;
    }

    if (headTitle) {
      const animation = headTitle.animate(
        [
          { opacity: 0 },
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
          { transform: "translate3d(0, 0, 300px)", opacity: 0 }
        ],
        {
          duration: 1000,
          fill: "forwards"
        }
      );
      animation.pause();
      animationRef.current = animation;
    }

    if (headTitle2) {
      const animation2 = headTitle2.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: "forwards"
      });
      animation2.pause();
      animation2Ref.current = animation2;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      if (animationRef.current) {
        const maxAnimationTime = animationRef.current.effect.getTiming()
          .duration as number;
        if (scrollFraction <= 0.3) {
          animationRef.current.currentTime =
            (scrollFraction / 0.3) * maxAnimationTime; // 0% ~ 30% 구간에서 애니메이션
        } else {
          animationRef.current.currentTime = 0; // 애니메이션 중지
        }
      }

      if (animation3Ref.current) {
        const maxAnimationTime3 = animation3Ref.current.effect.getTiming()
          .duration as number;
        if (scrollFraction > 0.3 && scrollFraction <= 0.5) {
          animation3Ref.current.currentTime =
            ((scrollFraction - 0.3) / 0.2) * maxAnimationTime3; // 30% ~ 50% 구간에서 애니메이션
        } else {
          animation3Ref.current.currentTime = 0; // 애니메이션 중지
        }
      }

      if (animation2Ref.current) {
        const maxAnimationTime2 = animation2Ref.current.effect.getTiming()
          .duration as number;
        if (scrollFraction > 0.5 && scrollFraction <= 1) {
          animation2Ref.current.currentTime =
            ((scrollFraction - 0.5) / 0.5) * maxAnimationTime2; // 50% ~ 100% 구간에서 애니메이션
        } else {
          animation2Ref.current.currentTime = 0; // 애니메이션 중지
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Background />
      <Section>
        <Sticky>
          <h1 ref={headTitleSectionRef}>우주다 우주!</h1>
        </Sticky>
        <Sticky>
          <h1 ref={headTitle3SectionRef}>하핫</h1>
        </Sticky>
      </Section>
      <Section>
        <Sticky>
          <h1 ref={headTitle2SectionRef}>다른글자!</h1>
        </Sticky>
      </Section>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 200vh; /* 스크롤을 충분히 할 수 있도록 높이를 설정 */
  position: relative;
  background-color: black;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-attachment: fixed;
  z-index: 1;
`;

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* 각 섹션의 높이 설정 */
  display: flex;
  flex-direction: column; /* 수직으로 정렬 */
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Sticky = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  perspective: 1000px;
  h1 {
    font-size: 10rem;
    font-weight: 900;
    color: white;
  }
  p {
    font-size: 5rem;
  }
`;
