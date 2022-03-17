


// import default App

// import React from 'react';
// import {useState,useEffect} from 'react';


// function LoadCountries(){
//     const [countries, setCountries] = useState([])
//     useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(res =>res.json() )
//     .then(data=>setCountries(data))
//     }, [])
    
//       return(
//         <div>
//           <h1>Visiting countries</h1>
//           <h3>Available :{countries.length}</h3>
//           {
//             countries.map(country=><Country name={country.name.common}
//            population={country.population} ></Country>)
//           }
//         </div>
//       )
//     }
    
//     function Country(props){
//       return(
//         <div>
//           <h2>Name:{props.name}</h2>
//           <h4> Population:{props.population}</h4>
//         </div>
//       )
    // }

// export default countries;

import React from 'react';

const Countries = () => {
  return (
    <div>
      <h2>Country in others file</h2>
    </div>
  )
}

export default Countries;