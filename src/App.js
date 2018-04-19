import React,{Component} from 'react';
import ListaRobota from './ListaRobota';
import {robots} from './Robots';
import Pretrazivac from './Pretrazivac';
import './App.css';
import Skrolanje from './Skrolanje';
class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            polje:''
        }
    }
        naPromjeni=(e)=> {
            this.setState({ polje: e.target.value})
        
    }
    render(){
         const filtriraniRoboti =this.state.robots.filter(robot => {
             return robot.name.toLowerCase().includes(this.state.polje.toLowerCase());
        })
    return(
        <div className='tc' >
        <h1 className='f1' >Robofriends</h1>
        <Pretrazivac naPromjeni={this.naPromjeni}/>
        <Skrolanje>
        <ListaRobota razniRoboti={filtriraniRoboti} />
        </ Skrolanje>
        </div>
    );
}
}
export default App;