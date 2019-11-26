import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

const Home = () => {
  return (
    <Container>
      <Text>This is the home screen!</Text>
    </Container>
  );
};

export default Home;
