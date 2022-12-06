import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList} from 'react-native';
import Spacer from 'react-spacer';
import { BookData } from '../../data/mocks/Book';
import IconBack from '../icons/ic_back.svg';
import IconShopping from '../icons/ic_shopping.svg'

import BookCard from './BookCard';
import Header from './Header';

type ModalBaseProps = {
  visible: boolean;
  toggleModal: () => void;
  handleNav: () => void;
  data?: any;
  searchText?: string;
}
const ModalBase = (props: ModalBaseProps, ) => {
 const data =props.data;
    
    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={props.toggleModal}
      >
        
         <Header iconLeft={IconBack} iconRigth={IconShopping} handleNav={props.handleNav} />
        
         <View style={{flex: 1}}>
         {/* {data.map((item: any) => {
         
                    return (
                      <BookCard img={item.image} name={item.title} price={item.price} />
                    )
                })} */}
          <FlatList 
          numColumns={2}
           data={data}
           renderItem={({item, index}) => (
            <BookCard img={item.image} name={item.title} price={item.price} />
          )}
           
          />
         </View>
       
        
        </Modal>
        </View>
    
    )
}

export default ModalBase;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});