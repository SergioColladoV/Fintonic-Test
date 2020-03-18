// IMPORT REACT & CSS
import React, { Component } from 'react'
import './filter.css'

export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ value })
        this.props.filterResults(value.toLowerCase())
    }

    render() {
        return (
            <div className="filter-wrapper" >
                <input type="Text" placeholder="Filter by question" value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}
