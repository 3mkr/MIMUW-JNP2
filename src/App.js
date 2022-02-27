import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from './themes/index';

import { Manager } from './containers/manager/index';
import { themeSelector } from './containers/manager/selectors';
import { THEME } from './containers/manager/const';
import { changeTheme } from './containers/manager/actions';

export const App = () => {
    const dispatch = useDispatch();

    const theme = useSelector(themeSelector); 
           
    const themeToggler = () => {
        dispatch(changeTheme());    
    }

    return (
        <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>
                <>
                <GlobalStyles/>
                    <button onClick={themeToggler}>Zmień motyw</button>
                    <Manager />
                </>
        </ThemeProvider>
    );
};