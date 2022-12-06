import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import * as colors from '../../../shared/theme/colors'

type NotificationCardProps = {
    tilte: string,
    date: string,
    detail: string,
};

const NotificationCard = (props: NotificationCardProps) => {
    return (
        <View style={styles.notificationCard}>
            <View style={styles.row}>
                <Text style={styles.textTitle}>{props.tilte}</Text>
                <Text style={styles.text2}>{props.date}</Text>
            </View>
            <View style={styles.viewDetail}>
                <Text style={styles.detail}>{props.detail}</Text>
            </View>
        </View>
    )
}

export default NotificationCard;

const styles = StyleSheet.create({
    notificationCard: {
        flex: 1,
        height: 100,
        borderWidth: 1,
        marginVertical: 5,
        borderColor: colors.lightGray4,
        backgroundColor: colors.white
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 10,
    },
    textTitle: {
        fontSize: 15, 
        fontWeight: '600', 
        color: colors.black,
        width: '75%',
        paddingHorizontal: 10,
    },
    text2: {
        fontSize: 15, 
        color: colors.lightGray,
        width: '25%',
      
    },
    detail: {
        fontSize: 15, 
        color: colors.black, 
    },
    viewDetail: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
})