import { CommonActions } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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


const BookDetailScreen = ({navigation, route} : PageProps,) => {
    const  id  = route.params
    const str: Array<string> = Object.values(id)
    const [data, setData] = useState({})
    
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
 
    const handleBack = () => {
        navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_LOGIN}))
    }
    const handleNavigationHome = () => {
        navigation.dispatch(CommonActions.goBack)
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
                <Text style={styles.text}>{data.price} </Text>
            </View>
            <View style={styles.info}>
                <View style={styles.headInfo}>
                    <Text style={styles.textInfo}>Thông tin sản phẩm</Text>
                </View>
                <View style={styles.contentInfo}>
                    <Text style={styles.textContent}>Mã hàng: {data.isbn10}</Text>
                    <Text style={styles.textContent}>Tác giả : {data.authors}</Text>
                    <Text style={styles.textContent}>Nhà xuất bản: {data.publisher}</Text>
                    <Text style={styles.textContent}>Năm xuất bản: {data.year}</Text>
                    
                </View>
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <BottomShopping />
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
    },
    info: {
        backgroundColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    headInfo: {
        height: 30,
        borderBottomWidth: 1,
    },
    footer: {
        alignItems:'flex-end',
    }
    
})