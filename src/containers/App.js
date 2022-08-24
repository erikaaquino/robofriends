import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from "../components/Scroll"



class App extends Component { //yo le AMPLIO a component que es de react fachero 
    constructor(){ //metodo
        super();
        this.state={
            robots: [], //aca en vez de array decia robots, que es mi base de datos vieja y estatica 
            searchfield:''
        }
    }
   componentDidMount () { //metodo de react cuando ya se monto el componente o sea APP
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        return response.json();
    })
    .then(user=>{
        this.setState({robots:user});
    })
        
   }
    onSearchChange=(event)=> {
        this.setState({searchfield: event.target.value})
    }
    
    render(){ //metodo de react 
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length===0){
          return <h1>Loading</h1>
        }else {
        return(
            <div className="tc">
                <h1 className="f2">RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )}
    }

}
export default App;