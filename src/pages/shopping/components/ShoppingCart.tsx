import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as colors from '../../../shared/theme/colors'
import IconDelete  from '../../../shared/icons/ic_delete.svg'
import { useSelector, useDispatch } from "react-redux";
import { RootState, store } from '../../../redux/store';
import { decrement, increment } from "../../../redux/actions/countAction";

type ShoppingCartProps = {
    img: any,
    name: string,
    price: string,
}

const ShoppingCart = (props: ShoppingCartProps) => {
    const counter = useSelector((state:RootState) => state.count.value)
    const dispatch = useDispatch();
    const handleIncreament = () => {
        dispatch(increment());
      };
    
      const handleDecreament = () => {
        dispatch(decrement());
      };
    
    return (
        <View style={styles.container}> 
           <View style={styles.img}>
            <Image source={{uri:props.img}} style={styles.image} />
           </View>
            <View style={styles.content}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.price}>{props.price}</Text>
                <View style={styles.row}>
                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.touchBtn} onPress={handleIncreament}>
                            <Text style={styles.btnText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.counter}>
                            <Text style={styles.btnTextCount}>{counter}</Text>
                        </View>
                        <TouchableOpacity style={styles.touchBtn} onPress={handleDecreament}>
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.delete}>
                        <IconDelete  />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )}

export default ShoppingCart;

const styles = StyleSheet.create({
    container: {
        height:200,
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginHorizontal: 10,
        borderWidth: 1, 
        borderColor: colors.lightGray3,
        borderRadius: 15,
        marginVertical: 10,
    },
    img: {
        justifyContent: 'center',
        width: '40%',
        alignItems: 'center',
    },
    image: {
     height: '80%',
     width:'80%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent: 'space-between',
    },
    btn: {
        flexDirection: 'row',
        height: 35,
        width: 120,
        borderWidth: 1,
        borderColor: colors.lightGray3,
        alignItems: 'center',
    },
    btnText: {
        fontSize: 28,
    }, 
    touchBtn: {
        backgroundColor: colors.lightGray2,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTextCount: {
       fontSize: 18,
       color: colors.black
    },
    counter: {
         width: '40%',
        alignItems:'center'
    }, 
    content: {
        marginVertical: 15,
        width:'60%',
        paddingHorizontal: 10,
    },
    name: {
        fontSize: 18,
        color:colors.black, 
        fontWeight:'bold',     
    },
    price: {
        fontSize: 18,
        color:colors.primaryOrange,
        fontWeight:'bold',
        marginVertical: 10,
    }, 
    delete: {
        marginHorizontal: 30
    }
})