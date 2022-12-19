import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as colors from '../../../shared/theme/colors'

type BottomShoppingTypes = {
    handleDispatch: () => void,
}

const BottomShopping = (props:BottomShoppingTypes) => {
    return (
    <View style={styles.container}>
        <View style={styles.counter}>
            <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.textCounter}>10</Text>
            <TouchableOpacity style={styles.borderBtn}>
                <Text style={styles.borderText}>+</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buyShopping} onPress={props.handleDispatch}>
            <Text style={styles.title}>Mua ngay</Text>
        </TouchableOpacity>
    </View>
    )
}

export default BottomShopping;

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        borderColor: colors.lightGray2,
        backgroundColor:'white',
        borderTopWidth: 1,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    counter: {
        flexDirection:'row',
        flex: 1,
        alignItems: 'center',
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
       marginHorizontal: 10,
    },
    borderText: {
       fontSize: 28,
       fontWeight: 'bold',
    },
    textCounter: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    buyShopping: {
        width: 150,
        height: 60,
        backgroundColor: colors.primaryOrange,
        justifyContent: 'center',
        alignItems: 'center',
    }
})