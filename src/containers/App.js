import { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    };

    render() {
        const { searchField, onSearchChange, robots, isPending, error } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? // if robots.length = 0
        <h1 className='tc'>Loading...</h1> :
        <div className='tc' style={{height: '100vh'}}>
            <div style={{height: '18vh'}}>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
            </div>
            <Scroll style={{height: '80vh'}}>
                <ErrorBoundary>
                    {!robots.length && !error ? ( // if filteredRobots.length = 0
                        <h2 className='tc f2 pa5 nonCardH2'>Can't find a robot with '{searchField}' in their name...</h2>
                        ) : ( // else
                        <CardList robots={filteredRobots} />
                    )}
                </ErrorBoundary>
            </Scroll>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);