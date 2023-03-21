import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput} from 'react-native';
import searchApi from '../../api/searchApi';
import IconSearch from '../icons/ic_search.svg'
import * as colors from '../theme/colors';
import ModalBase from '../ui/ModalBase';
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchBook, fetchSearchPending } from '../../redux/actions/searchAction';

type HeaderProps = {
    handleNav: () => void;
    iconLeft: any,
    iconRigth: any,
    toggleModal?: () => void,
    onfocus?: () => void,
    
}
const Header = (props: HeaderProps) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchBookList = async () => {
    //       try { 
    //           const response = await searchApi.getSearchBook(search);
    //           dispatch(fetchSearchBook(response.books));
    //     } catch (err) {
    //       console.log(err)
    //     }
    //     }
    //     fetchBookList()
    //   },[search])
    return (
        <View style={{backgroundColor: 'red'}}>  
        <View style={styles.header}>
            <TouchableOpacity>
                <props.iconLeft width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxSearch} onPress={props.onfocus}>
                <IconSearch style={styles.icon} />
                <TextInput
                    value={search}
                    onChangeText={text => setSearch(text)}
                    placeholder='Search...'
                    onFocus={props.onfocus}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.handleNav}>
                <props.iconRigth width={30} height={30} />
            </TouchableOpacity>
        </View>
        
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: colors.primaryOrange,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
    }, 
    boxSearch:{
        flex: 0.75,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 5,
        height: 40,
        width: 260,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    text: {

    }
})