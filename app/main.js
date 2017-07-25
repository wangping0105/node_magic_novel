import React from 'react';
import {render} from 'react-dom';
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
//import 'bootstrap/dist/css/bootstrap.css'

import Greeter from './greeter';
import './mian.css';

render(<Greeter />, document.getElementById('root'));

$("body").append("<div>hello world</div>")