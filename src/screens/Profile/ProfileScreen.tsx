import { HeaderBack } from '@/components/HeaderBack';
import { useNavigationParams } from '@/hooks/useNavigationParams';
import React, { memo } from 'react';
import styled from 'styled-components/native';

const SContainer = styled.View`
	flex: 1;
	background-color: ${p => p.theme.backgroundColor};
`;
const SText = styled.Text<{ color?: string }>`
	font-size: 18px;
	color: ${p => (p.color ? p.color : p.theme.gray1)};
`;

export interface ProfileScreenParams {
	text: string;
}

export const ProfileScreen = memo(() => {
	const { text } = useNavigationParams<ProfileScreenParams>();

	return (
		<SContainer>
			<HeaderBack title="Profile" />

			<SText>{`Text nhận được: ${text}`}</SText>
		</SContainer>
	);
});
