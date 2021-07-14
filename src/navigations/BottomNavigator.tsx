import { IC_TAB_HOME, IC_TAB_MARKET, IC_TAB_MESSAGE } from '@/assets';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { memo } from 'react';
import styled from 'styled-components/native';
import { HomeNavigator } from './HomeNavigator';

const Icon = styled.Image<{ focused?: boolean; color?: string; size?: any }>`
	width: ${p => (p.size ? p.size : '30px')};
	height: ${p => (p.size ? p.size : '30px')};
	tint-color: ${p => (p.color ? p.color : p.theme.gray3)};
`;

const BottomTab = createBottomTabNavigator();

export const BottomNavigator = memo(() => {
	return (
		<BottomTab.Navigator
			initialRouteName="HomeNavigator"
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let icon;

					switch (route.name) {
						case 'HomeNavigator':
							icon = IC_TAB_HOME;
							break;
						case 'Chat':
							icon = IC_TAB_MESSAGE;
							break;
						case 'Market':
							icon = IC_TAB_MARKET;
							break;

						default:
							break;
					}

					return <Icon size={size} color={color} source={icon} />;
				},
			})}
		>
			<BottomTab.Screen
				name="HomeNavigator"
				component={HomeNavigator}
				options={{
					title: 'Trang chủ',
				}}
			/>
			<BottomTab.Screen
				name="Chat"
				component={HomeNavigator}
				options={{
					title: 'Trò chuyện',
				}}
			/>
			<BottomTab.Screen
				name="Market"
				component={HomeNavigator}
				options={{
					title: 'Market',
				}}
			/>
		</BottomTab.Navigator>
	);
});
