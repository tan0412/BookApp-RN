import React from 'react';
import {TouchableOpacity, View} from 'react-native';


type BaseIconProps= {
    name: any;
    handlerPress?: () => void;
}

const BaseIcon = (props: BaseIconProps) => {
    console.log(props.name)
    return (
        <TouchableOpacity onPress={props.handlerPress}>
            {props.name}
        </TouchableOpacity>
    )
}

export default BaseIcon;