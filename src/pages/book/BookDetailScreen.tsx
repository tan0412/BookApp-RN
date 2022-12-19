import { CommonActions } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, GestureResponderEvent } from "react-native";
import {PageProps} from '../../shared/type/PageProps';
import IconBack from '../../shared/icons/ic_back.svg';
import IconSearch from '../../shared/icons/ic_search_white.svg';
import IconHome from '../../shared/icons/ic_home_white.svg';
import IconShopping from '../../shared/icons/ic_shopping.svg';
import * as colors from '../../shared/theme/colors'
import BaseIcon from '../../shared/ui/BaseIcon';
import { NAVIGATIONS_ROUTE } from "../../navigation/routes";
import { normalize } from "../../utils/responsive";
import IconFavorite from "../../shared/icons/IconFavorite";
import BottomShopping from "./components/BottomShopping";
import bookApi from "../../api/BookApi";
import ReadMore from '@fawazahmed/react-native-read-more';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";

const BookDetailScreen = ({navigation, route} : PageProps,) => {
    const  id  = route.params
    const str: Array<string> = Object.values(id)
    const [data, setData] = useState({})
    const dispatch = useDispatch()
   
    useEffect(() => {
        const fetchGetBookDetails = async()=>  {
            try {
                const res = await bookApi.getApiBookDetail(str[0])
                
                setData(res)
            } catch (err) {
                console.log(err);
        }
    }
    fetchGetBookDetails()
},[str[0]])
    
    const handleNavigationHome = () => {
        navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_SHOPPING}))
    }
    const handleBack = () => {
        navigation.dispatch(CommonActions.goBack)
    }
    const handleDispatch = () => {
        dispatch(addToCart(data))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconBack}>
                    <BaseIcon name={<IconBack width={30} height={30}/>} handlerPress={handleBack}/>
                </View> 
                <View style={styles.icons}>
                    <BaseIcon name={<IconSearch width={30} height={30}/>}/>
                    <BaseIcon name={<IconHome width={30} height={25}/>} handlerPress={handleNavigationHome}/>
                    <BaseIcon name={<IconShopping width={30} height={25}/>}/>
                </View>
            </View>
            <ScrollView style={styles.scroll}>
            <View style={styles.image}>
                <Image source={{uri: data.image}} style={{ resizeMode:'cover', marginTop: 5, height: 400}} />
                <Text style={styles.text}>{data.subtitle}</Text>
                <View style={styles.heart}>
                    <IconFavorite isActive={true}/>
                </View>
                <Text style={[styles.text,{color: colors.primaryOrange}]}>{data.price} </Text>
            </View>
            <View style={styles.info}>
                <View style={styles.headInfo}>
                    <Text style={styles.textInfo}>Thông tin sản phẩm</Text>
                </View>
                <View style={styles.contentInfo}>
                    <Text style={styles.textContent}>Mã hàng:   {data.isbn10}</Text>
                    <Text style={styles.textContent}>Tác giả:   {data.authors}</Text>
                    <Text style={styles.textContent}>Nhà xuất bản:  {data.publisher}</Text>
                    <Text style={styles.textContent}>Năm xuất bản:  {data.year}</Text>
                    <Text style={styles.textContent}>Số trang:  {data.pages}</Text>
                    <Text style={styles.textContent}>Ngôn ngữ:  {data.language}</Text>
                    <Text style={[styles.textContent,{fontWeight: '600'}]}>Tóm tắt </Text>
                    <ReadMore numberOfLines={3} style={styles.textStyle} 
                                seeMoreStyle={{color:colors.primaryOrange}}
                                seeLessStyle={{color:colors.primaryOrange}}>
                    {
                        <Text style={styles.textDesc}>{data.desc}</Text>
                    }
                    </ReadMore>
                </View>
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <BottomShopping handleDispatch={handleDispatch}/>
            </View>
           
            
        </View>
    )
}

export default BookDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 60,
        backgroundColor: colors.primaryOrange,
        flexDirection: 'row',
        justifyContent: 'space-between',        
        alignItems:'center',
    },
    iconBack: {
        marginLeft: normalize(20),
    },

    icons: {
        flexDirection:'row',
        justifyContent: 'space-around',
        width: '50%',
        paddingHorizontal: 20,
    } ,
    image: {
       backgroundColor: colors.white,
    
    }, 
    heart: {
        alignSelf: 'flex-end',
        marginHorizontal: 20,
    },
    info: {
        backgroundColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    headInfo: {
        borderBottomWidth: 1,
    },
    text: {
        color: colors.black,
        fontSize: 16,
        marginHorizontal: 20,
        marginVertical: 5
    },
    textInfo: {
        fontSize: 20,
        color: colors.black,
        fontWeight: 'bold',
        marginVertical: 10
    },
    textContent: {
        fontSize: 16,
        color: colors.black,
        marginVertical: 5
    },
    textDesc: {
        fontSize: 15,
        color: colors.black,
        marginVertical: 5
    },
    textStyle: {
        color: colors.black,
        fontSize: 14,
        marginBottom: 5
    }
    
    
    
})