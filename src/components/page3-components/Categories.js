import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({title, desc,desc2,  author})  =>{


    return(
        <div className='Category flex flex-col mt-1 mb-1'>
            <span className='text-sm font-Karla font-bold uppercase'>-{title}</span>
            <span className='text-xs pl-1 font-Karla font-normal uppercase'>{desc}</span>
            <span className='text-xs pl-1 font-Karla font-normal uppercase'>{desc2}</span> 
            <span className='text-xs pl-1 fontKarla font-normal'>{author}</span>
        </div>
    );


} 

Categories.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Categories;