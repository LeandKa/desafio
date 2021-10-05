import React from 'react';
import PropTypes from 'prop-types';
import {TagsContent, Tags} from './style';

export default function ShowTags({data, navigation}) {
  const renderTags = ({item}) => {
    return (
      <TagsContent
        onPress={() =>
          navigation.navigate('ShowByTag', {
            id: item.id,
            name: item.name,
          })
        }>
        {item.name}
      </TagsContent>
    );
  };

  return (
    <Tags
      data={data}
      horizontal
      renderItem={renderTags}
      key={tag => tag.id}></Tags>
  );
}

ShowTags.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]),
};

ShowTags.defaultProps = {
  data: [],
};
