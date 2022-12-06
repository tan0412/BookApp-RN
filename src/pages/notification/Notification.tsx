import React from "react";
import {View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import * as colors from '../../shared/theme/colors'
import { normalize } from "../../utils/responsive";
import { NotiData } from "../../data/mocks/Notification";
import NotificationCard from "./components/NotificationCard";
import Spacer from "react-spacer";

const Notification = () => {
    const notiListData = NotiData
    const footerConponent = () => {
        return (
            <Spacer height={120} />
        )
    }

    return (
        <View style= {styles.container}>
            <View style= {styles.header}>
                <Text style= {styles.text}>Thông báo</Text>
            </View>
            <View style={styles.content}>
            <FlatList 
                data={notiListData}
                renderItem={({item, index}) => (
                    <NotificationCard tilte={item.name} date={item.date} detail={item.detail}/>
                )}
                keyExtractor={item => `${item.id}`}
                horizontal={false}
                ListFooterComponent = {footerConponent}
            />
           </View>
          
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    container: {

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
    content: {
       
        
    }
})