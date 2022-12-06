// import React from "react";
// import {View, ViewProps, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native"
// import BookCategory from "../../../data/mocks/BookCategory";
// import BookCard from "../../../shared/ui/BookCard";
// import * as colors from '../../../shared/theme/colors';

// type BookListProps = {
//    category: string
//    navigation: () => void;
// }

// const BookList = (props: BookListProps) => {
//     const bookListData = BookCategory
    
//     return (
//         <View style={styles.bookList}>
//             <Text style={styles.textContent}>{props.category}</Text>
//             <View>
//             <FlatList 
//                 data={bookListData}
//                 renderItem={({item, index}) => (
//                     <TouchableOpacity onPress={props.navigation}>
//                     <BookCard img={item.img} name={item.name} price={item.price}/>
//                     </TouchableOpacity>
//                 )}
//                 horizontal
//                 showsHorizontalScrollIndicator={false} 
//                 keyExtractor={item => `${item.id}`}
//             />
//             </View>
//             <View style={styles.viewBox}>
//                 <TouchableOpacity style={styles.box}>
//                     <Text style={styles.text}>Xem thêm</Text>
//                 </TouchableOpacity>
//             </View>
//         </View> 
//     )
// }

// export default BookList;

// const styles = StyleSheet.create({
//     bookList: {
//         height: 450,
//         backgroundColor: 'white',
//     }, 
//     textContent:{
//        marginHorizontal: 20,
//        marginTop: 20,
//        marginBottom: 15,
//        fontSize: 16, 
//        color: colors.black, 
//        fontWeight:'700'
//     },
//     box:{
//        borderWidth: 1,
//        height: 35,
//        width: 150,
//        justifyContent: 'center',
//        alignItems: 'center',
//        borderRadius: 5,
//        borderColor: colors.primaryOrange,
//     }, 
//     viewBox:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
       
//     },
//     text: {
//         fontSize: 15, 
//         color: colors.primaryOrange,
//         fontWeight: 'bold', 
//     }
// })