import React from 'react';
const Pretrazivac = ({polje,naPromjeni})=>{
    return(
        <div className='pa2' >
           
                <input  className='pa3 ba b--green bg-lightest-blue ' type="search" 
                placeholder='Pretrazi robote' 
                onChange={naPromjeni}
                />
    
        </div>
    );
}
export default Pretrazivac;