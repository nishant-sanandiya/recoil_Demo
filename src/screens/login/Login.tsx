import React from 'react';
import {Button, View} from 'react-native';
import {styles} from './styles';
import {useRecoilState} from 'recoil';
import {authAtom} from '../../store/index';

export const Login = () => {
  const [_, setAuthState] = useRecoilState(authAtom);

  const onLoginPressHandler = () => {
    setAuthState({token: 'hfksdhfuhfiuhwfiuwebfnewfnew'});
  };

  return (
    <View style={styles.container}>
      <Button onPress={onLoginPressHandler} title="Click to Login" />
    </View>
  );
};
