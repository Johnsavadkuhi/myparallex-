import * as messages_en from "./en.js";
import * as messages_fa from "./fa.js";
import * as messages_fr from "./fr.js";

import {addLocaleData} from 'react-intl';

import faLocaleData from 'react-intl/locale-data/fa';
import frLocaleData from 'react-intl/locale-data/fr';
 import enLocaleData from 'react-intl/locale-data/en';

addLocaleData([ ...enLocaleData, ...faLocaleData, 
      ...frLocaleData,]);

export const languages = {
    'en': messages_en.messages,
    'fa': messages_fa.messages,
    'fr': messages_fr.messages,
};
