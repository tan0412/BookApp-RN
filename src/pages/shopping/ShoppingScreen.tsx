import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { normalize } from "../../utils/responsive";
import ShoppingCart from "./components/ShoppingCart";
import * as colors from "../../shared/theme/colors"
import PayShopping from "./components/PayShopping";
import axios from "axios";

import bookApi from "../../api/BookApi";
import { get } from "immer/dist/internal";

const ShoppingScreen =  () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
      const fetchBookList = async () => {
        try {
            const response = await bookApi.getApiBook(); 
            setData(response?.books)
           
      } catch (err) {
        console.log(err)
      }
      }
      fetchBookList()
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