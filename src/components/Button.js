import React, { useState, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Loading } from './Loading';
const Button = ({value = 1, children}) =>{

    const [pag, setPag] = useState(value);
    const handleAdd = (e) =>{
        if(pag !==29){
            setPag(pag + 1);
        }
    }
    const handleSubs = (e) =>{
        if(pag !== 1){
            setPag(pag - 1);
        }
        
    }
    const pages = React.Children.toArray(children);
    const currentPage = pages[pag - 1]
    useLayoutEffect(() =>{
        return () => {
           console.log('Hola que tal');
        }
    },[pag]);
    return(
        <>
            <div className='PáginasRevista bg-black lg:bg-fondoPag1 lg:bg-no-repeat lg:bg-cover sm:mb-10'>
                <div className='RevistaContent lg:w-[70vw] lg:m-auto bg-white lg:shadow-2xl lg:block'>
                    {currentPage}
                </div>
            </div>
            <div className='BotonIntereactivo sm:fixed sm:top-[92.7vh] drop-shadow-2xl mt-2 text-center 
                            w-full grid grid-flow-col lg:w-screen-50 lg:left-[25vw]'>
                <button className='border-2 border-black bg-black rounded-l-2xl pt-1 pb-1 'onClick={handleSubs}>
                    <FontAwesomeIcon className='text-basicoRv' icon={faArrowLeft}/></button>
                <span className='border-t-2 border-b-2 bg-black border-black text-white  pt-1 pb-1'>{pag}</span>
                <button className='border-2 border-black bg-black rounded-r-2xl pt-1 pb-1'onClick={handleAdd}>
                    <FontAwesomeIcon className='text-basicoRv' icon={faArrowRight}/>
                </button> 
            </div>
        </>
    );
}

export default Button;