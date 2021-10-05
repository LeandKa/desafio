import React, {useState, useEffect} from 'react';
import Loading from '~/components/Loading';
import Header from '~/components/layouts/Header';
import Wrapper from '~/components/layouts/Wrapper';
import api from '~/services/api';
import {Container, TitlePage} from './style';
import ShowsList from '~/components/ShowsList';

export default function ShowByCategoria({route, navigation}) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getShowsByCategoria() {
      setLoading(true);
      const response = await api.get(`/get-tag/${route.params.id}`);
      await setTimeout(() => {
        setShows(response.data.result.Shows);
        setLoading(false);
      }, 2000);
    }

    getShowsByCategoria();
  }, [route.params.id]);

  return (
    <Wrapper>
      <>
        <Header />
        <Container>
          <TitlePage>Titulos do gênero {route.params.name}</TitlePage>
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
