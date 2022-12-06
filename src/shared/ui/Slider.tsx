import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Slider = () => {
    return (
        // <View style={styles.container}>
            <Swiper autoplay activeDotColor='#ffffff'>
                <View style={styles.slide}>
                    <Image
                        source={
                        require('../icons/image1.png')
                        }
                    resizeMode="cover"
                    style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={
                        require('../icons/image2.png')
                        }
                    resizeMode="cover"
                    style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        source={
                        require('../icons/image3.jpg')
                        }
                    resizeMode="cover"
                    style={styles.sliderImage}
                    />
                </View>
            </Swiper>
        // </View>
    )
}

export default Slider;

const styles = StyleSheet.create({

    slide: {
        flex: 1,
        justifyContent: 'center',
        marginTop:10,
        backgroundColor: 'red',
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf:'center',
    }


})