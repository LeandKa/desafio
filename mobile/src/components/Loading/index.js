import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, Icon} from './style';

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator color="red" size="large" />
    </Container>
  );
}
