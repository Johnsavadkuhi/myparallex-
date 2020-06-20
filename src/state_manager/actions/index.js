import {SET_LANGUAGE}  from './actionType' 

export const setLanguage = (language = 'en') => ({
    type: SET_LANGUAGE,
    language,
});

