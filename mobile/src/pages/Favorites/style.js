import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const ContentHeader = styled.FlatList`
  flex-grow: 0;
  margin-bottom: 0px;
`;

export const TitlePage = styled.Text`
  color: white;
  text-align: center;
  font-size: 30px;
  padding: 10px;
  margin-top: 50px;
`;

export const ViewEmpty = styled.View`
  display: flex;
  flex-direction: row;
  padding: 30px;
  margin-top: 40px;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;
