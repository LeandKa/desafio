import React, {useState, useEffect} from 'react';
import Header from '~/components/layouts/Header';
import Wrapper from '~/components/layouts/Wrapper';
import Loading from '~/components/Loading';
import ShowsList from '~/components/ShowsList';
import api from '~/services/api';
import {Container, TitlePage} from './style';

export default function ShowByCategoria({route, navigation}) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getShowsByCategoria() {
      try {
        const response = await api.get(`/get-categoria/${route.params.id}`);
        await setTimeout(() => {
          setShows(response.data.result);
          setLoading(false);
        }, 1000);
      } catch (error) {
        alert(error.message);
      }
    }

    getShowsByCategoria();
  }, []);

  return (
    <Wrapper>
      <>
        <Header />
        <Container>
          <TitlePage>Titulos da Categoria {route.params.name}</TitlePage>
          {loading ? (
            <Loading />
          ) : (
            <ShowsList shows={shows} navigation={navigation} />
          )}
        </Container>
      </>
    </Wrapper>
  );
}
