import React from 'react';
import {render} from 'react-dom';
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
//import 'bootstrap/dist/css/bootstrap.css'

import Greeter from './greeter';
import Headers from './headers';
import Bodys from './bodys';
import './mian.css';

render(<Headers />, document.getElementById('headers'));

render(<Bodys />, document.getElementById('bodys'));

render(<Greeter />, document.getElementById('foots'));


$("body").append("<div>hello world</div>")
