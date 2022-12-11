import { CommonActions } from '@react-navigation/native';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList} from 'react-native';
import Spacer from 'react-spacer';
import { BookData } from '../../data/mocks/Book';
import IconBack from '../icons/ic_back.svg';
import IconShopping from '../icons/ic_shopping.svg'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import Header from './Header';
import { RootState, store } from '../../redux/store';
import Loading from './Loading';

type ModalBaseProps = {
  visible: boolean;
  toggleModal: () => void;
  handleNav: () => void;
  searchText?: string;
}
const ModalBase = (props: ModalBaseProps, ) => {
 const [isLoading, setIsLoading] = useState(false)
 const search = useSelector((state:RootState) => state.search.bookData)
 useEffect(() => {
  if(!search || search.length == 0) {
  setIsLoading(true)
} else {
  setIsLoading(false)
}
 }, [search])

    return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={props.toggleModal}
      >
        <Header iconLeft={IconBack} iconRigth={IconShopping} handleNav={props.handleNav} />
        { isLoading ? <Loading /> : 
        
         <View style={{flex: 1}}>
          <FlatList 
          numColumns={2}
           data={search}
           renderItem={({item, index}) => (
            <BookCard img={item.image} name={item.title} price={item.price} />
          )}
           
          />
         </View>
        }
        
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