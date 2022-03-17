import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country)
    const {area,population,region,name}=props.country

    return (
        <div className='country'>
        <h2>Country Name:{name.common}</h2>
        <h4> Population:{population}</h4>
        <p><small>Region:{region}</small></p>
        <p><small>Area:{area}</small></p>
      </div>
    );
};

export default Country;