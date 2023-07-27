import * as React from 'react';
import {RootNavigator} from './RootNavigator';
import {RecoilRoot} from 'recoil';

export const StartNavigator = () => {
  return (
    <RecoilRoot>
      <RootNavigator />
    </RecoilRoot>
  );
};
