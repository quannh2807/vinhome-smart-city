import { Fonts } from '@/assets/fonts';
import { setThemeAction, useTheme } from '@/store/constant';
import { navigateToProfileScreen } from '@/utils/navigation';
import React, { memo, useCallback, useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const SContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-around;
	background-color: ${p => p.theme.backgroundColor};
`;
const SContent = styled.View`
	width: 60%;
`;
const SRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const SText = styled.Text<{ color?: string }>`
	font-size: 18px;
	color: ${p => (p.color ? p.color : p.theme.gray1)};
`;
const SSwitch = styled.Switch``;
const SButton = styled(TouchableHighlight).attrs(props => ({
	underlayColor: props.theme.gray5,
}))<{ color?: string }>`
	padding: 10px 15px;
	border-radius: 15px;
	background-color: ${p => (p.color ? p.color : p.theme.gray3)};
`;
const STextInput = styled(TextInput).attrs(props => ({
	placeholderTextColor: props.theme.gray3,
}))`
	width: 100%;
	height: 36px;
	margin: 15px 0;
	border-radius: 18px;
	font-size: 15px;
	border: 1px solid #9f9f9f;
`;

export const HomeScreen = memo(() => {
	const [textInput, setTextInput] = useState('');
	const theme = useTheme();

	const toggleSwitch = useCallback(() => {
		setThemeAction(theme === 'dark' ? 'light' : 'dark');
	}, [theme]);

	const goToProfile = useCallback(() => {
		navigateToProfileScreen({ text: textInput });
	}, [textInput]);

	return (
		<SContainer>
			<SContent>
				<SText>Home Screen</SText>
				<SRow>
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
				</SRow>

				<STextInput
					value={textInput}
					placeholder="Gửi dữ liệu sang profile screen"
					onChangeText={text => setTextInput(text)}
				/>
				<SButton onPress={goToProfile}>
					<SText color={'#fff'}>Go to Profile screen</SText>
				</SButton>
			</SContent>
		</SContainer>
	);
});
