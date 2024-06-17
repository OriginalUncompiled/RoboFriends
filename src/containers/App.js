import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    });

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? // if robots.length = 0
    <h1 className='tc'>Loading...</h1> :
    <div className='tc' style={{height: '100vh'}}>
        <div style={{height: '18vh'}}>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
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

export default App;