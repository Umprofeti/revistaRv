import React from 'react';
import Logo from '../img/logorv.svg';
import { HeaderPag } from '../components/HeaderPag';
export const Page6 = () =>{

 return (
   <div className='flex flex-col bg-black'>
      <HeaderPag Title='Staff'/>
      <div>
        <img src={Logo} alt='Logo RendezVous' className='w-[40%] sm:w-[20%] m-auto mt-10'/>
      </div>
      <div>
          <div>
            <h3 className='text-doradoRV text-2xl text-center font-Karla mt-10 font-bold'>EQUIPO RENDEZ-VOUS</h3>
            <span className='text-doradoRV text-2xl text-center font-Karla mt-1 block font-bold'>MAGAZINE LATINA</span>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>PRESIDENTE & CEO</p>
            <p className='text-white text-xl text-center font-Karla'>Jeyson González</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>EDITOR EN JEFE MARLOPORTS</p>
            <p className='text-white text-xl text-center font-Karla'>Orlando Allard</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>DIRECTOR COMERCIAL</p>
            <p className='text-white text-xl text-center font-Karla'>Jairo Daniel Guerra</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>DIRECTORA DE NEGOCIOS</p>
            <p className='text-white text-xl text-center font-Karla'>Daniela Cárdenas</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>EMBAJADOR DE LA MARCA RV</p>
            <p className='text-white text-2xl text-center font-karla'>Bolivia</p>
            <p className='text-white text-xl text-center font-Karla'>Claudia Amparo Del Villar Rocabado</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>DISEÑO EDITORIAL</p>
            <p className='text-white text-xl text-center font-Karla'>Daniel Sánchez</p>
            <p className='text-white text-xl text-center font-Karla'>Idenys González Paniza</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>WEBMASTER</p>
            <p className='text-white text-xl text-center font-Karla'>Jonathan Rodríguez</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>ASISTENTE DE PRESIDENCIA</p>
            <p className='text-white text-xl text-center font-Karla'>Katherine Sánchez</p>
          </div>
          <div>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>DISEÑO DE JOYERÍA</p>
            <p className='text-white text-xl text-center font-Karla'>Karen Cherigo</p>
          </div>
          <div className='mb-[6rem]'>
            <p className='text-white text-2xl text-center font-karla mt-10 font-bold'>DEPARTAMENTO LEGAL</p>
            <p className='text-white text-xl text-center font-Karla'>Graciela Rodríguez</p>
            <p className='text-white text-xl text-center font-Karla'>Jean Rivera</p>
          </div>
      </div>
    </div>
 );


}
