import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 50px);
`;

const SelectContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  height: 100%;
  justify-content: space-around;
  > div {
    height: 50px;
    width: 100%;
    border: 1px solid black;
    background-color: gray;
  }
`;

const DisplayContainer = styled.div`
  flex: 3;
  padding-top: 5rem;
  border: 1px solid black;
`;

const ImageCarousel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  > div {
    height: 200px;
    width: 200px;
    background-color: gray;
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
`;

function Portfolio() {
  return (
    <Layout>
      <Container>
        <SelectContainer>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </SelectContainer>
        <DisplayContainer>
          <ImageCarousel>
            <div></div>
            <div></div>
            <div></div>
          </ImageCarousel>
          <TextContainer>
            <h2>Project Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              exercitationem illum accusantium voluptas voluptatibus, error
              dolor ad labore sed doloremque eius at incidunt eum quisquam
              facilis quaerat, mollitia fuga sint. At aliquam deserunt assumenda
              labore nostrum molestiae voluptatibus neque? Officia repellat
              fugiat est dignissimos optio explicabo praesentium cupiditate quod
              consequatur, perferendis pariatur nesciunt, voluptatibus iusto. In
              incidunt voluptatibus voluptatum veniam! Nemo quas quasi adipisci
              deleniti explicabo atque eius aut ipsam odit. Nostrum iusto quis
              eaque? Quisquam natus maxime ut illo. Dicta voluptatibus impedit
              architecto veritatis non! Aliquam similique autem commodi. Dicta
              natus ipsam
            </p>
          </TextContainer>
        </DisplayContainer>
      </Container>
    </Layout>
  );
}

export default Portfolio;
