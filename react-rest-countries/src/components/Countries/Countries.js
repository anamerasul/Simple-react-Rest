import React from 'react';

import {useState,useEffect} from 'react';
import Country from '../Country/Country';

const Countries = () => {

  const [countries, setCountries] = useState([])
  useEffect(() => {
  fetch(`https://restcountries.com/v3.1/all`)
  .then(res =>res.json() )
  .then(data=>setCountries(data))
  }, [])
  
    return(
      <div>
        <h1>Visiting countries</h1>
        <h3>Available :{countries.length}</h3>
        {
          countries.map(country=>
          
        <Country 
         country={country}
         ></Country>
         
         )
        }
      </div>
      
    
    );
};


// function Country(props){
//         return(
//           <div>
//             <h2>Name:{props.name}</h2>
//             <h4> Population:{props.population}</h4>
//           </div>
//         )
//       }
export default Countries;


//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//   fetch(`https://restcountries.com/v3.1/all`)
//   .then(res =>res.json() )
//   .then(data=>setCountries(data))
//   }, [])
  
//     return(
//       <div>
//         <h1>Visiting countries</h1>
//         <h3>Available :{countries.length}</h3>
//         {
//           countries.map(country=><Country name={country.name.common}
//          population={country.population} ></Country>)
//         }
//       </div>
//     )
//   }
  
//   function Country(props){
//     return(
//       <div>
//         <h2>Name:{props.name}</h2>
//         <h4> Population:{props.population}</h4>
//       </div>
//     )
//   }