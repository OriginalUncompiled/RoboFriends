import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h2 className='tc f2 pa5'>oh no... Something Happened! \._./</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary;