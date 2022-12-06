import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { normalize } from "../../utils/responsive";
import ShoppingCart from "./components/ShoppingCart";
import * as colors from "../../shared/theme/colors"
import BookCart from "../../data/mocks/BookCart";
import Spacer from "react-spacer";
import PayShopping from "./components/PayShopping";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState, store } from '../../redux/store';

const ShoppingScreen = () => {
    const [data, setData] = useState([])
    const counter = useSelector((state:RootState) => state.count.value)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://api.itbook.store/1.0/new') 
            .then((res) => setData(res.data.books))
      },[])
      
    
    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <Text style= {styles.text}>Gio hang</Text>
            </View>
            <ScrollView>
                {data.map((item: any) => {
                    return (
                    <ShoppingCart key={item.isbn13} img={item.image} name={item.title} price={item.price} />
                    )
                })}
                {/* <FlatList 
                data={data}
                renderItem={({ item }) => (
                    <ShoppingCart img={item.img} name={item.name} price={item.price} />
                )}
                keyExtractor={item => `${item.id}`} 
                // ListFooterComponent={footer}
                /> */}
            </ScrollView>
            
            <PayShopping />
           
           
        </View>
    )}

export default ShoppingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: normalize(60),
        backgroundColor: colors.primaryOrange,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 22,
        color: colors.white, 
        fontWeight: 'bold', 
    }, 
})