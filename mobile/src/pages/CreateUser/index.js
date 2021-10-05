import React, {useRef} from 'react';
import {
  Container,
  Logo,
  PassIcon,
  TitlePage,
  Button,
  ButtonText,
  GoBack,
} from './style';
import * as yup from 'yup';
import Wrapper from '~/components/layouts/Wrapper';
import Input from '~/components/layouts/Form/Input';
import reactotron from 'reactotron-react-native';
import api from '~/services/api';

export default function CreateUser({navigation}) {
  const formRef = useRef(null);

  async function onSubmit(data) {
    try {
      const schema = yup.object({
        name: yup.string().required('Nome obrigatorio'),
        email: yup
          .string()
          .required('Email obrigatorio')
          .email('Digite um email valido'),
        password: yup
          .string()
          .min(6, 'Minino de 6 caracteres')
          .required('Senha e obrigartoria'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      const response = await api.post('/add-user', {
        name: data.name,
        password: data.password,
        email: data.email,
      });
      if (response) {
        alert(`Usuario - ${data.name} criado com sucesso`);
      }
    } catch (error) {
      const validationErrors = {};
      if (error.response) {
        alert(`❌ - ${error.response.data}`);
      }
      if (error instanceof yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Wrapper>
      <Container ref={formRef} onSubmit={onSubmit}>
        <Logo>Agenda Mobile</Logo>
        <TitlePage>Crie a sua Conta</TitlePage>
        <Input name="name" secure={false} text={'Name'}>
          <PassIcon name={'user'} />
        </Input>
        <Input name="email" secure={false} text={'Email'}>
          <PassIcon name={'user'} />
        </Input>
        <Input name="password" secure={true} text={'Password'}>
          <PassIcon name={'tty'} />
        </Input>
        <Button onPress={() => formRef.current.submitForm()}>
          <ButtonText>Cliquei aqui</ButtonText>
        </Button>
        <GoBack onPress={() => navigation.navigate('Login')}>
          Volte para o login
        </GoBack>
      </Container>
    </Wrapper>
  );
}
