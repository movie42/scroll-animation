// AnimatedComponent.tsx
import React, { ReactElement, useEffect, useRef } from "react";
import { useAnimationControls } from "./AnimationController";

interface AnimatedComponentProps {
  id: string;
  children: ReactElement;
  keyframes: Keyframe[] | PropertyIndexedKeyframes;
  timing: KeyframeAnimationOptions;
  action?: "pause" | "play" | "cancel";
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  id,
  children,
  keyframes,
  timing,
  action
}) => {
  const ref = useRef<HTMLElement>(null);
  const { register } = useAnimationControls();

  useEffect(() => {
    if (ref.current) {
      const animation = ref.current.animate(keyframes, timing);
      if (action === "pause") {
        animation.pause();
      }
      if (action === "cancel") {
        animation.cancel();
      }

      const controls = {
        animation,
        play: () => animation.play(),
        pause: () => animation.pause(),
        reset: () => {
          animation.cancel();
          animation.play();
        }
      };

      register(id, controls);
    }
  }, [id, keyframes, timing, register]);

  return React.cloneElement(children, { ref });
};

export default AnimatedComponent;
