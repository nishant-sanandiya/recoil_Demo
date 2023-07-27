import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator, AuthNavigator} from './index';
import {tokenValue} from '../store/index';
import {useRecoilValue} from 'recoil';

export const RootNavigator = () => {
  // you can use token value using below both ways.
  // most preferred way to using with selector.

  // const [authState, _] = useRecoilState(authAtom);
  const token = useRecoilValue(tokenValue);

  return (
    <NavigationContainer>
      {token === '' ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
