import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import bookAPI from "../utils/bookAPI";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();
    }

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        bookAPI.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
            .catch(err => console.error(err));
    };

        InputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

        FormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.InputChange}
                    handleFormSubmit={this.FormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;