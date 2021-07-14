import { HomeScreen } from '@/screens/Home/HomeScreen';
import { ProfileScreen } from '@/screens/Profile/ProfileScreen';
import { navigationRef } from '@/utils/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import { BottomNavigator } from './BottomNavigator';

const RootStack = createStackNavigator();

export const RootNavigator = React.memo(() => {
	const routeNameRef = React.useRef<string>('');
	const onStateChange = React.useCallback(() => {
		const previousRouteName = routeNameRef.current;
		// @ts-ignore
		let currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

		if (currentRouteName && previousRouteName !== currentRouteName) {
			// analytics().setCurrentScreen(currentRouteName);
			routeNameRef.current = currentRouteName;
		}
	}, []);

	return (
		<NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
			<RootStack.Navigator
				mode="card"
				headerMode="none"
				initialRouteName="BottomNavigator"
			>
				<RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
});
