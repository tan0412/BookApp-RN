import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import IconGrid from '../../shared/icons/ic_grid.svg';
import IconSearch from '../../../shared/icons/ic_search.svg';
import IconShopping from '../../shared/icons/ic_shopping.svg';
import Header from '../../shared/ui/Header'
import Slider from '../../shared/ui/Slider';
import * as colors from '../../shared/theme/colors';
import Spacer from 'react-spacer';
import { PageProps } from '../../shared/type/PageProps'
import { CommonActions } from '@react-navigation/native';
import { NAVIGATIONS_ROUTE } from '../../navigation/routes';
import axios from 'axios';
import ModalBase from '../../shared/ui/ModalBase';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export default function HomeScreen({navigation}: PageProps) {
 const id = useSelector((state:RootState) => state.id.id)
 const [modalVisible, setModalVisible] = useState(false)
  const handlerNavigation = () => {
    navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_BOOKDETAIL, params:{id: id}}))
}
const toggleModal = () => {
  setModalVisible(!modalVisible)

}
const handlerNav= () => {
  navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_SHOPPING}))
}
const handlerNavBookDetail= () => {
  console.log(id)
  navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_BOOKDETAIL, params:{id: id}}))
}
const [data, setData] = useState([])

  return (
    <View style={styles.container}>
      <Header 
          handleNav={handlerNav}
          iconLeft={IconGrid}
          iconRigth={IconShopping}
          onfocus={toggleModal}
          />
      <ScrollView>
      <View style={{height: 250, marginBottom: 20}}>
        <Slider />
      </View>
      {/*\ <BookCard 
              img={require('../../shared/icons/image1.png')}
              name= {'Nhung ngon nen trong dem lap lanh lung linh...'}
              price={'20000d'}/>
      <BookCard 
              img={require('../../shared/icons/image2.png')}
              name= {'Vuon hoa nho uom mam tuong lai...'}
              price={'20000d'}/> */}
      {/* <BookList category={'Văn Học'} navigation={handlerNavigation}/>
      <Spacer height={20}/>
      <BookList category={'Ngoại Ngữ'} navigation={handlerNavigation}/>
      <Spacer height={20}/>
      <BookList category={'Thiếu Nhi'} navigation={handlerNavigation}/>
      <Spacer height={20}/>
      <BookList category={'Sách Giáo Khoa'} navigation={handlerNavigation}/> */}
      <Spacer height={20}/>
      </ScrollView>
      <ModalBase data={data} visible={modalVisible} toggleModal={toggleModal} handleNav={handlerNav} handleNavBook={handlerNavBookDetail} />
   </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray2,
   
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  }
})