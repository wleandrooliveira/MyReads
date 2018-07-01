import React from "react";
import "./App.css";
import BookShelf from "./BOOK/BookShelf.js";
import BookSearch from "./BOOK/BookSearch.js";
import * as BooksAPI from "./API_BOOK/BooksAPI";
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    shelvedBooks: [],
    shelves: [
      {
        id: "currentlyReading",
        name: "Lendo Atualmente"
      },
      {
        id: "wantToRead",
        name: "Quero Ler"
      },
      {
        id: "read",
        name: "Leitura concluida"
      }
    ]
  };

  componentDidMount() {
    BooksAPI.getAll().then(shelvedBooks => {
      this.setState({ shelvedBooks });
    });
  }
  changeShelf = (bookToAdd, shelf) => {
    this.setState(state => {
          const nextState = state.shelvedBooks.filter(book => book.id !== bookToAdd.id).concat( [{...bookToAdd, shelf}] );
          return { shelvedBooks: nextState };
        });
      }

  render() {
    return (
      <div className="app">
        <Route path="/search"
          render={() => (
            <BookSearch
              shelvedBooks={this.state.shelvedBooks}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {this.state.shelves.map(shelf => (
                  <BookShelf
                    key={shelf.id}
                    shelf={shelf}
                    shelvedBooks={this.state.shelvedBooks}
                    books={this.state.shelvedBooks.filter(shelvedBooks => {
                      return shelvedBooks.shelf === shelf.id;
                    })}
                    changeShelf={this.changeShelf}
                  />
                ))}
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;