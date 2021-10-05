import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import ShowHeader from '~/components/layouts/ShowHeader';
import ShowTags from '~/components/layouts/ShowTags';
import Wrapper from '~/components/layouts/Wrapper';
import Loading from '~/components/Loading';
import {RatingView} from '~/components/ShowsList/style';
import api from '~/services/api';
import {
  Container,
  Content,
  Creator,
  CreatorView,
  IconRating,
  InfoDetails,
  InfoText,
  InfoTitle,
  InfoView,
  LoadingView,
  Name,
} from './style';

export default function ShowById({route, navigation}) {
  const [data, setData] = useState({});
  const {user} = useSelector(state => state.auth);
  const [fav, setFav] = useState(false);
  const [loading, setLoading] = useState(false);

  async function Check() {
    try {
      const response = await api.get(
        `/check-favorites?show_id=${route.params.id}&user_id=${user.user.id}`
      );
      if (response.data.result.Shows.length === 0) {
        setFav(false);
      } else {
        setFav(true);
      }
    } catch (error) {
      reactotron.log(error.message);
    }
  }

  useEffect(() => {
    async function getById() {
      try {
        setLoading(true);
        const response = await api.get(`/get-one/${route.params.id}`);
        setTimeout(() => {
          setData(response.data.result);
          setLoading(false);
        }, 1000);
      } catch (error) {
        alert(error.message);
      }
    }
    getById();
    Check();
  }, [route.params.id]);

  return (
    <Wrapper>
      <Container>
        {loading ? (
          <LoadingView>
            <Loading />
          </LoadingView>
        ) : (
          <>
            <Content source={{uri: data.img}} resizeMode="stretch" />
            <ShowHeader
              fav={fav}
              top={'-380px'}
              setFav={setFav}
              showId={data.id}
              navigation={navigation}
            />
            <InfoView>
              <InfoTitle>{data.name}</InfoTitle>
              <ShowTags navigation={navigation} data={data.Tags} />
              <InfoText>{data.description}</InfoText>
              <InfoDetails>
                <Name>
                  <IconRating name="star" color="yellow" size={15} />{' '}
                  {data.rating}
                </Name>
                <Creator>Criador:{data.creator}</Creator>
              </InfoDetails>
            </InfoView>
          </>
        )}
      </Container>
    </Wrapper>
  );
}
