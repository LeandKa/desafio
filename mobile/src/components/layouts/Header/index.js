import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './style';
import {useDispatch} from 'react-redux';
import {signOut} from '~/store/modules/Auth/actions';

export default function Header({}) {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <MaterialIcon onPress={onPress} name="logout" size={30} color={'white'} />
    </Container>
  );
}
