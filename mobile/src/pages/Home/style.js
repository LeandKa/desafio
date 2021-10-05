import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const ContentHeader = styled.FlatList`
  flex-grow: 0;
  margin-bottom: 0px;
`;

export const TitlePage = styled.Text`
  color: white;
  font-size: 30px;
  padding: 10px;
  margin-top: 50px;
`;

export const Text = styled.Text`
  color: white;
`;

export const ProviderItem = styled.TouchableOpacity`
  flex: 1;
  width: 130px;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 20px;
  border-radius: 30px;
  background: rgba(207, 0, 15, 1);
`;
