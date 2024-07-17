import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>Animation Archive</Title>
      <List>
        <Item>
          <Link to="first-start">First Start</Link>
        </Item>
        <Item>
          <Link to="parallax-scroll">Parallax Scroll</Link>
        </Item>
        <Item>
          <Link to="framer-motion-example">useScroll Example</Link>
        </Item>
        <Item>
          <Link to="framer-motion-example-useTransform">
            useTransform Example
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Title = styled.h1`
  font-size: 2vw;
`;

const List = styled.nav``;
const Item = styled.div``;
