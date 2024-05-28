// AnimationController.tsx
import React, { ReactNode, createContext, useContext, useRef } from "react";

interface AnimationControls {
  play: () => void;
  pause: () => void;
  reset: () => void;
}

interface AnimationContextType {
  register: (key: string, controls: AnimationControls) => void;
  getControls: (key: string) => AnimationControls | undefined;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const useAnimationControls = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationControls must be used within an AnimationController"
    );
  }
  return context;
};

const AnimationController: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const animations = useRef<Map<string, AnimationControls>>(new Map());

  const register = (key: string, controls: AnimationControls) => {
    animations.current.set(key, controls);
  };

  const getControls = (key: string): AnimationControls | undefined => {
    return animations.current.get(key);
  };

  const contextValue: AnimationContextType = {
    register,
    getControls
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationController;
