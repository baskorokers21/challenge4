import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Utama2 from '../Daftar/Utama2';

import Daftar from './Daftar'

const Utama2 = () => (
    <switch>
         <Route exatc path="/" component={Home} />
        <Route path="/Daftar" component={Daftar} />
    </switch>
)

export default Utama2;