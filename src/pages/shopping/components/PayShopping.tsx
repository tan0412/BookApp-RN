import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as colors from '../../../shared/theme/colors'

const PayShopping = () => {
    return (
    <View style={styles.container}>
        <View style={styles.counter}>
        <Text style={styles.text}>Thành tiền</Text>
            <Text style={styles.price}>200000 d</Text>

        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buyShopping}>
                <Text style={styles.title}>Thanh toan</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default PayShopping;

const styles = StyleSheet.create({
    container: {
        height: 80,
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
        flex: 1,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    text: {
        fontSize: 16, 
        marginVertical:5,
        color: colors.black
    },
    price: {
        fontSize: 16,
        color: colors.primaryOrange,
        fontWeight: 'bold',
    },
    buyShopping: {
        width: 180,
        height: 50,
        backgroundColor: colors.primaryOrange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})