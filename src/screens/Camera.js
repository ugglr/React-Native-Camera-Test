import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import styled from 'styled-components/native';

const CyberGreen = '#4caf50';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const ScanContainer = styled.View`
  height: 150;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  padding: 16px 16px;
`;
const Title = styled.Text`
  font-size: 18;
  color: white;
`;
const InfoText = styled.Text`
  color: white;
  font-size: 22;
`;

class CameraScreen extends Component {
  state = {
    scanInfo: '',
  };

  onBarCodeRead = e => {
    const data = e.data;
    this.setState({scanInfo: data});
  };

  render() {
    return (
      <Container>
        {this.props.isFocused && (
          <RNCamera
            captureAudio={false}
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 150,
              left: 0,
            }}
            onBarCodeRead={this.onBarCodeRead}>
            <BarcodeMask
              edgeColor={CyberGreen}
              animatedLineColor={CyberGreen}
            />
          </RNCamera>
        )}
        <ScanContainer>
          <Title>Scan INFO:</Title>
          <InfoText>{this.state.scanInfo}</InfoText>
        </ScanContainer>
      </Container>
    );
  }
}

export default CameraScreen;
