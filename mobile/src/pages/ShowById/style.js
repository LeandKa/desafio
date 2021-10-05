import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.ScrollView`
  flex: 1;
  height: auto;
`;

export const Content = styled.ImageBackground`
  width: 400px;
  height: 400px;
  opacity: 0.8;
  justify-content: center;
`;

export const InfoView = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const InfoTitle = styled.Text`
  color: white;
  text-align: center;
  font-size: 40px;
  position: relative;
  top: -30px;
  padding: 2px;
`;
export const InfoText = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 17px;
`;

export const InfoDetails = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 30px;
  margin-left: 10px;
`;

export const RatingView = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const IconRating = styled(FontAwesomeIcon)`
  margin-top: 16px;
`;

export const Name = styled.Text`
  color: white;
  flex: 1;
  flex-wrap: wrap
  font-size: 17px;
  margin: 10px;
`;
export const CreatorView = styled.View`
  flex: 1;
`;

export const Creator = styled.Text`
  color: white;
  font-size: 17px;
  text-align: center;
`;
