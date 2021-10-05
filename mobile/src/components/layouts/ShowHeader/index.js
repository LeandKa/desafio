import React from 'react';
import api from '~/services/api';
import {useSelector} from 'react-redux';
import {Back, Fav} from './style';

export default function ShowHeader({fav, setFav, navigation, showId}) {
  const {user} = useSelector(state => state.auth);

  const addFavorite = () => {
    async function Add() {
      try {
        const response = await api.post('/add-favorite', {
          show_id: showId,
          user_id: user.user.id,
        });
        if (response.data) {
          setFav(true);
          alert('Adicionado aos favoritos');
        }
      } catch (error) {
        alert(error.message);
      }
    }

    Add();
  };

  const removeFavorite = () => {
    async function Remove() {
      try {
        const response = await api.post('/remove-favorite', {
          user_id: user.user.id,
          show_id: showId,
        });
        if (response.data) {
          setFav(false);
          alert('Removido dos favoritos');
        }
      } catch (error) {
        alert(error.message);
      }
    }

    Remove();
  };

  return (
    <>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
        color="white"
        size={30}
        name="arrow-circle-left"
      />
      <Fav
        color={fav ? 'red' : 'white'}
        onPress={() => {
          fav ? removeFavorite() : addFavorite();
        }}
        size={30}
        name="heart"
      />
    </>
  );
}
