import React from 'react';
const Roboti = ({id, ime, email})=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt=""/>
        <div> 
            <h2>{ime}</h2> 
            <p>{email}</p>
          </div>
            </div>
    );
}
export default Roboti;