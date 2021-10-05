import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Wrapper from '~/components/layouts/Wrapper';
import Loading from '~/components/Loading';
import {Container, ContentHeader, ProviderItem, Text, TitlePage} from './style';
import Header from '~/components/layouts/Header';
import api from '~/services/api';
import ShowsList from '~/components/ShowsList';

export default function Home({navigation}) {
  const [categorias, setCategorias] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getShows() {
    try {
      const response = await AsyncStorage.getItem('tokens');
      const parse = JSON.parse(response);
      const result = await api.get('/get-all', {
        headers: {
          authorization: parse.accessToken,
        },
      });
      await setTimeout(() => {
        setShows(result.data.result);
        setLoading(false);
      }, 100);
    } catch (error) {
      alert(error.message);
    }
  }

  async function getCategorias() {
    try {
      const result = await api.get('get-categorias');
      setCategorias(result.data.result);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getShows();
    getCategorias();
  }, []);

  const renderItem = ({item}) => {
    return (
      <ProviderItem
        onPress={() =>
          navigation.navigate('ShowByCategoria', {
            id: item.id,
            name: item.name,
          })
        }>
        <Text>{item.name}</Text>
      </ProviderItem>
    );
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <TitlePage>Procurando Algo?</TitlePage>
        <ContentHeader
          data={categorias}
          horizontal
          renderItem={renderItem}
          key={item => item.id}
        />
        <TitlePage>Titulos Disponiveis</TitlePage>
        {loading ? (
          <Loading />
        ) : (
          <ShowsList shows={shows} navigation={navigation} />
        )}
      </Container>
    </Wrapper>
  );
}
