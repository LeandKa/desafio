import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';
import Header from '~/components/layouts/Header';
import Wrapper from '~/components/layouts/Wrapper';
import Loading from '~/components/Loading';
import ShowsList from '~/components/ShowsList';
import api from '~/services/api';
import {Container, TitlePage, ViewEmpty} from './style';

export default function Favorites({navigation}) {
  const [shows, setShows] = useState([]);
  const isFocus = useIsFocused();
  const [loading, setLoading] = useState(true);
  const {user} = useSelector(state => state.auth);

  async function getShowsByFavorites() {
    try {
      setLoading(true);
      const response = await api.get(`/get-favorites/${user.user.id}`);
      await setTimeout(() => {
        setShows(response.data.result.Shows);
        setLoading(false);
      }, 1000);
    } catch (error) {
      alert(error.messsage);
    }
  }

  useEffect(() => {
    getShowsByFavorites();
  }, []);

  useEffect(() => {
    getShowsByFavorites();
  }, [isFocus]);

  return (
    <Wrapper>
      <>
        <Header />
        <Container>
          <TitlePage>Seus Titulos favoritos </TitlePage>
          {loading ? (
            <Loading />
          ) : (
            <>
              {shows.length == 0 ? (
                <ViewEmpty>
                  <TitlePage>Ops... nenhum favorito ainda!</TitlePage>
                </ViewEmpty>
              ) : (
                <ShowsList shows={shows} navigation={navigation} />
              )}
            </>
          )}
        </Container>
      </>
    </Wrapper>
  );
}
