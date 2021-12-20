import React from 'react';
import Editorial from '../img/7carta-editorial.svg';
import { HeaderPag } from '../components/HeaderPag';
export const Page7 = () => {

    return(
        <>
            <HeaderPag Title='Carta Editorial'/>
            <img src={Editorial} alt=''/>
        </>
    );


}