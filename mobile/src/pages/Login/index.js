import React, {useRef} from 'react';
import {
  Container,
  Logo,
  PassIcon,
  TitlePage,
  Button,
  ButtonText,
  CreateUser,
} from './style';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import Wrapper from '~/components/layouts/Wrapper';
import Input from '~/components/layouts/Form/Input';
import {signInRequest} from '~/store/modules/Auth/actions';

export default function Login({navigation}) {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function onSubmit(data) {
    try {
      const schema = yup.object({
        email: yup
          .string()
          .required('Email obrigatorio')
          .email('Digite um email valido'),
        password: yup
          .string()
          .min(3, 'Minino de 3 caracteres')
          .required('Senha e obrigatoria'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(signInRequest(data));
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
        <TitlePage>Faça o Login</TitlePage>
        <Input name="email" secure={false} text={'Email'}>
          <PassIcon name={'user'} />
        </Input>
        <Input name="password" secure={true} text={'Password'}>
          <PassIcon name={'tty'} />
        </Input>
        <Button onPress={() => formRef.current.submitForm()}>
          <ButtonText>Cliquei aqui</ButtonText>
        </Button>
        <CreateUser onPress={() => navigation.navigate('CreateUser')}>
          Novo por aqui? Crie uma conta aqui
        </CreateUser>
      </Container>
    </Wrapper>
  );
}
