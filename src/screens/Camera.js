import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: plum;
`;

class CameraScreen extends Component {
  state = {
    refresh: 0,
    torchOn: false,
    captureAudio: false,
  };
  refresh() {
    this.setState({refresh: 0.00001});
    this.setState({refresh: 0});
  }

  render() {
    return (
      <Container>
        {this.props.isFocused && (
          <RNCamera
            style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}
            captureAudio={false}
          />
        )}
      </Container>
    );
  }
}

export default CameraScreen;
