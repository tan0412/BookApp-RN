// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput} from 'react-native';
// import IconGrid from '../../../shared/icons/ic_grid.svg';
// import IconSearch from '../../../shared/icons/ic_search.svg';
// import IconShopping from '../../../shared/icons/ic_shopping.svg';
// import * as colors from '../../../shared/theme/colors';
// import ModalBase from '../../../shared/ui/ModalBase';

// type HeaderProps = {
//     handleNav: () => void;
// }
// const Header = (props: HeaderProps) => {
//     const [modalVisible, setModalVisible] = useState(false)
//     const toggleModal = () => {
//         setModalVisible(!modalVisible)

//     }
    
//     return (
//         <View style={{backgroundColor: 'red'}}>  
//         <View style={styles.header}>
//             <TouchableOpacity>
//                 <IconGrid width={30} height={30} />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.boxSearch} onPress={toggleModal}>
//                 <IconSearch style={styles.icon} />
//                 <TextInput 
//                     placeholder='Search...'
//                     onFocus={toggleModal}/>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={props.handleNav}>
//                 <IconShopping width={30} height={30} />
//             </TouchableOpacity>
//         </View>
//         <ModalBase visible={modalVisible} toggleModal={toggleModal} />
//         </View>
//     )
// }

// export default Header;

// const styles = StyleSheet.create({
//     header: {
//         height: 60,
//         backgroundColor: colors.primaryOrange,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems:'center',
//     }, 
//     boxSearch:{
//         flex: 0.75,
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderColor: colors.white,
//         borderRadius: 5,
//         height: 40,
//         width: 260,
//         backgroundColor: colors.white,
//         alignItems: 'center',
//     },
//     icon: {
//         marginHorizontal: 10,
//     },
//     text: {

//     }
// })