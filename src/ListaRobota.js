import React from 'react';
import Roboti from "./Roboti";
import {robots} from './Robots'
const ListaRobota =({razniRoboti})=>{
    return(
    <div>
        {
            razniRoboti.map((robot,i)=>{
                return(
                <Roboti key={i} id={robots[i].id} ime={robots[i].name} email={robots[i].email} />)
            })
        }
    </div>)
}
export default ListaRobota;