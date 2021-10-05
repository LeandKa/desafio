import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
  margin-top: 40px;
`;

export const Avatar = styled(FontAwesomeIcon)`
  color: white;
  font-size: 25px;
`;
