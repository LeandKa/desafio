import React from 'react';
import PropTypes from 'prop-types';
import ShowTags from '~/components/layouts/ShowTags';
import {
  Content,
  ShowBody,
  ShowInfo,
  ShowHeader,
  Name,
  Img,
  IconRating,
  RatingView,
} from './style';

export default function ShowsList({shows, navigation}) {
  return (
    <Content>
      {shows.map(data => (
        <ShowBody
          onPress={() =>
            navigation.navigate('ShowById', {
              id: data.id,
            })
          }
          key={data.id}>
          <Img source={{uri: data.img}} />
          <ShowInfo>
            <ShowHeader>
              <Name>{data.name}</Name>
              <RatingView>
                <IconRating name="star" color="yellow" size={15} />
                <Name>{data.rating}</Name>
              </RatingView>
            </ShowHeader>
            <ShowTags data={data.Tags} navigation={navigation} />
          </ShowInfo>
        </ShowBody>
      ))}
    </Content>
  );
}

ShowsList.propTypes = {
  shows: PropTypes.oneOfType([PropTypes.array]),
};

ShowsList.defaultProps = {
  shows: {},
};
