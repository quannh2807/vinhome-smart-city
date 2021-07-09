import { darkMode, lightMode } from "@/assets/themes";
import { useTheme } from "@/store/constant";
import '@/types';
import React, { memo, PropsWithChildren } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from "styled-components/native";


export const UIKitProvider = memo(function UIKitProvider({children}: PropsWithChildren<any>) {
    const currentTheme = useTheme();

    return (
        <ThemeProvider theme={currentTheme === 'dark' ? darkMode : lightMode}>
            <>
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                    barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'}
                />
                {children}
            </>
        </ThemeProvider>
    )
});
