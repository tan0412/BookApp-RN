import { CommonActions } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { NAVIGATIONS_ROUTE } from '../../navigation/routes';
import * as colors from '../theme/colors';
import { PageProps } from '../type/PageProps';

type BookCardProps = {
    img: any,
    name: string,
    price: string,
}

const BookCard = (props: BookCardProps, {navigation}:PageProps) => {
    // const handlerNavigation = () => {
    //     // navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_LOGIN}))
    //     navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_LOGIN}))
    // }
    return (
        <View style={styles.container} >
            <Image source={{uri:props.img}} style={styles.image}/>
            <View style={styles.viewText}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.textPrice}>{props.price}</Text>
            </View>
        </View>
    )
}

export default BookCard;

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 180,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
    },
    image: {
        height: 180,
        width: 120,
        alignSelf: 'center',
    },
    viewText: {
        marginHorizontal: 10,
    },
    text: {
        fontSize: 14,
        color: colors.black, 
        fontWeight: '400',
        marginTop: 10,
    }, 
    textPrice: { 
        color: colors.primaryOrange, 
        fontWeight:'bold',
        marginTop: 5,
    }
})