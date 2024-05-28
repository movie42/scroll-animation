import React, { useEffect, useRef } from "react";

const WithAnimation = ({
  children,
  keyframes,
  timing
}: {
  children: JSX.Element;
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null;
  timing?: number | KeyframeAnimationOptions | undefined;
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const animation = ref.current.animate(keyframes, timing);
      return () => animation.cancel();
    }
  }, [keyframes, timing]);

  return React.cloneElement(children, { ref });
};

export default WithAnimation;
