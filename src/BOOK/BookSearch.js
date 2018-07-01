import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../API_BOOK/BooksAPI";
import Book from "../BOOK/Book";

class BookSearch extends React.Component {
  state = {
    findBooks: [],
    query: ""
  };

  handleSearch(e) {
    if (e.target.value !== "") {
      this.setState({ query: e.target.value });
      BooksAPI.search(this.state.query).then(findBooks => {
        this.setState({ findBooks: !findBooks || findBooks.error ? [] : findBooks });
      });
    } else {
      this.setState({ findBooks: [] });
    }
  }

  render() {
    const shelvedBooks = this.props.shelvedBooks;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Buscar Livros por Autor ou Título"
              onChange={this.handleSearch.bind(this)}
            />
          </div>
        </div>
        {this.state.findBooks !== undefined && (
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.findBooks.map(book => (
                <Book
                  book={book}
                  key={book.id}
                  changeShelf={this.props.changeShelf}
                  shelvedBooks={shelvedBooks}
                />
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default BookSearch;