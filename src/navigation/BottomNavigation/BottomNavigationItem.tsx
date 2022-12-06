import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { propTypes } from 'react-spacer';
import IconFavorite from '../../shared/icons/IconFavorite';
import IconHome from '../../shared/icons/IconHome';
import IconNotification from '../../shared/icons/IconNotification';
import IconProfile from '../../shared/icons/IconProfile';
import * as colors from '../../shared/theme/colors';

interface BottomNavigationItemProps {
  isActive: boolean;
  name: String;
}

const BottomNavigationItem = (props: BottomNavigationItemProps) => {
  
  const BottomNavigationIcon = () => {
    if (props.name === 'Home') {
      return <IconHome isActive={props.isActive} />
    } else if (props.name ==='Favorite') {
      return <IconFavorite isActive={props.isActive} />
    } else if (props.name === 'Profile') {
      return <IconProfile isActive={props.isActive} />
    } else if (props.name === 'Notification') {
      return  <IconNotification isActive={props.isActive} />
    } else {
      throw Error('Unknown tab');
    }
  };

  return (
    <View style={styles.itemStyle}>
      <BottomNavigationIcon />
      <Text style={[styles.textStyle, props.isActive? [styles.textInActive]: [styles.textNoActive] ]}>{props.name}</Text>
    </View>
  );
};

export default BottomNavigationItem;

const styles = StyleSheet.create({
  itemStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 6,
    fontSize: 11,
  },
  textInActive: {
    color: colors.primaryOrange,
    fontWeight: 'bold',
    fontSize: 14,
  },
  textNoActive: {
    color: 'gray'
  }
});
