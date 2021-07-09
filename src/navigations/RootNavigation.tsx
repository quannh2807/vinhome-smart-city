import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '@/utils/navigation';

import { HomeScreen } from '@/screens/Home/HomeScreen';

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
			<RootStack.Navigator mode="modal" headerMode="none">
				<RootStack.Screen name="Root" component={HomeScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
});
