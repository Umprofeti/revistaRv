import React from 'react';
import { HeaderPag } from '../components/HeaderPag';
import Categories from '../components/page3-components/Categories';
import FotoPag from '../img/contenido foto.svg';
import { Footer } from '../components/Footer';
export const Page4 = ()=>{

    return (
        <>
            <HeaderPag Title='CONTENIDO'/>
            <div className='ContentPage flex flex-col mt-2 mb-1'>
                <div className='grid grid-cols-2 overflow-hidden h-screen-80 lg:h-[55vw] xl:h-[55vw]'>
                     <div className='pl-2'>
                        <img src={FotoPag} className='items-center pl-2' alt=''/>
                    </div> 
                    <div className='ml-1 grid grid-row overflow-scroll xl:overflow-hidden overscroll-contain'>
                        <Categories title='Carta Editorial' desc='' author='Por: Jeyson González.'/>
                        <Categories title='Portada Empresarial' desc='' author='Por: Marisela Moreno'/>
                        <Categories title='Empresarios Categoría A' desc='Liderazgo de la mujer en los negocios digitales' author='Por: Rosmary Taylor.'/>
                        <Categories title='Escritorio Para Mentes Poderosas' author='Por: Kayra Hardy.'/>
                        <Categories title='Diplomático' desc='La visión de un joven político.' author='Por: Juan Diego Vásquez.'/>
                        <Categories title='Tinta de Oro' desc='Liderazgo Femenino empresarial: Clave para la sostenibilidad de los países.' author='Por: Débora Valera.' />
                        <Categories title='Cápsula Empresarial ' desc='La Buena Pesca' author='Por: María Patricia'/>
                        <Categories title='Marloport ' author='Por: Elvia Bustavino' desc='Panamá, un país que une al mundo'/>
                    </div>
                </div>
                <div className= 'grid grid-cols-2 ml-3 justify-between'>
                    <Categories title='Gastronomía Corporativa' desc='Los comensales regresan a los restaurantes' author='Por: Fifita Bichili.'/>
                    <Categories title='Tendencia Latina'  desc='Hogares prefabricadas y sostenibles' author='Por: Proyecto Toblerone.'/>
                    <Categories title='Especial' desc='Retos de la educación pos-pandemia' author='Por: Orlando Allard'/>
                    <Categories title='Sociedad' author='' desc='Boda Lemos Chellew' />
                </div>
                <Footer/>
            </div>
        </>
    );

}