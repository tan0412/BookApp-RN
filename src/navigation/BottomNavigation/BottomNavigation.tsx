import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../pages/home/HomeScreen";
import Notification from "../../pages/notification/Notification";
import ProfileScreen from "../../pages/profile/ProfileScreen";
import TabBar from "./TabBar";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
   
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home"
            tabBar={props => <TabBar {...props} />}>
        
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Favorite" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Notification" component={Notification}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation;