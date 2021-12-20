import React from 'react';
import { HeaderPag } from '../components/HeaderPag';

export const Page9 = () => {

    return(
        <>
            <HeaderPag Title= 'PORTADA EMPRESARIAL' />
            <img src={require('../img/9-5reglasdexito.svg').default} alt='5 Reglas de exito'/>
        </>
    );


}