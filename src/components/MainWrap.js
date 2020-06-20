import React , {useEffect} from "react"
import { setLanguage} from "../state_manager/actions" 
import {connect} from "react-redux";
import {IntlProvider} from "react-intl";
import {languages} from "../translations";
import {HashRouter as Router } from "react-router-dom";


function MainWrap(){

    useEffect(() => console.log('mounted'), []);



}

export default connect(null , null )(MainWrap) 