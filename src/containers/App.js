import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? // if robots.length = 0
        <h1 className='tc'>Loading...</h1> : // do this, ':' = else
        <div className='tc'>
            <div style={{height: '16vh'}}>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
            </div>
            <Scroll style={{height: '80vh'}}>
                <ErrorBoundary>
                    {!filteredRobots.length ? ( // if filteredRobots.length = 0
                        <h2 className='tc f2 pa5 nonCardH2'>Can't find a robot with '{searchfield}' in their name...</h2>
                        ) : ( // else
                        <CardList robots={filteredRobots} />
                    )}
                </ErrorBoundary>
            </Scroll>
        </div>
    }
}

export default App;