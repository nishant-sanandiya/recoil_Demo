import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserType} from '../../../store/users/types';

interface PropTypes {
  data: UserType;
}

export const UserItem = (props: PropTypes) => {
  const {data} = props;
  return (
    <View style={styles.container}>
      <Text>{data.first_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
