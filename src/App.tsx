import AnimationContainer from "./components/AnimationContainer";
import AnimationController from "./components/AnimationController";

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
    <AnimationController>
      <AnimationContainer />
    </AnimationController>
  );
}

export default App;
