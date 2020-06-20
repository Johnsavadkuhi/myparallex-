
import {SET_LANGUAGE} from '../actions/actionType'

const initialState = {

    availableLanguages: {
        en: "English",
        fa:"فارسی",
        fr: "Français",
    },

    activeLanguage: 'en',

};


export function appReducer(state = initialState , action ){

    switch (action.type) {

        case SET_LANGUAGE: {

            let language = action.language;

            if (typeof state.availableLanguages[action.language] === 'undefined') {
                language = 'en';
            }

            // Lockr.set("language", language);

            return {
                ...state,
                activeLanguage: language,
            };
        }

        default:
            return state;
    }



}