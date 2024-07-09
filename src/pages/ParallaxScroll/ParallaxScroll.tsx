import Lenis from "@studio-freight/lenis";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const images = [
  [
    "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=2518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503939313441-d753b6c7eb91?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564053051381-5cb91813736b?q=80&w=2420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],

  [
    "https://images.unsplash.com/photo-1595088402198-24d44e48d57c?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614314266357-8a2e58059af5?q=80&w=2521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  [
    "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544942579-9671c890fe89?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  [
    "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1447433553548-2fc162393482?q=80&w=2339&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608178398319-48f814d0750c?q=80&w=2406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
];

const ParallaxScroll = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { height } = dimension;
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const yTransforms = [y, y2, y3, y4];
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);

    requestAnimationFrame(raf);

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollData = yTransforms.map((y, index) => ({
    id: index,
    y,
    imgArray: images[index]
  }));

  return (
    <Main>
      <Spacer>
        <h1>Parallax Scroll</h1>
        <p>this Example by Olivier Larose</p>
        <a href="https://blog.olivierlarose.com/tutorials/smooth-parallax-scroll">
          example link
        </a>
      </Spacer>
      <Gallery ref={gallery}>
        <GalleryWrapper>
          {scrollData.map(({ imgArray, y, id }) => (
            <Column key={id} y={y} images={imgArray} />
          ))}
        </GalleryWrapper>
      </Gallery>
      <Spacer />
    </Main>
  );
};

export default ParallaxScroll;

const Column = ({
  images,
  y
}: {
  images: string[];
  y: MotionValue<number>;
}) => {
  return (
    <StyledColumn style={{ y }}>
      {images.map((src, i) => {
        return (
          <ImageContainer key={i}>
            <Img src={src} alt="space image" />
          </ImageContainer>
        );
      })}
    </StyledColumn>
  );
};

const Main = styled.div``;
const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1rem;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
const Gallery = styled.div`
  height: 175vh;
  overflow: hidden;
  background: rgb(45, 45, 45);
`;

const GalleryWrapper = styled.div`
  position: relative;
  top: -12.5vh;
  height: 200vh;
  display: flex;
  gap: 2vw;
  padding: 2vw;
`;

const StyledColumn = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 25%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  white-space: nowrap;
  &:nth-of-type(1) {
    top: -30%;
  }

  &:nth-of-type(2) {
    top: -70%;
  }

  &:nth-of-type(3) {
    top: -30%;
  }

  &:nth-of-type(4) {
    top: -60%;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  height: 33%;
  width: 100%;
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
