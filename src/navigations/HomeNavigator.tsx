import { HomeScreen } from '@/screens/Home/HomeScreen';
import { ProfileScreen } from '@/screens/Profile/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack'
import React, { memo } from 'react'
import { View, Text } from 'react-native'

const HomeStack = createStackNavigator();

export const HomeNavigator = memo(() => {
    return (
        <HomeStack.Navigator initialRouteName="HomeScreen" headerMode="none">
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </HomeStack.Navigator>
    )
}
)
