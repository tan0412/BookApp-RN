import React from "react";
import {View, StyleSheet, Text, FlatList, ScrollView , TouchableOpacity} from 'react-native'
import * as colors from '../../shared/theme/colors'
import { normalize } from "../../utils/responsive";
import { NotiData } from "../../data/mocks/Notification";
import IconUser from '../../shared/icons/ic_profile.svg'

import Spacer from "react-spacer";

const ProfileScreen = () => {
    return (
        <View style= {styles.container}>
            <View style= {styles.header}>
                <Text style= {styles.text}>Thông tin tài khoản</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.row}>
                <View style={styles.info}>
                  <IconUser />
                  <Text>Thông tin tài khoản</Text>
                </View>
                <TouchableOpacity>
                  <Text>Chỉnh sửa</Text>
                </TouchableOpacity>

              </View>
            <View style={styles.account}>
              <Text style={styles.text}>Ho va ten: </Text>
              <Text style={styles.text}>Email: </Text>
              <Text style={styles.text}>So don hang thanh cong : </Text>
              <Text style={styles.text}>Spps tien da thanh toan: </Text>
            </View>
            {/* <View style={styles.footer}>
              <TouchableOpacity>
                <Text st
              </TouchableOpacity> */}
           
           </View>
          
        </View>
    )
}

export default ProfileScreen;

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
        fontSize: 16,
        color: colors.black, 
        marginVertical: 5,
    }, 
    content: {
       backgroundColor:colors.white,
      
    },
    row: {
      flexDirection:'row',
      justifyContent: 'space-between',
      height: 50,
      backgroundColor:'white',
      alignItems:'center',
      borderBottomWidth: 2,
      borderBottomColor: colors.lightGray2
    },
    info:  {
      flexDirection:'row',
      alignItems:'center',
    },
    account: {
      paddingHorizontal: 20,
    },

})