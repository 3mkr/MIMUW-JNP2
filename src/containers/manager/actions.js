import { CHANGE_THEME, SET_GIF, SET_GIF_TYPE } from './const';

export const changeTheme = () => ({
    type: CHANGE_THEME
});

export const setGif = (count) => ({
    type: SET_GIF,
    count
});

export const setGifType = (url) => ({
    type: SET_GIF_TYPE,
    url
});
