import styled from 'styled-components/native';
import {Form} from '@unform/mobile';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled(Form)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  font-size: 30px;
  color: white;
`;

export const TitlePage = styled.Text`
  font-size: 30px;
  color: white;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const PassIcon = styled(Icon)`
  font-size: 25px;
  color: white;
  margin-left: 18px;
  margin-right: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  background: rgba(217, 30, 24, 1);
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: white;
`;

export const CreateUser = styled.Text`
  color: white;
  font-size: 20px;
  padding: 10px;
`;
