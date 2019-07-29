import React, { Component } from 'react';
import API from '../utils/API';

class Saved extends Component {
    state = {
        book: {}
    }

    componentDidMount() {
        this.getBook()
    }

    getBook() {
        API.getBook(this.props.params.id)
            .then(res => this.setState({book: res.data}))
    }

    render() {
        return(
            <div>Here is our saved book!</div>
        )
    }
}

export default Saved;