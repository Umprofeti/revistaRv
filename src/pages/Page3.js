import React from 'react';
import { HeaderPag } from '../components/HeaderPag';
import Categories from '../components/page3-components/Categories';
import FotoPag from '../img/contenido foto.svg';
export const Page3 = () =>{

    return (
        <>
            <HeaderPag/>
            <div className='border-b-7 border-black'>
                <h3 className='font-Playfair text-4xl font-bold mb-3 mt-1 text-center'>CONTENIDO</h3>
            </div>
            <div className='ContentPage flex flex-col mt-2 mb-1'>
                <div className='grid grid-cols-2 overflow-hidden h-screen-80 lg:h-[40vw] xl:h-[40vw]'>
                <img src={FotoPag} className='items-center pl-2' alt=''/>
                    {/* <div className='pl-2'>
                        
                    </div> */}
                    <div className='ml-1 grid grid-row overflow-scroll lg:overflow-hidden overscroll-contain'>
                        <Categories title='Escritorio para mentes poderosas' desc='Lecciones y desafíos de panamá post covid-19 #2022' author='Kayra Harding'/>
                        <Categories title='Abogados gold' desc='La abogacía sin corbada' author='María Patricia Díaz de Santamaría.'/>
                        <Categories title='tinta de oro' desc='la visualisación de la mujer en altos cargos' author='Débora Valera.'/>
                        <Categories title='Marloports' author='Elvia Bustavino'/>
                        <Categories title='Gastronomía corporativa' desc='Los comensales vuelven a la mesa' author='Fifita Bichili.'/>
                        <Categories title='Tendencia latina' desc='Hogares prefabricadas y sostenibles' author='Proyecto Toblerone.' />
                    </div>
                </div>
                <div className= 'grid grid-cols-2 ml-3 justify-between'>
                    <Categories title='Empresarios' desc='El liderazgo de la mujer' desc2='en los negocios digitales' author='Rosemay Acosta Taylor.'/>
                    <Categories title='DIPLOMATICO' author='Juan Diego Vasquez.' desc='La visión de un joven político'/>
                    <Categories title='sociedad' desc='la boda del año' author=''/>
                    <Categories title='especial' author=''/>
                </div>
                <div className='border-t-2 border-black mb-[34px]'>
                    <p className='font-Karla font-bold text-xs'>RENDEZVOUSCORP.COM</p>
                </div>
            </div>
        </>
    );

}