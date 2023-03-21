import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { normalize } from "../../utils/responsive";
import ShoppingCart from "./components/ShoppingCart";
import * as colors from "../../shared/theme/colors"
import PayShopping from "./components/PayShopping";
import bookApi from "../../api/BookApi";
import Loading from "../../shared/ui/Loading";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { removeCart } from "../../redux/actions/cartAction";

const ShoppingScreen =  () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
     const cart = useSelector((state:RootState) => state.cart)
    const dispatch = useDispatch()
    // useEffect(() => {
    //   const fetchBookList = async () => {
    //     try {
    //         const response = await bookApi.getApiBook(); 
    //         setIsLoading(false)
    //         setData(response?.books)
    //   } catch (err) {
    //     console.log(err)
    //   }
    //   }
    //   fetchBookList()
    // },[])
    useEffect(() => {
        setData(cart)
    //    if (data.length > 0) {
    //     setIsLoading(false)
    // }
    }, [cart])
 
   console.log(cart)
    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <Text style= {styles.text}>Gio hang</Text>
            </View>
            { !isLoading ? 
            <Loading/> :
            <ScrollView>
                {data.map((item: any, index) => {
                    return (
                    <ShoppingCart
                        key={item.isbn13} 
                        img={item.image} 
                        name={item.title} 
                        price={item.price}  
                        handleRemove={() => dispatch(removeCart(item, index))}
                        />
                    )    
                })}
               
            </ScrollView>}
            
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