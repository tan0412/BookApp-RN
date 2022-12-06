import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar, 
  Dimensions,
  TextInput
} from 'react-native';

type BaseTextInputProps = {
    icon: any,
    placeholder: string,
    rightIcon: any,
    value?: string,
    isPassword: boolean,
    onChangeText: (text: string) => void;
}
const BaseTextInput = (props: BaseTextInputProps) => {
    return (
        <View style={styles.container}>
            {props.icon}
            <TextInput 
                style={styles.textInput}
                placeholder={props.placeholder}
                secureTextEntry={props.isPassword}
                onChangeText={text => props.onChangeText(text)}
                value={props.value}
                />
            {props.rightIcon}
        </View>
    )
}

export default BaseTextInput;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        flexDirection: 'row',  
        alignItems: 'center',
        borderBottomColor: '#f2f2f2'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10, 
    }
});