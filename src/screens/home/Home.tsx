import React from 'react';
import {Button, FlatList, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {authAtom, getUserListSelector} from '../../store';
import {UserItem} from './component/UserItem';
import {UserType} from '../../store/users/types';
import {EmptyList} from '../../components/EmptyList';

export const Home = () => {
  const [authState, setAuthState] = useRecoilState(authAtom);
  const userList = useRecoilValueLoadable(getUserListSelector(1));

  const onLogoutPressHandler = () => {
    setAuthState({
      token: '',
    });
  };

  const renderListItem = (data: UserType) => {
    return <UserItem data={data} />;
  };

  const renderEmptyComponent = () => {
    return <EmptyList />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{`Token :- ${authState.token}`}</Text>
      <Button onPress={onLogoutPressHandler} title={'Logout'} />
      <FlatList
        data={userList.contents}
        renderItem={({item}) => renderListItem(item)}
        style={styles.listStyle}
        ListEmptyComponent={renderEmptyComponent}
      />
    </SafeAreaView>
  );
};
