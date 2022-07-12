import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/scroll';
import SearchBox from '../components/SearchBox';
import { render } from '@testing-library/react';
import'./App.css';
import { robots } from './robots';


//The Parent App, smart class for having State
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: ''    
        }
    }
    //Grabs the data for robot cards from the link and fills after "mount"
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{ return response.json();})
        .then(users =>{this.setState({robots:users})})
        
    }
    //Function to log the typing from the search box and set state of searchfield
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
        
    }
    //Renders all content filtered below
    render(){
        //Filters content from robots by searchfield input
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //Single Returned Div to render, Title, Search, Filtered Cards        
        return(
            <div className = 'tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>

            </div>
        );
    }    
}

export default App;