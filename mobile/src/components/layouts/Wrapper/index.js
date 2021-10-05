import React from 'react';
import {Container} from './style';
import PropTypes from 'prop-types';

export default function Wrapper({children}) {
  return <Container>{children}</Container>;
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
