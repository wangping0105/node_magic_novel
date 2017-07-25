//module.exports = function() {
//    var greet = document.createElement('div');
//    greet.textContent = "Hi there and greetings!";
//    return greet;
//};
//
//var config = require('./config/config.json');
//
//module.exports = function() {
//    var greet = document.createElement('div');
//    greet.textContent = config.greetText;
//    return greet;
//};

import React, {Component} from 'react'
import config from '../config/config.json';
import styles from './greeter.css';

class Greeter extends Component{
    render() {
        return (
            <div className ={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter