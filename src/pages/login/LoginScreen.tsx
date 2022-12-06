import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { MAX_HEIGHT, normalize } from '../../utils/responsive';
import * as Animatable from 'react-native-animatable';
import BaseTextInput from '../../shared/ui/BaseTextInput';
import IconMail from '../../shared/icons/ic_mail.svg';
import IconEyes from '../../shared/icons/ic_eyes.svg';
import IconLock from '../../shared/icons/ic_lock.svg';
import IconEyeOff from '../../shared/icons/ic_eyes_off.svg';
import {PageProps} from '../../shared/type/PageProps';
import BaseButton from '../../shared/ui/BaseButton';
import { CommonActions } from '@react-navigation/native';
import { NAVIGATIONS_ROUTE } from '../../navigation/routes';
const LoginScreen = ({navigation}: PageProps) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [isCheckEmail, setIsCheckEmail] = useState(false)
    const [isCheckPassword, setIsCheckPassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleNavHome = () => {
        // if (isCheckEmail && isCheckPassword) {
            navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.ROOT_STACK}))
        // }
        // else 
        // Alert.alert('Khong hop le')
    }
    const handleNavSignIn = () => {
        navigation.dispatch(CommonActions.navigate({name: NAVIGATIONS_ROUTE.SCREEN_SIGNUP}))
    }
    const checkValidationEmail = (value: string) => {
       setEmail(value)
        if (value.includes('@') )
            {
                setIsCheckEmail(true)
            }
        else setIsCheckEmail(false)
    }
    const checkValidationPasswords = (value: string) => {
        setPassword(value)
        if (value.length > 6) {
            setIsCheckPassword(true)
        } else setIsCheckPassword(false)
    }
    const renderIconEyes = () => {
        const handleSecureTextEntry = () =>{
        setSecureTextEntry(prev => !prev)
        }
        return (
            <TouchableOpacity onPress={handleSecureTextEntry}>
                { secureTextEntry ? <IconEyeOff/> : <IconEyes/>}
            </TouchableOpacity>
        )
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageBackground style={styles.ImageBackground} 
                source={require('../../shared/icons/SignIn_background2.jpeg')} />
            </View>  
            <Animatable.View style={styles.content} animation={'fadeInUpBig'}>
                <View style={styles.textHeader}>
                    <Text style={styles.text}>
                        Welcome back
                    </Text>
                    <Text style={styles.text1}>
                       Login to your account
                    </Text>
                </View>
                <View style={styles.textInput}>
                    <BaseTextInput
                        icon={<IconMail/>}
                        placeholder={'Email'}
                        isPassword={false}
                        onChangeText={text => checkValidationEmail(text)}
                        rightIcon={<></>}
                        value={email}
                        />
                    </View>
                <View style={styles.textInput}>  
                    <BaseTextInput
                        icon={<IconLock/>}
                        placeholder={'Password'}
                        isPassword={secureTextEntry}
                        onChangeText={text => checkValidationPasswords(text)}
                        value={password}
                        rightIcon={renderIconEyes()}
                        />
                </View>
                <View style={styles.loginStyle}>
                    <BaseButton 
                        containerStyle={styles.button}
                        title={'Login'}
                        titleStyle={styles.textLogin}
                        action={handleNavHome}
                    />
                    <View style={styles.footer}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={handleNavSignIn}>
                            <Text style={styles.textSign}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    header: {
        flex: 1.5,
    },
    ImageBackground: {
        height: MAX_HEIGHT/2,
        width: '100%',
      
    },
    content: {
        backgroundColor: 'white',
        width: '100%',
        flex: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        paddingHorizontal: 20,
        paddingVertical: 20, 
    },
    textHeader: {
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
    text1: {
        color: '#A0A0A0',
        fontSize: 15,
        marginTop: 5, 
    }, 
    textInput: {
        marginTop: 20,
    }, 
    button: {
        backgroundColor: '#FF8C00',
        height: 50,
        borderRadius: 50,
        marginHorizontal: normalize(16)
    }, 
    textLogin: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    loginStyle: {
        flex: 1,
        justifyContent: 'center'
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    }, 
    textSign: {
        color: '#FF8C00',
        fontWeight: 'bold',
    }
});