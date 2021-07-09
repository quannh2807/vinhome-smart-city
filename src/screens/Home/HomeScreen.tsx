import React, { memo } from 'react';
import styled from 'styled-components/native';

const SContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
const SText = styled.Text`
	font-size: 18px;
`;

export const HomeScreen = memo(() => {
	return (
		<SContainer>
			<SText>Home Screen</SText>
		</SContainer>
	);
});
