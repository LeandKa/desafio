import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Content = styled.ScrollView`
  flex: 1;
`;

export const ShowBody = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
export const Img = styled.Image`
  width: 90px;
  height: 130px;
`;

export const ShowInfo = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  width: 70%;
  margin-top: 10px;
`;

export const Tags = styled.FlatList`
  flex: 1;
  flex-wrap: wrap;
`;
export const TagsContent = styled.Text`
  color: white;
  padding: 10px;
  font-size: 15px;
  margin-left: 10px;
  border-radius: 10px;
  background: #312e38;
`;

export const ShowHeader = styled.View`
  flex: 1;
  flex-direction: row;
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
