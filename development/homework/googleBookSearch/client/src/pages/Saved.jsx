import React, { Component } from "react";
import bookAPI from "../utils/bookAPI";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        bookAPI.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved books</h2>
                <Results books={this.state.savedBooks} />
            </div>
        )
    }
}

export default Saved;