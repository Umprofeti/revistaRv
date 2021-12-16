import React from 'react';
import FotoCartaEdit from '../img/fotoCartaeditorial.svg';
export const Page5 = () => {

    return(

        <div className='bg-black mb-7'>
            <h2 className='font-Playfair text-doradoRV text-center pt-3 lg:text-[2rem]'>CARTA EDITORIAL</h2>
            <div className='flex flex-col mt-5  '>
                <div className='grid grid-cols-2 pl-3 pr-3'>
                    <div className='flex flex-col mr-2'>
                        <p className='first-letter:text-doradoRV 
                        first-letter:text-2xl text-white font-Karla text-base
                        text-justify lg:first-letter:text-4xl'>
                            Pronto despedimos el 2021 y la agenda mundial esta casi 
                            lista para el 2022.</p>
                        <p className='ParrafoBlanco'>
                            El precio del combustible subirá cada día
                            más, la crisis sanitaria en Latinoamérica
                            seguirá siendo la misma, el productor
                            agropecuario sentirá menos apoyo, el cliente
                            se volverá más exigente y el E-comerce
                            seguirá abriendo camino para mejorar
                            nuestras vidas.
                        </p>
                        <p className='ParrafoBlanco'>
                            Podría decir que el próximo año,sería un año
                            incierto, buscando la estabilidad laboral,
                            familiar y tratando de recuperar nuestras
                            propias vidas.
                            Que difícil es todo esto y más cuando
                            tenemos países tratando de salir de una
                            crisis
                        </p>
                        <p className='ParrafoDorado'>
                        "Veo gobernantes trabajando por
                        su país, pero también veo la
                        desigualdad de algunos; nunca
                        vamos a entender quienes
                        gobiernan cada espaciode este
                        mundo”
                        </p>
                        <p className='ParrafoBlanco' >
                        Quiero darle las gracias y mi respeto a cada
                    empresario de Latinoamérica,por sugran
                    labor en reactivar la economía y su apoyo a la
                    normalidad.
                        </p>
                    </div>
                    <div>
                        <img src={FotoCartaEdit} alt=''/>
                    </div>
                </div>
                <div className='mt-1 mb-3 pr-3 pl-3'>
                    <p className='ParrafoDorado'>
                    “Crisis significa oportunidad” fue mi lema al inicio del 2021 ,esto me
                        hizo recordar que teníamos que reinventarnos o pasaríamos a la
                        historia de la cual nadie hablaría.
                    </p>
                    <p className='ParrafoBlanco'>
                        Desde ese momento supimos la necesidad de las empresas, en querer humanizar sumarca. Por
                        eso creamos una revista 100% digital que llevara un nombre autentico, “RENDEZ-VOUS”, que se
                        comprometiera en ser un aliado estratégico, para cada unade ellas y se volviera una conexión
                        empresarial.
                    </p>
                    <p className='ParrafoBlanco'>
                        Rendez-Vous, es una revista empresarial, social y corporativa, para pequeñas, medias y grandes
                        empresas de Latinoamérica, con el principal objetivo de ser parte de la reactivación economica
                        de los paises.
                    </p>
                    <p className='ParrafoBlanco'>
                        Tengo claro que la situación en cada país es difícil ,no obstante, 
                        la idea es ser la solución, posiocionar su marca, su producto y servicio. 
                        Queremos llevarlos a otro nivel, humanizando su empresa con sus clientes 
                        y darles todo el alcance posible para el éxito dentro y fuera de su país.
                    </p>
                    <p className='ParrafoDorado'>
                    “Si humanizas tu marca, serás historia para el futuro”
                    </p>
                    <p className='ParrafoBlanco'>
                    Quiero darle las gracias a Marisela Moreno, pora compañarme en nuestra carta editorial y por
                    siempre creer en los cambios y el futuro.
                    </p>
                    <p className='ParrafoBlanco'>
                    Por supuesto agradecer a cada uno de nuestro maravilloso equipo, por ser parte Rendez-Vous
                    Magazine: JairoGuerra, OrlandoAllard, Daniel Sánchez, Mary Carmen Barrios, Claudia Amparo
                    Del Villar Rocabado, Daniela Cárdenas, Idenys Gonzalez Paniza, Katherine Sánchez, Jonathan
                    Rodriquez.
                    </p>
                    <p className='ParrafoBlanco'>
                        Agradezco el apoyo desde el día uno : Alexandra Bejarano, Patricia Velasquez, Aquilino Vargas,
                        Ana Belén De Hoyos, Norberto Rojas, Hilda Hernandez, Yaritza De León, Sergio Luís Carreón,Angel
                        Alabarca.
                    </p>
                    <div>
                        <p className='ParrafoDorado2'>
                            ¡FelizNavidad
                        </p>
                        <p className='ParrafoDorado2 leading-[0.25rem]' >
                        y Prospero Año Nuevo 2022!
                        </p>
                    </div>
                    <p className='ParrafoBlanco'>Te invito a que conozcas a Rendez-Vous Magazine,<span className='text-doradoRV'> “La Revista”</span> que te brindará las
                        herramientas necesarias para lograr el éxito de tu negocio.</p>
                </div>
                <div className='text-right text-white font-Karla border-b-4 border-doradoRV lg:text-[14px] text-[9px] mb-10 pr-3'>
                    <p>
                        Jeyson Gonzalez
                    </p>
                    <p>
                        Presidente & CEO
                    </p>
                </div>
            </div>
        </div>

    );


}