import { Fonts } from '@/assets/fonts';
import { setThemeAction, useTheme } from '@/store/constant';
import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components/native';

const SContainer = styled.View<{color?: string}>`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${p => p.color ? p.color : p.theme.backgroundColor};
`;
const SText = styled.Text`
	font-size: 18px;
	color: ${p => p.theme.gray1};
`;
const SSwitch = styled.Switch``;

export const HomeScreen = memo(() => {
	const theme = useTheme();

	const toggleSwitch = useCallback(() => {
		setThemeAction(theme === 'dark' ? 'light' : 'dark');
	}, [theme]);

	return (
		<SContainer color={"lightblue"}>
			<SText>Home Screen</SText>
			<SText
				style={{ fontFamily: Fonts.Bold }}
			>{`Current theme : ${theme}`}</SText>

			<SSwitch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={theme === 'light' ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={toggleSwitch}
				value={theme === 'light'}
			/>
		</SContainer>
	);
});
