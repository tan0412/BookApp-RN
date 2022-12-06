import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import BottomNavigation from './BottomNavigation/BottomNavigation';
import {PageProps} from '../shared/type/PageProps';

const Stack = createNativeStackNavigator();

const RootStack = ({navigation}: PageProps) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'BottomNavigation'}
                component={BottomNavigation}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default RootStack;